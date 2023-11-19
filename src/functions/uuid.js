const randomUUID = require("crypto").randomUUID;

/**
 * 
 * @param {number} amount The amount of UUIDs to generate
 * @returns {string|string[]} A single UUID or an array of UUIDs
 * @example
import { uuid } from "william.js";

uuid();
//=> "80e65ae3-d006-42d6-96c8-0de8238f6e35"

uuid(5);
//=> [
//=>   "80e65ae3-d006-42d6-96c8-0de8238f6e35",
//=>   "0ffa8194-20c9-47e5-ad0f-1e29a196a021",
//=>   "9d60756e-30a3-4c68-af16-c5733a4221af",
//=>   "cd7acdca-ab33-445b-bf83-e59959b8ebb7",
//=>   "efbf566f-b4d1-4df7-8a74-0cd8b7ef2bca"
//=> ]
 */

module.exports = function uuid(amount = 1) {
    // Errors
    if(typeof amount !== "number") throw new TypeError("Amount must be a number.");
    if(isNaN(amount)) throw new TypeError("Amount cannot be NaN.");
    if(amount < 1) throw new TypeError("Amount cannot be less than 1.");
    if(amount > 100) throw new TypeError("Amount cannot be greater than 100.");

    // Generate UUIDs
    const uuids = [];

    for(let i = 0; i < amount; i++) {
        uuids.push(randomUUID());
    }

    return amount === 1 ? uuids[0] : uuids;
}
