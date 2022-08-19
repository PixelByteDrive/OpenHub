require("dotenv").config();

const axios = require('axios');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages ]})
client.login('MTAwNzc0OTgwNzgyMzEyNjUyOA.GW77-Z.2oaqqgziF27GcO1y5pXoIh7Luh1IYYrkfBgGeA')

client.on("ready", async () => {
    console.log(`bot is also online! ${client.user.tag}`);
    /* Template
    const help = {
      name: "help",
      description: "Presents a list of commands."
    };
    */

    const commands = [
      {
        name: "transfer",
        description: "Transfer a product you purchased to someone else. This action is irreversible!",
      },
      {
        name: "profile",
        description: "View your Opal Hub profile, and see what products you own.",
      },
      {
        name: "retrieve",
        description: "Retrieve a product you purchased.",
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
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});