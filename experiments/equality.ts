// @ts-nocheck

/**
 * [Javascript Comparisons](https://javascript.info/comparison)
 * When comparing values of different types, JavaScript converts the values to numbers.
 */
console.log(`'2' > 1 is`, '2' > 1);
console.log(`'01'== 1 is`, '01' == 1);

console.log(`0 == false is`, 0 == false);
console.log(`0 == '' is`, 0 == '');

/**
 * The equality check `==` for `undefined` and `null` is define such that,
 * without any conversions, they equal each other and don't equal anything else.
 */
console.log(`undefined == null is`, undefined == null);
console.log(`0 == undefined is`, 0 == undefined);
console.log(`0 == null is`, 0 == null);
console.log(`NaN == undefined is`, NaN == undefined);
console.log(`NaN == null is`, NaN == null);

/**
 * Mathematically, the following is strange.  The last result states that "null is greater than or equal to zero",
 * so in one of the comparisons above it must be true.
 *
 * The reason is that an equality check `==` and comparisons `> < >= <=` work differently.  Comparisons convert
 * null to a number, treating it as 0.  That's why `null >= 0` is true and `null > 0` is false.
 */
console.log(`null > 0 is`, null > 0);
console.log(`null == 0 is`, null == 0);
console.log(`null >= 0 is`, null >= 0);
