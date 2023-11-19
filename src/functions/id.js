const removeDuplicates = require("../util/removeDuplicates");

/**
 * 
 * @param {number} length The length of the ID
 * @param {number} amount The amount of IDs to generate
 * @param {string} alphabet The alphabet to use
 * @returns {string|string[]} A single ID or an array of IDs
 * @example
import { id } from "william.js";

id();
//=> "w9Jjy2L0R8Jg0W0X7t0w9H5Q2Y9V1E0C"

id(5);
//=> "w9Jjy"

id(5, 5);
//=> [
//=>   "w9Jjy",
//=>   "u5V5J",
//=>   "Q9T8l",
//=>   "B6T7Y",
//=>   "S4K4P"
//=> ]

id(5, 5, "abc");
//=> [
//=>   "bbaac",
//=>   "cbcca",
//=>   "abccb",
//=>   "cbcca",
//=>   "acbab"
//=> ]
 */

module.exports = function id(length = 32, amount = 1, alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    // Errors
    if(!length) throw new TypeError("No length was provided.");
    if(typeof length !== "number") throw new TypeError("The provided length is not a number.");
    if(!amount) throw new TypeError("No amount was provided.");
    if(typeof amount !== "number") throw new TypeError("The provided amount is not a number.");
    if(!alphabet) throw new TypeError("No alphabet was provided.");
    if(typeof alphabet !== "string") throw new TypeError("The provided alphabet is not a string.");

    alphabet = removeDuplicates(alphabet.split("")).join("");

    let ids = [];

    for(let i = 0; i < amount; i++) {
        let id = "";

        for(let j = 0; j < length; j++) {
            id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        ids.push(id);
    }

    return ids.length === 1 ? ids[0] : ids;
}
