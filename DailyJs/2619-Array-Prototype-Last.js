/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
      if (this.length === 0) {
    return -1; // Return -1 if the array is empty
  }
  return this[this.length - 1]; // Return the last element of the array
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */