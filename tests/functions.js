const test = require("ava");

// Import functions
const cap = require("../src/functions/cap");
const gravatar = require("../src/functions/gravatar");
const random = require("../src/functions/random");
const uuid = require("../src/functions/uuid");

// Test cap
test("cap", t => {
    t.is(cap("Hello, world!", 5, true), "Hello...");
    t.is(cap("Hello, world!", 5, false), "Hello")
})

// Test gravatar
test("gravatar", t => {
    t.is(gravatar("hello@example.com"), "https://gravatar.com/avatar/cb8419c1d471d55fbca0d63d1fb2b6ac");
})

// Test random
test("random", t => {
    const randomNum = random(1, 10);
    t.true(randomNum >= 1 && randomNum <= 10);
})

// Test uuid
test("uuid", t => {
    // Test string
    const singleUuid = uuid();
    t.is(typeof singleUuid, "string");
    t.is(singleUuid.length, 36);

    // Test array
    const uuids = uuid(5);
    t.true(Array.isArray(uuids));
    t.is(uuids.length, 5);
})
