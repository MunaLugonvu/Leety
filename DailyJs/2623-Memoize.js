

 /**Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
  */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // Store the results of previous function calls
    return function(...args) {
         // Generate a unique key for the arguments
        const key = args.join(',');

        // Check if the result is already in the cache
        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }
         // Call the original function and store the result in the cache
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */