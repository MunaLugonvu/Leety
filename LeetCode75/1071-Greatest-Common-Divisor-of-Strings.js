/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // If str1 + str2 is not equal to str2 + str1, no common divisor exists
    if (str1 + str2 !== str2 + str1) return '';

    // Find the GCD of lengths of str1 and str2
    const len = gcd(str1.length, str2.length);

    // Return the substring of str1 up to the GCD length
    return str1.substring(0, len);
};