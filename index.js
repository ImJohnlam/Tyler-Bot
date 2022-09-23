const dotenv = require('dotenv');
dotenv.config();

const { Client, GatewayIntentBits } = require('discord.js');


// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async msg => {
    if (msg.content === '!addicted') {
        msg.reply("https://www.youtube.com/watch?v=EIO1g97S2x8");
    }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);