const express = require("express");
const usersControllers = require("../../controllers/users");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 1 * 1 * 1000, // 1 hour
    max: 30, // Limit each IP to 5 create account requests per `window` (here, per hour)
    message:
        "Too many accounts created from this IP, please try again in a few seconds.",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.get("/:id", rateLimiter, usersControllers.get);

module.exports = { route: router, prefix: "/users" };