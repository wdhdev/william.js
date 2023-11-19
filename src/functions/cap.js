/**
 * 
 * @param {string} str The string to cap
 * @param {number} length How many characters to cap the string at
 * @param {boolean} ellipsis Whether or not to add an ellipsis to the end of the string
 * @returns {string} Capped string if the string is longer than the length
 * @example
import { cap } from "william.js";

cap("Hello, world!", 5, true);
//=> "Hello..."

cap("Hello, world!", 5, false);
//=> "Hello"
 */

module.exports = function cap(str, length, ellipsis = true) {
    // Errors
    if(str == null) throw new Error("String cannot be null");
    if(length == null) throw new Error("Length cannot be null");
    if(typeof str !== "string") throw new Error("String must be a string");
    if(str.length <= 0) throw new Error("String cannot be empty");
    if(typeof length !== "number") throw new Error("Length must be a number");
    if(isNaN(length)) throw new Error("Length cannot be NaN");
    if(length < 0) throw new Error("Length cannot be negative");
    if(typeof ellipsis !== "boolean") throw new Error("Ellipsis must be a boolean");

    // Return string if it's shorter than the length
    if(str?.length <= length) return str;

    return str.substr(0, length) + (ellipsis ? "..." : "");
}
