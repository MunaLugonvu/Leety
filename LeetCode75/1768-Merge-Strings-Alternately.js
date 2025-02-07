/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
     let merged = "";  // Stores the final merged string
    let i = 0, j = 0; // Pointers for word1 and word2

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i]; // Add character from word1
            i++;
        }
        if (j < word2.length) {
            merged += word2[j]; // Add character from word2
            j++;
        }
    }

    return merged;
};