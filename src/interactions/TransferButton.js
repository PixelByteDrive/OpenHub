exports.run = async(interaction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder) => {
    const embed = new EmbedBuilder()
      .setTitle('Select a product')
      .setDescription("Select a product you own that you'd like to transfer.")
      .setColor('Blurple')
    const selectMenu = new SelectMenuBuilder()
      .setCustomId('TransferMenuSelection')
      .setPlaceholder('Select a product...')
      .addOptions(
        {
          label: 'OpalWear',
          description: 'Unlimited possibilities. Limited time.',
          value: 'first_option',
        }
      )
    const SelectMenus = new ActionRowBuilder()
        .addComponents(selectMenu)
    await interaction.update({embeds: [embed], components: [SelectMenus], ephemeral: true})
}