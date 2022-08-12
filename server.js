const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages ]})
const mongoose = require('mongoose');
const User = require('./src/app/database/models/User')

client.login('MTAwNzc0OTgwNzgyMzEyNjUyOA.GW77-Z.2oaqqgziF27GcO1y5pXoIh7Luh1IYYrkfBgGeA')

client.on("ready", async () => {

  const userRecord = new User({
    "accounts.discord": "",
    "accounts.roblox": 0,
  })
  await userRecord.save()

    console.log(`bot is also online! ${client.user.tag}`);
    /* Template
    const help = {
      name: "help",
      description: "Presents a list of commands."
    };
    */
  
    const commands = [
      {
        name: "retrieve",
        description: "Retrieve a product you purchased.",
      }
    ];

    const commands = [
      {
        name: "transfer",
        description: "Transfer a product you purchased to someone else. This action is irreversible!",
      }
    ];

    const commands = [
      {
        name: "profile",
        description: "View your Opal Hub profile, and see what products you own.",
      }
    ];
  
    // Command Creation
    const rest = new REST({ version: '10' }).setToken('MTAwNzc0OTgwNzgyMzEyNjUyOA.GW77-Z.2oaqqgziF27GcO1y5pXoIh7Luh1IYYrkfBgGeA');
    (async () => {
      try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands("964285888295207022", "696726606793932800"), { body: commands });
    
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  })();
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'profile') {
		await interaction.reply('');
	}
});