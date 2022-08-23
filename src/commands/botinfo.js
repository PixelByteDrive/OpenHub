const { EmbedBuilder } = require("discord.js");

exports.run = async(interaction) => {
  const embed = new EmbedBuilder()
    .setTitle("Opal Hub")
    .addFields({name: "Channel", value: "Development"})
    .addFields({name: "Developers", value: "<@467106064022896661>\n<@373908634742030336>"})
    .setColor("Yellow")
  interaction.reply({embeds: [embed]});
}