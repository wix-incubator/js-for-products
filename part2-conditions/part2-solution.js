// copy paste this to the snippets area in the dev tools
/* implement
 * if both numbers are even: set the product of x and y to result variable
 * else, set the sum of x and y to result variable
 *
 * Hint - use % 2 to check if a number is even
 *
 * examples:
 *
 * multipleOrAdd(2, 4) -> 8
 * multipleOrAdd(6, 4) -> 24
 * multipleOrAdd(6, 3) -> 9
 * multipleOrAdd(6, 3) -> 9
 * multipleOrAdd(1, 10) -> 11
 *
 */

function multipleOrAdd(x, y) {
    let result

    const isXEven = x % 2 === 0
    const isYEven = y % 2 === 0

    if (isXEven && isYEven) {
        result = x * y
    } else {
        result = x + y
    }

    return result
}
