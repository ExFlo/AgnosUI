const e=`/**
 * a number type guard
 * @param value the value to check
 * @returns true if the value is a number
 */
export declare function isNumber(value: any): value is number;
/**
 * a boolean type guard
 * @param value the value to check
 * @returns true if the value is a boolean
 */
export declare function isBoolean(value: any): value is boolean;
/**
 * a function type guard
 * @param value the value to check
 * @returns true if the value is a function
 */
export declare function isFunction(value: any): value is (...args: any[]) => any;
/**
 * a string type guard
 * @param value the value to check
 * @returns true if the value is a string
 */
export declare function isString(value: any): value is string;
/**
 * Clamp the value based on a maximum and optional minimum
 * @param value the value to check
 * @param max the max to clamp to
 * @param [min] the min to clamp to
 * @returns the clamped value
 */
export declare function clamp(value: number, max: number, min?: number): number;
`;export{e as default};
