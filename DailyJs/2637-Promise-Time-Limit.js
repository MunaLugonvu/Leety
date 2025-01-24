/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
         return new Promise((resolve, reject) => {
            // Create a timeout that rejects the promise if time limit is exceeded
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);

            // Call the asynchronous function
            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId); // Clear timeout if fn completes in time
                    resolve(result); // Resolve with the result of fn
                })
                .catch((err) => {
                    clearTimeout(timeoutId); // Clear timeout if fn fails in time
                    reject(err); // Reject with the error of fn
                });
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */