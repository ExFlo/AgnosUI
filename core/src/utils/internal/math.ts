const decimalRegExp = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;

/**
 * @param number - decimal number
 * @returns the decimal precision of the number
 */
export function getDecimalPrecision(number: number): number {
	const matches = ('' + number).match(decimalRegExp);
	return Math.max(
		0,
		// Number of digits right of decimal point.
		(matches![1]?.length ?? 0) -
			// Adjust for exponential notation.
			(+matches![2] || 0),
	);
}
