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
    return (await fs.promises.readdir(path, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}
