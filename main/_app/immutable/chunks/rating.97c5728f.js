const n=`import { computed, writable } from '@amadeus-it-group/tansu';
import { INVALID_VALUE, bindableDerived, stateStores, writablesForProps } from './services';
import { isNumber } from './services/checks';
import { typeBoolean, typeFunction, typeNumber, typeString } from './services/writables';
// TODO use getValueInRange
function adjustRating(rating, maxRating) {
    return Math.max(Math.min(rating, maxRating), 0);
}
const noop = () => { };
const defaultConfig = {
    rating: 0,
    tabindex: 0,
    maxRating: 10,
    disabled: false,
    readonly: false,
    resettable: true,
    ariaValueTextFn: (rating, maxRating) => \`\${rating} out of \${maxRating}\`,
    onHover: noop,
    onLeave: noop,
    onRatingChange: noop,
    className: '',
    slotStar: ({ fill }) => String.fromCharCode(fill === 100 ? 9733 : 9734),
    ariaLabel: 'Rating',
    ariaLabelledBy: '',
};
/**
 * Returns a shallow copy of the default rating config.
 * @returns a copy of the default config
 */
export function getRatingDefaultConfig() {
    return { ...defaultConfig };
}
// TODO export normalize function in utils and test them.
const configValidator = {
    rating: typeNumber,
    tabindex: typeNumber,
    maxRating: { normalizeValue: (value) => (isNumber(value) ? Math.max(0, value) : INVALID_VALUE) },
    disabled: typeBoolean,
    readonly: typeBoolean,
    resettable: typeBoolean,
    ariaValueTextFn: typeFunction,
    onHover: typeFunction,
    onLeave: typeFunction,
    onRatingChange: typeFunction,
    className: typeString,
    ariaLabel: typeString,
    ariaLabelledBy: typeString,
};
/**
 * Create a RatingWidget with given config props
 * @param config - an optional alert config
 * @returns a RatingWidget
 */
export function createRating(config) {
    const [{ 
    // dirty inputs that need adjustment:
    rating$: _dirtyRating$, tabindex$: _dirtyTabindex$, 
    // clean inputs with value validation:
    ariaValueTextFn$, onHover$, onLeave$, onRatingChange$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config, configValidator);
    const { maxRating$, disabled$, readonly$, resettable$ } = stateProps;
    // clean inputs adjustment to valid range
    const tabindex$ = computed(() => (disabled$() ? -1 : _dirtyTabindex$()));
    const rating$ = bindableDerived(onRatingChange$, [_dirtyRating$, maxRating$], ([dirtyRating, maxRating]) => adjustRating(dirtyRating, maxRating));
    // internal inputs
    const _hoveredRating$ = writable(0);
    // computed
    const isInteractive$ = computed(() => !disabled$() && !readonly$());
    const visibleRating$ = computed(() => {
        const rating = rating$(); // call rating unconditionnally (for the bindableDerived to stay active)
        const hoveredRating = _hoveredRating$();
        return hoveredRating !== 0 ? hoveredRating : rating;
    });
    const ariaValueText$ = computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
    const stars$ = computed(() => {
        const visibleRating = visibleRating$();
        return Array.from({ length: maxRating$() }, (_v, i) => ({
            fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
            index: i,
        }));
    });
    return {
        ...stateStores({
            ariaValueText$,
            isInteractive$,
            rating$,
            stars$,
            tabindex$,
            visibleRating$,
            ...stateProps,
        }),
        patch,
        actions: {
            click: (index) => {
                if (isInteractive$() && index > 0 && index <= maxRating$()) {
                    patch({ rating: rating$() === index && resettable$() ? 0 : index });
                }
            },
            hover: (index) => {
                if (isInteractive$() && index > 0 && index <= maxRating$()) {
                    _hoveredRating$.set(index);
                    onHover$()(index);
                }
            },
            leave: () => {
                if (isInteractive$()) {
                    onLeave$()(_hoveredRating$());
                    _hoveredRating$.set(0);
                }
            },
            handleKey(event) {
                if (isInteractive$()) {
                    const { key } = event;
                    switch (key) {
                        case 'ArrowLeft':
                        case 'ArrowDown':
                            patch({ rating: rating$() - 1 });
                            break;
                        case 'ArrowRight':
                        case 'ArrowUp':
                            patch({ rating: rating$() + 1 });
                            break;
                        case 'Home':
                        case 'PageDown':
                            patch({ rating: 0 });
                            break;
                        case 'End':
                        case 'PageUp':
                            patch({ rating: maxRating$() });
                            break;
                        default:
                            return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                }
            },
        },
        directives: {},
        api: {},
    };
}
`;export{n as default};
