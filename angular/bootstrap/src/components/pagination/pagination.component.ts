import type {SlotContent} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute} from '@agnos-ui/angular-headless';
import type {AfterContentChecked} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {PaginationContext, PaginationNumberContext, PaginationProps, PaginationWidget} from './pagination.gen';
import {createPagination} from './pagination.gen';

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationEllipsis]', standalone: true})
export class PaginationEllipsisDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'first' link template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationFirst]', standalone: true})
export class PaginationFirstDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationFirstDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'last' link template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationLast]', standalone: true})
export class PaginationLastDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationLastDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'next' link template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationNext]', standalone: true})
export class PaginationNextDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationNextDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the page 'number' template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationNumber]', standalone: true})
export class PaginationNumberDirective {
	public templateRef = inject(TemplateRef<PaginationNumberContext>);
	static ngTemplateContextGuard(_dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext {
		return true;
	}
}

/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
@Directive({selector: 'ng-template[auPaginationPrevious]', standalone: true})
export class PaginationPreviousDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationPreviousDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
@Directive({selector: 'ng-template[auPaginationPages]', standalone: true})
export class PaginationPagesDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * Directive to provide the slot structure for the pagination widget.
 */
@Directive({selector: 'ng-template[auPaginationStructure]', standalone: true})
export class PaginationStructureDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationStructureDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

@Component({
	standalone: true,
	imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-template auPaginationPages #pages let-state="state" let-api="api" let-directives="directives">
			@for (page of state.pages; track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page" [class.disabled]="page === -1 || state.disabled">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.ellipsisLabel" [auSlotProps]="{state, api, directives}"></ng-template>
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel }}</span>
					} @else {
						<a class="page-link" [auUse]="[directives.pageLink, {page}]">
							<ng-template [auSlot]="state.numberLabel" [auSlotProps]="{state, api, directives, displayedPage: page}"></ng-template>
							@if (state.page === page) {
								<span class="visually-hidden">{{ state.activeLabel }}</span>
							}
						</a>
					}
				</li>
			}
		</ng-template>
		<ng-template auPaginationStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a class="page-link" [auUse]="directives.pageFirst">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.firstPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a class="page-link" [auUse]="directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.previousPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.pagesDisplay" [auSlotProps]="{state, api, directives}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.nextPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.lastPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">{{ state.ariaLiveLabelText }}</div>
		</ng-template>
	`,
})
export class PaginationDefaultSlotsComponent {
	@ViewChild('pages', {static: true}) pages!: TemplateRef<PaginationContext>;
	@ViewChild('structure', {static: true}) structure!: TemplateRef<PaginationContext>;
}
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
export const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<PaginationProps> = {
	structure: paginationDefaultSlotStructure,
	pagesDisplay: paginationDefaultSlotPages,
};

@Component({
	selector: '[auPagination]',
	standalone: true,
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[attr.aria-label]': 'state().ariaLabel',
	},
	encapsulation: ViewEncapsulation.None,
	template: `<ng-template [auSlotProps]="{state: state(), api, directives}" [auSlot]="state().structure"></ng-template>`,
})
export class PaginationComponent extends BaseWidgetDirective<PaginationWidget> implements AfterContentChecked {
	/**
	 * Provide the label for each "Page" page button.
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param processPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
	 * ```
	 */
	@Input('auAriaPageLabel') ariaPageLabel: ((processPage: number, pageCount: number) => string) | undefined;

	/**
	 * Provide the label for the aria-live element
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param currentPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (currentPage: number) => `Current page is ${currentPage}`
	 * ```
	 */
	@Input('auAriaLiveLabel') ariaLiveLabel: ((currentPage: number, pageCount: number) => string) | undefined;

	/**
	 * The label for the nav element.
	 *
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Page navigation'`
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The label for the "active" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * '(current)'
	 * ```
	 */
	@Input('auActiveLabel') activeLabel: string | undefined;

	/**
	 * The label for the "First" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for first page'
	 * ```
	 */
	@Input('auAriaFirstLabel') ariaFirstLabel: string | undefined;

	/**
	 * The label for the "Previous" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for previous page'
	 * ```
	 */
	@Input('auAriaPreviousLabel') ariaPreviousLabel: string | undefined;

	/**
	 * The label for the "Next" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for next page'
	 * ```
	 */
	@Input('auAriaNextLabel') ariaNextLabel: string | undefined;

	/**
	 * The label for the "Last" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for last page'
	 * ```
	 */
	@Input('auAriaLastLabel') ariaLastLabel: string | undefined;

	/**
	 * The label for the "Ellipsis" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Ellipsis page element'`
	 */
	@Input('auAriaEllipsisLabel') ariaEllipsisLabel: string | undefined;

	/**
	 * Factory function providing the href for a "Page" page anchor,
	 * based on the current page number
	 * @param pageNumber - The index to use in the link
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number) => PAGE_LINK_DEFAULT
	 * ```
	 */
	@Input('auPageLink') pageLink: ((pageNumber: number) => string) | undefined;

	readonly _widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		defaultConfig,
		events: {
			onPageChange: (page: number) => this.pageChange.emit(page),
		},
	});

	/**
	 * The template to use for the ellipsis slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'…'`
	 */
	@Input('auEllipsisLabel') ellipsisLabel: SlotContent<PaginationContext>;
	@ContentChild(PaginationEllipsisDirective, {static: false})
	slotEllipsisFromContent: PaginationEllipsisDirective | undefined;

	/**
	 * The template to use for the first slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'«'`
	 */
	@Input('auFirstPageLabel') firstPageLabel: SlotContent<PaginationContext>;
	@ContentChild(PaginationFirstDirective, {static: false})
	slotFirstFromContent: PaginationFirstDirective | undefined;

	/**
	 * The template to use for the previous slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'‹'`
	 */
	@Input('auPreviousPageLabel') previousPageLabel: SlotContent<PaginationContext>;
	@ContentChild(PaginationPreviousDirective, {static: false})
	slotPreviousFromContent: PaginationPreviousDirective | undefined;

	/**
	 * The template to use for the next slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'›'`
	 */
	@Input('auNextPageLabel') nextPageLabel: SlotContent<PaginationContext>;
	@ContentChild(PaginationNextDirective, {static: false})
	slotNextFromContent: PaginationNextDirective | undefined;

	/**
	 * The template to use for the last slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'»'`
	 */
	@Input('auLastPageLabel') lastPageLabel: SlotContent<PaginationContext>;
	@ContentChild(PaginationLastDirective, {static: false})
	slotLastFromContent: PaginationLastDirective | undefined;

	/**
	 * The template to use for the pages slot
	 * To use to customize the pages view
	 * override any configuration parameters provided for this
	 */
	@Input('auPagesDisplay') pagesDisplay: SlotContent<PaginationContext>;
	@ContentChild(PaginationPagesDirective, {static: false})
	slotPagesFromContent: PaginationPagesDirective | undefined;

	/**
	 * The template to use for the number slot
	 * override any configuration parameters provided for this
	 * for I18n, we suggest to use the global configuration
	 * @param displayedPage - The current page number
	 *
	 * @defaultValue
	 * ```ts
	 * ({displayedPage}: PaginationNumberContext) => `${displayedPage}`
	 * ```
	 */
	@Input('auNumberLabel') numberLabel: SlotContent<PaginationNumberContext>;
	@ContentChild(PaginationNumberDirective, {static: false})
	slotNumberLabelFromContent: PaginationNumberDirective | undefined;

	/**
	 * The template to use for the structure of the pagination component
	 * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
	 * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
	 * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
	 * {@link PaginationProps.numberLabel|numberLabel},
	 */
	@Input('auStructure') structure: SlotContent<PaginationContext>;
	@ContentChild(PaginationStructureDirective, {static: false})
	slotStructureFromContent: PaginationStructureDirective | undefined;

	/**
	 * If `true`, pagination links will be disabled.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auBoundaryLinks', transform: auBooleanAttribute}) boundaryLinks: boolean | undefined;

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auDirectionLinks', transform: auBooleanAttribute}) directionLinks: boolean | undefined;

	/**
	 * The number of items in your paginated collection.
	 *
	 * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
	 * `collectionSize` and `pageSize`.
	 *
	 * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
	 *
	 * Whatever the collectionSize the page number is of minimum 1.
	 *
	 * @defaultValue `0`
	 */
	@Input({alias: 'auCollectionSize', transform: auNumberAttribute}) collectionSize: number | undefined;

	/**
	 * The current page.
	 *
	 * Page numbers start with `1`.
	 *
	 * @defaultValue `1`
	 */
	@Input({alias: 'auPage', transform: auNumberAttribute}) page: number | undefined;

	/**
	 * The number of items per page.
	 * @remarks min value is 1
	 *
	 * @defaultValue `10`
	 */
	@Input({alias: 'auPageSize', transform: auNumberAttribute}) pageSize: number | undefined;

	/**
	 * The pagination display size.
	 *
	 * Bootstrap currently supports small and large sizes.
	 *
	 * @defaultValue `null`
	 */
	@Input('auSize') size: 'sm' | 'lg' | null | undefined;

	/**
	 * pagesFactory returns a function computing the array of pages to be displayed
	 * as number (-1 are treated as ellipsis).
	 * Use Page slot to customize the pages view and not this
	 * @param page - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number, pageCount: number) => {
	 * 		const pages: number[] = [];
	 * 		for (let i = 1; i <= pageCount; i++) {
	 * 			pages.push(i);
	 * 		}
	 * 		return pages;
	 * 	}
	 * ```
	 */
	@Input('auPagesFactory') pagesFactory: ((page: number, pageCount: number) => number[]) | undefined;

	/**
	 * An event fired when the page is changed.
	 *
	 * Event payload is the number of the newly selected page.
	 *
	 * Page numbers start with `1`.
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auPageChange') pageChange = new EventEmitter<number>();

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			structure: this.slotStructureFromContent?.templateRef,
			ellipsisLabel: this.slotEllipsisFromContent?.templateRef,
			firstPageLabel: this.slotFirstFromContent?.templateRef,
			previousPageLabel: this.slotPreviousFromContent?.templateRef,
			nextPageLabel: this.slotNextFromContent?.templateRef,
			lastPageLabel: this.slotLastFromContent?.templateRef,
			pagesDisplay: this.slotPagesFromContent?.templateRef,
			numberLabel: this.slotNumberLabelFromContent?.templateRef,
		});
	}
}
