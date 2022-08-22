const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

exports.run = async(interaction) => {
    const embed = new EmbedBuilder()
      .setTitle('Select a product')
      .setDescription("Select a product you own that you'd like to retrieve.")
      .setColor('Blurple');
    const selectMenu = new SelectMenuBuilder()
      .setCustomId('RetrieveMenuSelection')
      .setPlaceholder('Select a product...')
      .addOptions(
        {
          label: 'OpalWear',
          description: 'Unlimited possibilities. Limited time.',
          value: 'first_option',
        }
      );
    const SelectMenus = new ActionRowBuilder()
        .addComponents(selectMenu);
    await interaction.reply({embeds: [embed], components: [SelectMenus], ephemeral: true})
}