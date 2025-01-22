/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x; // Start with the initial input
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result); // Pass the result through each function, starting from the last
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */