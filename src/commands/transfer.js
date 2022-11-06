const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");

exports.run = async (interaction, client) => {
  const embed = new EmbedBuilder()
    .setTitle("Are you sure?")
    .setDescription(
      "Are you sure you want to transfer a product? This cannot be undone!"
    )
    .setColor("Red");

  const Button = new ButtonBuilder()
    .setCustomId("TransferButton")
    .setLabel("Transfer")
    .setStyle("Danger");

  const row = new ActionRowBuilder().addComponents(Button);
  await interaction.reply({
    embeds: [embed],
    components: [row],
    ephemeral: true,
  });
};
