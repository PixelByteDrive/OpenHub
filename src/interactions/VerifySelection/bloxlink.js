const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const UserSchema = require("../../../src/database/index.js");

const axios = require("axios");

exports.run = async (interaction) => {
  if (interaction.values[0] == "bloxlink") {
    axios
      .get("https://v3.blox.link/developer/discord/" + interaction.user.id, {
        headers: {"api-key": "a267185e-29a4-4e9b-8d8d-e5a247224cfd"}
      })
      .then((response) => {
        if (response.data.success == true) {
          axios
            .get(
              "https://api.roblox.com/users/" +
                response.data.user.primaryAccount
            )
            .then((robloxResponse) => {
              UserSchema.newUser(interaction.user.id, response.data.user.primaryAccount)
              const Embed = new EmbedBuilder()
                .setAuthor({
                  name: "Verification Completed!",
                  iconURL:
                    "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/0A85A475-0827-4489-8F48-98207281CFA2.png?v=1661224850521",
                })
                .addFields({
                  name: "Roblox",
                  value: robloxResponse.data.Username,
                })
                .setColor("Green");
              interaction.reply({ embeds: [Embed] });
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
