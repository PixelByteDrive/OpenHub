const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  accounts: {
    robloxId: {
      type: Number,
      required: true,
    },
    discordId: {
      type: Number,
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
      default: "Free",
    },
    hubsOwned: {
      type: Number,
      default: 0,
    },
  },
});

schema.method(
  'checkIfUserExists', function(DiscordId) {
    return mongoose.model('User').exists({ discordId: DiscordId })
  },
  'getUserByDiscordId', function(DiscordId) {
    return mongoose.model('User').find({ discordId: DiscordId })
  }
);
exports.Profile = mongoose.model("User", schema);