const fs = require("node:fs");

/**
 * 
 * @param {string} path The path to find directories in
 * @returns {Promise<string[]>} An array of all the directories in the path
 * @example
import { util } from "william.js";

await util.getDirs("./src");
//=> ["functions", "util"]
 */

module.exports = async function getDirs(path) {
    // Errors
    if(!path) throw new TypeError("No path was provided.");
    if(typeof path !== "string") throw new TypeError("The provided path is not a string.");

    return (await fs.promises.readdir(path, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}
