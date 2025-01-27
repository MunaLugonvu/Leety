/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
     let chunkedArray = []; // Initialize an empty array to store the chunks
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size)); // Take a slice of `size` and add it to the result
    }
    return chunkedArray;
};
