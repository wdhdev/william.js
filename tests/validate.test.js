const test = require("ava");

// Import functions
const discord = require("../src/validate/discord");
const email = require("../src/validate/email");

// Test discord
test("discord", t => {
    t.true(discord.webhook("https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz"));
    t.true(discord.webhook("https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz/abc123"));
    t.false(discord.webhook("https://discord.com/api/webhooks/invalid/webhook"));
    t.false(discord.webhook("https://discord.com"))
})

// Test email
test("email", t => {
    t.true(email("hello@example.com"));
    t.true(email("hello@subdomain.example.com"));
    t.false(email("@example"))
    t.false(email("@example.com"))
    t.false(email("hello"))
    t.false(email("hello@"))
    t.false(email("hello@.com"))
    t.false(email("hello@example"))
})
