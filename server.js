require("dotenv").config();

const axios = require("axios");
const {
  Client,
  REST,
  GatewayIntentBits,
  Routes,
  ApplicationCommandType,
  ContextMenuCommandBuilder,
} = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
client.login(process.env.token);

require("./src/database/index.js").connect();

client.on("ready", async () => {
  const data = new ContextMenuCommandBuilder()
    .setName("echo")
    .setType(ApplicationCommandType.User);
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
      description:
        "Transfer a product you purchased to someone else. This action is irreversible!",
    },
    {
      name: "profile",
      description: "View your Opal Hub profile, and see what products you own.",
    },
    {
      name: "retrieve",
      description: "Retrieve a product you purchased.",
    },
    {
      name: "ping",
      description: "Tests the bot's latency.",
    },
    {
      name: "botinfo",
      description: "Information about the bot.",
    },
    {
      name: "verify",
      description: "Verify yourself with Opal Hub.",
    },
  ];

  // Command Creation
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
  (async () => {
    try {
      console.log("Started refreshing application (/) commands.");
      await rest.put(
        Routes.applicationGuildCommands(
          "1007749807823126528",
          "696726606793932800"
        ),
        { body: commands }
      );

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  })();
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    try {
      let cmdFile = require(`./src/commands/${interaction.commandName}.js`);
      cmdFile.run(interaction);
    } catch (err) {
      console.log(err);
    }
  } else if (interaction.isButton()) {
    try {
      let cmdFile = require(`./src/interactions/${interaction.customId}.js`);
      cmdFile.run(interaction);
    } catch (err) {
      console.log(err);
    }
  } else if (interaction.isSelectMenu()) {
    try {
      let cmdFile = require(`./src/interactions/${interaction.customId}/${interaction.values[0]}.js`);
      cmdFile.run(interaction);
    } catch (err) {
      console.log(err);
    }
  }
});
