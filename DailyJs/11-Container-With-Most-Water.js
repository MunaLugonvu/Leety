/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0; // Start pointer at the beginning
    let right = height.length - 1; // Start pointer at the end
    let maxArea = 0; // Initialize maximum area as 0
  while (left < right) {
        // Calculate the area formed by the two lines
        const area = Math.min(height[left], height[right]) * (right - left);

        // Update the maximum area if this area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return maxArea; // Return the maximum area found
};