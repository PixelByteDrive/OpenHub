if (interaction.customId === "TransferButton") {
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
    await interaction.reply({embeds: [embed], components: [SelectMenus], ephemeral: true})
  } else if (interaction.customId === "TransferMenuSelection") {
    const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('Transfer');
    const TransferUser = new TextInputBuilder()
			.setCustomId('TransferUser')
		    // The label is the prompt the user sees for this input
			.setLabel("Enter the username you want to transfer to")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);
    
    const ActionRow = new ActionRowBuilder()
      .addComponents(TransferUser)

    modal.addComponents(ActionRow)
    
    await interaction.showModal(modal);
  } else if (interaction.commandName === "retrieve") {
    await interaction.reply()
  }