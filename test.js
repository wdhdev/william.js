const test = require("ava");

// Test cap
const cap = require("./src/functions/cap");

test("cap", t => {
    t.is(cap("Hello, world!", 5, true), "Hello...");
    t.is(cap("Hello, world!", 5, false), "Hello")
})

// Test gravatar
const gravatar = require("./src/functions/gravatar");

test("gravatar", t => {
    t.is(gravatar("hello@example.com"), "https://gravatar.com/avatar/cb8419c1d471d55fbca0d63d1fb2b6ac");
})

// Test md5Hex
const md5Hex = require("./src/util/md5Hex");

test("md5Hex", t => {
    t.is(md5Hex("Hello, world!"), "6cd3556deb0da54bca060b4c39479839");
})
