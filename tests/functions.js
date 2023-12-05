const test = require("ava");

// Import functions
const cap = require("../src/functions/cap");
const gravatar = require("../src/functions/gravatar");
const id = require("../src/functions/id");
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

// Test id
test("id", t => {
    // Test string
    const singleId = id();
    t.is(typeof singleId, "string");
    t.is(singleId.length, 32);

    // Test string length
    const lengthId = id(5);
    t.is(lengthId.length, 5);

    // Test array
    const ids = id(5, 5);
    t.true(Array.isArray(ids));

    // Test amount
    const amountId = id(5, 5);
    t.is(amountId.length, 5);

    // Test alphabet
    const alphabetId = id(5, 5, "abc");
    t.true(alphabetId[0].includes("a") || alphabetId[0].includes("b") || alphabetId[0].includes("c"));
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

process.exit();
