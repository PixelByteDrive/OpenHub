const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const NewUser = require("../../src/database/index.js");

const axios = require("axios");

exports.run = async (interaction) => {
  if (interaction.values == "bloxlink") {
    try {
      axios({
        method: "GET",
        url: "https://v3.blox.link/developer/discord/" + interaction.user.id,
        headers: { "api-key": "a267185e-29a4-4e9b-8d8d-e5a247224cfd" },
      }).then(function (response) {
        if (response.data.success == true) {
          const UserCreated = NewUser.newUser(
            interaction.user.id,
            response.data.user.primaryAccount
          );
          if (UserCreated == false) {
            const Embed = new EmbedBuilder()
              .setAuthor({
                name: "Verification failed!",
                iconURL:
                  "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/error.png?v=1661545967962",
              })
              .setDescription("An account is already linked to our database.")
              .setColor("Red");
            interaction.reply({ embeds: [Embed] });
          } else {
            if (response.data.success == true) {
              axios
                .get(
                  "https://api.roblox.com/users/" +
                    response.data.user.primaryAccount
                )
                .then(function (robloxResponse) {
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
                });
            } else {
              const Embed = new EmbedBuilder()
                .setAuthor({
                  name: "Verification failed!",
                  iconURL:
                    "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/error.png?v=1661545967962",
                })
                .setDescription(
                  "An error occured. Please visit [Bloxlink's webiste](https://blox.link/verify) and try again."
                )
                .setColor("Red");
              interaction.reply({ embeds: [Embed] });
            }
          }
        }
      });
    } catch (err) {
      const Embed = new EmbedBuilder()
        .setAuthor({
          name: "Error",
          iconURL:
            "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/error.png?v=1661545967962",
        })
        .setDescription("An error occured while requesting the Bloxlink API.")
        .setColor("Red");
      interaction.reply({ embeds: [Embed] });
    }
  } else if (interaction.values == "rover") {
  }
};
