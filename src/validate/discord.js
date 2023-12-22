/**
 * 
 * @param {string} url The webhook URL to test
 * @returns {boolean} Whether the webhook URL passed the regex test
 * @example
import { validate } from "william.js";

validate.discord.webhook("https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz");
//=> true

validate.discord.webhook("https://discord.com/api/webhooks/invalid/webhook");
//=> false
 */

module.exports.webhook = function webhook(url) {
    // Errors
    if(!url) throw new TypeError("No URL was provided.");
    if(typeof url !== "string") throw new TypeError("The provided URL is not a string.");

    const regex = /^https:\/\/discord\.com\/api\/webhooks\/\d+\/\S+$/;

    return regex.test(url);
}
