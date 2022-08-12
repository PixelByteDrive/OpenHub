const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages ]})

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
        name: "retrieve",
        description: "Retrieve a product you purchased.",
      }
    ];
  
    // Command Creation
    const rest = new REST({ version: '10' }).setToken('');
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

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});