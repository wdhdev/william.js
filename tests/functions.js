const test = require("ava");

// Import functions
const cap = require("../src/functions/cap");
const gravatar = require("../src/functions/gravatar");

// Test cap
test("cap", t => {
    t.is(cap("Hello, world!", 5, true), "Hello...");
    t.is(cap("Hello, world!", 5, false), "Hello")
})

// Test gravatar
test("gravatar", t => {
    t.is(gravatar("hello@example.com"), "https://gravatar.com/avatar/cb8419c1d471d55fbca0d63d1fb2b6ac");
})
