/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
      // Check if the object is an array
    if (Array.isArray(obj)) {
        return obj.length === 0; // An array is empty if its length is 0
    } else {
        // If it's not an array, assume it's an object
        return Object.keys(obj).length === 0; // An object is empty if it has no keys
    }
};