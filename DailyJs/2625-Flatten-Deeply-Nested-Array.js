/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
     if (n === 0) return arr; // Base case: If depth is 0, return array as is.

    let result = [];

    for (const element of arr) {
        if (Array.isArray(element) && n > 0) {
            result.push(...flat(element, n - 1)); // Recursively flatten with reduced depth
        } else {
            result.push(element); // Add non-array elements as they are
        }
    }

    return result;
};