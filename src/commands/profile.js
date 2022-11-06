const { EmbedBuilder } = require("discord.js");

exports.run = async (interaction) => {
  const User = await require("../../src/database/index.js").getUser(
    interaction.user.id
  );
  console.log("User", User); // for testing uses
  if (User == false) {
    const embed = new EmbedBuilder()
      .setTitle("Not Verified")
      .setDescription(
        "Hmm.. seems you aren't verified with our systems. Please run `/verify` and try again."
      )
      .setColor("Red");
    await interaction.reply({ embeds: [embed] });
  } else if (!User == null) {
    const embed = new EmbedBuilder()
      .setTitle("Profile")
      .addFields(
        { name: "Roblox", value: User.accounts.robloxId },
        { name: "Discord", value: User.accounts.discordId }
      )
      .setColor("Green");
    await interaction.reply({ embeds: [embed] });
  }
};
