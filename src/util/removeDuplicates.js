/**
 * 
 * @param {Array} arr The array to remove duplicates from
 * @returns {Array} The array without duplicates
 * @example
import { util } from "william.js";

util.removeDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6]);
//=> [1, 2, 3, 4, 5, 6]
 */

module.exports = function removeDuplicates(arr) {
    // Errors
    if(!arr) throw new TypeError("No array was provided.");
    if(!Array.isArray(arr)) throw new TypeError("The provided value is not an array.");

    return [...new Set(arr)];
}
