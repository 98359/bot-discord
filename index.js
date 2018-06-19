const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "f?";

client.on('ready', () => {
	console.log('Bot has started!');
});

client.on('message', message => {
	
	let msg = message.content.toLowerCase();
	let args = message.content.slice(prefix.length).split(' ');
	let command = args.shift().toLowerCase();
	
	   if (command === 'avatar') {
		  let user = message.mentions.users.first() || message.author;
		  
		  let embed = new Discord.RichEmbed()
		  .setAuthor(`${user.username} avatar`)
		  .setImage(user.displayAvatarURL)
		  .setColor('RANDOM')
		  
		  message.channel.send(embed)
		 
	   }
});



client.login(process.env.TOKEN);
