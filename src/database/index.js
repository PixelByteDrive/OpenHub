const mongoose = require("mongoose");
const UserSchema = require("./models/User.js");

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_PASSWORD,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function getUser(DiscordId) {
  new Promise((resolve, reject) => {
    UserSchema.Profile.find(
      { accounts: { discordId: DiscordId } },
      { limit: 1 }
    ).then((document) => {
      resolve(1)
    }).catch((error) => {
      reject(error)
    })
  });
}

async function newUser(DiscordId, RobloxId) {
  new UserSchema.Profile({
    accounts: { discordId: DiscordId, robloxId: RobloxId },
  })
    .save()
    .then((error) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
}
async function deleteUser(DiscordId) {
  UserSchema.Profile.deleteOne({ discordId: DiscordId }, (error) => {
    if (error) {
      return false;
    } else {
      return true;
    }
  });
}

module.exports = { connect, getUser, newUser, deleteUser };