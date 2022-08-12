module.exports(user, EmbedBuilder, interaction) = {
    const user = await User.findOne({
        discord: userId,
      }).exec()
      if (!user) {
        await interaction.reply({ content: "You need to run `/verify` to use this command.", ephemeral: true });
      } else {
        const embed = new EmbedBuilder()
          .setTitle("Profile")
          .addFields({ name: 'Roblox', value: ''})
            await interaction.reply({ embeds: [embed] });
      }
}