// Taken from md5-hex@5.0.0, which is licensed under the MIT license.
// https://www.npmjs.com/package/md5-hex/v/5.0.0

const crypto = require("node:crypto");

/**
 * 
 * @param {Uint8Array | string | ReadonlyArray<Uint8Array | string>} data Prefer buffers as they're faster to hash, but strings can be useful for small things.
 * @returns {string} MD5 hash
 * @example
```
import fs from "node:fs";
import md5Hex from "md5-hex";

const buffer = fs.readFileSync("unicorn.png");

md5Hex(buffer); // 1abcb33beeb811dca15f0ac3e47b88d9
```
 */

module.exports = function md5Hex(data) {
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
