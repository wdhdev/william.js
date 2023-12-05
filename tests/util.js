const test = require("ava");

// Import functions
const getDirs = require("../src/util/getDirs");
const md5Hex = require("../src/util/md5Hex");
const removeDuplicates = require("../src/util/removeDuplicates");

// Test getDirs
test("getDirs", async t => {
    t.deepEqual(await getDirs("./src"), ["functions", "util"]);
})

// Test md5Hex
test("md5Hex", t => {
    t.is(md5Hex("Hello, world!"), "6cd3556deb0da54bca060b4c39479839");
})

// Test removeDuplicates
test("removeDuplicates", t => {
    t.deepEqual(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6]), [1, 2, 3, 4, 5, 6]);
})

process.exit();
