import {expect, test} from '../fixture';
import {RatingPO} from '@agnos-ui/page-objects';
import {RatingDemoPO} from '../demo-po/rating.po';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<RatingPO['state']>>;

function createArray<T>(length: number, value: T) {
	const array: T[] = [];
	array.length = length;
	array.fill(value);
	return array;
}

test.describe.parallel(`Rating tests`, () => {
	test(`Basic features`, async ({page}) => {
		const ratingDemoPO = new RatingDemoPO(page);
		const ratingPO = new RatingPO(page, 0);

		await page.goto('#/rating/default');
		await ratingPO.locatorRoot.waitFor();

		await test.step('click interactions', async () => {
			let expectedState: State = {
				rootClasses: ['au-rating', 'd-inline-flex'],
				min: '0',
				max: '10',
				value: '3',
				text: '3 out of 10',
				disabled: null,
				readonly: null,
				stars: ['★', '★', '★', '☆', '☆', '☆', '☆', '☆', '☆', '☆'],
				classes: createArray(10, ['au-rating-star']),
			};

			await expect.poll(() => ratingPO.state()).toEqual(expectedState);
			await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: 3, hovered: 0, left: 0});

			const star = ratingPO.locatorStar(4);

			await star.hover();
			expectedState = {
				...expectedState,
				value: '5',
				text: '5 out of 10',
				stars: ['★', '★', '★', '★', '★', '☆', '☆', '☆', '☆', '☆'],
			};
			await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: 3, hovered: 5, left: 0});
			await expect.poll(() => ratingPO.state()).toEqual(expectedState);

			await star.click();
			await expect.poll(() => ratingPO.state()).toEqual(expectedState);
			await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: 5, hovered: 5, left: 0});

			await page.locator('body').hover(); // Leave the first rating

			await expect.poll(() => ratingPO.state()).toEqual(expectedState);
			await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: 5, hovered: 5, left: 5});

			await star.click();
			await page.locator('body').hover(); // Leave the first rating
			expectedState = {
				...expectedState,
				value: '0',
				text: '0 out of 10',
				stars: ['☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆', '☆'],
			};
			await expect.poll(() => ratingPO.state()).toEqual(expectedState);
			await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: 0, hovered: 5, left: 5});
		});
		await test.step('keyboard interactions', async () => {
			await ratingPO.locatorRoot.focus();
			const expectValue = async (value: number) => {
				await expect
					.poll(() => ratingPO.state())
					.toEqual({
						rootClasses: ['au-rating', 'd-inline-flex'],
						min: '0',
						max: '10',
						value: value.toString(),
						text: `${value} out of 10`,
						disabled: null,
						readonly: null,
						stars: createArray(value, '★').concat(createArray(10 - value, '☆')),
						classes: createArray(10, ['au-rating-star']),
					});
				await expect.poll(() => ratingDemoPO.defaultRatingDemoState()).toEqual({rating: value, hovered: 5, left: 5});
			};
			await page.keyboard.press('ArrowRight');
			await expectValue(1);
			await page.keyboard.press('ArrowUp');
			await expectValue(2);
			await page.keyboard.press('ArrowLeft');
			await expectValue(1);
			await page.keyboard.press('ArrowDown');
			await expectValue(0);
			await page.keyboard.press('End');
			await expectValue(10);
			await page.keyboard.press('Home');
			await expectValue(0);
			await page.keyboard.press('PageUp');
			await expectValue(10);
			await page.keyboard.press('PageDown');
			await expectValue(0);
			await page.keyboard.press('a');
			await expectValue(0);
		});
	});

	test(`Read only`, async ({page}) => {
		const ratingPO = new RatingPO(page);
		await page.goto('#/rating/readonly');
		await ratingPO.locatorRoot.waitFor();

		const expectedClasses: string[][] = [];
		expectedClasses.length = 5;
		expectedClasses.fill(['au-rating-star']);
		const expectedState: State = {
			rootClasses: ['au-rating', 'd-inline-flex', 'rating-readonly'],
			min: '0',
			max: '5',
			value: '3.64',
			text: '3.64 out of 5',
			disabled: null,
			readonly: 'true',
			stars: ['', '', '', '', ''],
			classes: expectedClasses,
		};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);

		// eslint-disable-next-line playwright/no-force-option
		await ratingPO.locatorStar(4).click({force: true});
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);
	});

	test(`Form`, async ({page}) => {
		const ratingDemoPO = new RatingDemoPO(page);
		const ratingPO = new RatingPO(page);
		await page.goto('#/rating/form');
		await ratingPO.locatorRoot.waitFor();

		let expectedState = {msg: 'Please rate us', model: 0, enabledBtnText: 'control enabled'};

		await expect.poll(() => ratingDemoPO.formRatingDemoState()).toEqual(expectedState);

		await ratingPO.locatorStar(2).click();
		expectedState = {
			...expectedState,
			msg: 'Thanks!',
			model: 3,
		};
		await expect.poll(() => ratingDemoPO.formRatingDemoState()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnClear.click();
		expectedState = {
			...expectedState,
			msg: 'Please rate us',
			model: 0,
		};
		await expect.poll(() => ratingDemoPO.formRatingDemoState()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnEnabled.click();
		// eslint-disable-next-line playwright/no-force-option
		await ratingPO.locatorStar(2).click({force: true});
		expectedState = {
			...expectedState,
			msg: '',
			enabledBtnText: 'control disabled',
		};
		await expect.poll(() => ratingDemoPO.formRatingDemoState()).toEqual(expectedState);
	});

	test(`Config`, async ({page}) => {
		const ratingDemoPO = new RatingDemoPO(page);
		const ratingPO = new RatingPO(page);
		await page.goto('#/rating/config');
		await ratingPO.locatorRoot.waitFor();

		let expectedState: State = {
			rootClasses: ['au-rating', 'd-inline-flex'],
			min: '0',
			max: '10',
			value: '3',
			text: '3 out of 10',
			disabled: null,
			readonly: null,
			stars: ['★', '★', '★', '☆', '☆', '☆', '☆', '☆', '☆', '☆'],
			classes: createArray(10, ['au-rating-star']),
		};

		await ratingDemoPO.locatorBtnConfigDisabled('true').click();
		expectedState = {...expectedState, disabled: 'true'};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnConfigMaxRating('20').click();
		expectedState = {
			...expectedState,
			stars: [...createArray(3, '★'), ...createArray(17, '☆')],
			max: '20',
			text: '3 out of 20',
			classes: createArray(20, ['au-rating-star']),
		};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnConfigSlotStar("'*'").click();
		expectedState = {
			...expectedState,
			stars: createArray(20, '*'),
		};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnConfigSlotStar('custom').click();
		expectedState = {
			...expectedState,
			stars: createArray(20, '♥♥'),
		};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);

		await ratingDemoPO.locatorBtnConfigClassName('fs-1').click();
		expectedState = {
			...expectedState,
			rootClasses: [...expectedState.rootClasses, 'fs-1'],
		};
		await expect.poll(() => ratingPO.state()).toEqual(expectedState);
	});
});
