const test = require("ava");

// Import functions
const md5Hex = require("../src/util/md5Hex");

// Test md5Hex
test("md5Hex", t => {
    t.is(md5Hex("Hello, world!"), "6cd3556deb0da54bca060b4c39479839");
})
