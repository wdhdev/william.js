// Taken from md5-hex@5.0.0, which is licensed under the MIT license.
// https://www.npmjs.com/package/md5-hex/v/5.0.0

const crypto = require("node:crypto");

/**
 * 
 * @param {Uint8Array | string | ReadonlyArray<Uint8Array | string>} data The data to hash
 * @returns {string} An MD5 hash of the input data
 * @example
import fs from "node:fs";
import { util } from "william.js";

const buffer = fs.readFileSync("unicorn.png");

util.md5Hex(buffer);
//=> "1abcb33beeb811dca15f0ac3e47b88d9"
 */

module.exports = function md5Hex(data) {
    // Errors
    if(!data) throw new TypeError("No data was provided.");

    const hash = crypto.createHash("md5");

    const update = buffer => {
        const inputEncoding = typeof buffer === "string" ? "utf8" : undefined;
        hash.update(buffer, inputEncoding);
    }

    if(Array.isArray(data)) {
        for(const element of data) {
            update(element);
        }
    } else {
        update(data);
    }

    return hash.digest("hex");
}
