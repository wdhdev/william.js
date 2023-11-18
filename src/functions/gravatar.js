const md5Hex = require("../util/md5Hex.js");

/**
 * 
 * @param {string} email The email address to get the Gravatar of
 * @returns {string} Gravatar URL
 * @example
```
gravatar("hello@example.com"); // https://gravatar.com/avatar/cb8419c1d471d55fbca0d63d1fb2b6ac
```
 */

module.exports = function gravatar(email) {
    // Errors
    if(email == null) throw new Error("Email cannot be null");
    if(typeof email !== "string") throw new Error("Email must be a string");
    if(email.length <= 0) throw new Error("Email cannot be empty");

    // Validate email
    if(!validation(email)) throw new Error("Email is not valid");

    // Return URL or hash
    return `https://gravatar.com/avatar/${md5Hex(email.toLowerCase().trim())}`;
}

/**
 * 
 * @param {string} email The email address to validate
 * @returns {boolean} Whether or not the string is a valid email address
 */

function validation(email) {
    // Errors
    if(email == null) throw new Error("Email cannot be null");
    if(typeof email !== "string") throw new Error("Email must be a string");
    if(email.length <= 0) throw new Error("Email cannot be empty");

    // Regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}
