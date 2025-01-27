/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
     return new Promise((resolve, reject) => {
        const results = []; // Array to store resolved values
        let completedCount = 0; // Tracks completed promises

        // Iterate over the functions array
        functions.forEach((fn, index) => {
            // Call each asynchronous function
            fn()
                .then((result) => {
                    results[index] = result; // Save result in the correct order
                    completedCount++;

                    // If all promises are resolved, resolve the main promise
                    if (completedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // Reject immediately if any promise is rejected
                    reject(err);
                });
        });

        // Handle the case when the functions array is empty
        if (functions.length === 0) {
            resolve(results); // Resolve with an empty array
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */