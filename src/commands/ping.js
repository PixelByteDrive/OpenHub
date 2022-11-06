const { EmbedBuilder } = require("discord.js");

exports.run = async (interaction) => {
  const sendingEmbed = new EmbedBuilder()
    .setAuthor({
      name: "Pinging...",
      iconURL:
        "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/883414701218873376.gif?v=1661224208699",
    })
    .setColor("Blue");
  const sent = await interaction.reply({
    embeds: [sendingEmbed],
    fetchReply: true,
  });
  const embed = new EmbedBuilder()
    .setAuthor({
      name: "Pong!",
      iconURL:
        "https://cdn.glitch.global/e5e0a3e8-809d-408b-a9f9-783de3ae0263/0A85A475-0827-4489-8F48-98207281CFA2.png?v=1661224850521",
    })
    .addFields({
      name: "Roundtrip Latency",
      value: `${sent.createdTimestamp - interaction.createdTimestamp}`,
    })
    .setColor("Green");
  interaction.editReply({ embeds: [embed] });
};
