/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
     const grouped = {}; // Create an empty object to hold the groups

  for (const item of this) {
    const key = fn(item); // Apply the function to get the group key
    if (!grouped[key]) {
      grouped[key] = []; // Initialize an empty array for a new key
    }
    grouped[key].push(item); // Add the item to the appropriate group
  }

  return grouped
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */