exports.run = async(interaction, EmbedBuilder) => {
  const embed = new EmbedBuilder()
    .setTitle("Profile")
    .addFields({ name: "Discord", value: "Pixel" })
    .addFields({ name: "Roblox", value: "killianus2008" })
    .addFields({ name: "Products", value: "Needs work." }) // Need help here.
    .setColor("Blurple");
  await interaction.reply({ embeds: [embed] });
}