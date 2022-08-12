const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    accounts: {
        roblox: {
            type: Number,
            required: true,
        },
        discord: {
            type: String,
            required: true,
        },
    },

    admin: {
        type: Boolean,
        default: false,
    },

    banned: {
        type: Boolean,
        default: false,
    },

    created: {
        type: Date,
        default: Date.now,
    },

    plan: {
        name: {
            type: String,
            default: "Free"
        },
        hubsOwned: {
            type: Number,
            default: 0,
        }
    },

});

module.exports = mongoose.model("User", schema);