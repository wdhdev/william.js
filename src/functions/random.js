/**
 * 
 * @param {number} min The minimum number to generate
 * @param {number} max The maximum number to generate
 * @returns {number} A random number between the min and max
 * @example
import { random } from "william.js";

random(1, 10);
//=> 5
 */

module.exports = function random(min, max) {
    // Errors
    if(min == null) throw new Error("Min cannot be null");
    if(typeof min !== "number") throw new Error("Min must be a number");
    if(isNaN(min)) throw new Error("Min cannot be NaN");
    if(max == null) throw new Error("Max cannot be null");
    if(typeof max !== "number") throw new Error("Max must be a number");
    if(isNaN(max)) throw new Error("Max cannot be NaN");
    if(min > max) throw new Error("Min cannot be greater than max");
    if(min === max) throw new Error("Min cannot be equal to max");

    return Math.floor(Math.random() * (max - min + 1) + min);
}
