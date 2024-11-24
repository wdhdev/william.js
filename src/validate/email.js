/**
 * 
 * @param {string} email The email address to test
 * @returns {boolean} Whether the email address passed the regex test
 * @example
import { validate } from "william.js";

validate.email("hello@example.com")
//=> true

validate.email("hello@subdomain.example.com")
//=> true

validate.email("@example.com")
//=> false

validate.email("hello@example")
//=> false
 */

module.exports = function email(email) {
    // Errors
    if(!email) throw new TypeError("No email address was provided.");
    if(typeof email !== "string") throw new TypeError("The provided email address is not a string.");

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
}
