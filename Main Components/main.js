//start
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
//reply_1
const prefix = '=';

const fs = require('fs');

client.commands = new Discord.Collection();
//reply_2
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//boot_up_sequence
client.once('ready', () => {
    console.log('Dman is currently toturing his slaves!');
});
//settings
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//commands
    if(command === 'sigma?'){
        client.commands.get('sigma?').execute(message, args);
    }

    if(command == 'home'){
        client.commands.get('home').execute(message, args);
    }

    if (command === 'dạy_đời'){
        client.commands.get('dạy_đời').execute(message, args);
    }

    if (command === 'bách'){
        client.commands.get('bách').execute(message, args);
    }

    if (command === 'cmd'){
        client.commands.get('cmd').execute(message, args, Discord);
    }

    if (command === 'insult'){
        client.commands.get('insult').execute(message, args);
    }
});

//msg_function
client.on('messageCreate', (message) => {
	console.log(message.content);
});
//token_key (Will be encrypted in the future!!)
client.login('OTAzMjcyODM5MDM2MTQ5Nzcw.YXqkYg.6wyb-FsnLEs1hH1xKuKcUwzoKX4');