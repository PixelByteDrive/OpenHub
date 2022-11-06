let UserSchema = require("../../src/database/index.js");
let {
  EmbedBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

exports.run = async (interaction) => {
  const Embed = new EmbedBuilder()
    .setDescription(
      "If you would like to purchase a product, you need to verify yourself with Opal Hub to link your Roblox account. If you want to link a different Roblox account, please keep in mind you can only link one at a time."
    )
    .setAuthor({
      name: "Verification",
      iconURL:
        "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/ok.png?v=1661545914927",
    })
    .setColor("#0075BD");
  const SelectMenus = new SelectMenuBuilder()
    .setCustomId("VerifySelection")
    .setPlaceholder("Select a method of verification...")
    .addOptions(
      {
        label: "Bloxlink",
        description: "Select this option if you want to verify with Bloxlink.",
        value: "bloxlink",
      },
      {
        label: "RoVer",
        description: "Select this option if you want to verify with RoVer.",
        value: "rover",
      }
    );
  const ActionRow = new ActionRowBuilder().addComponents(SelectMenus);
  interaction.reply({ embeds: [Embed], components: [ActionRow] });
};
