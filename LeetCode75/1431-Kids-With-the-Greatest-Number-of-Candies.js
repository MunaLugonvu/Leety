/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     const maxCandies = Math.max(...candies);  // Find the maximum candies any kid has
    return candies.map(candy => candy + extraCandies >= maxCandies); 
};