const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'linfo') {
    	message.reply('Am fost creat de @Lucasbosspro#1695 comanda mea de prefix este l sper sati placa cu mine!'  );
  	}
    client.on('message', message => {
    if (message.content === 'lhelp') {
    	message.reply('---Comenzile mele sunt--
                      lhelp - comenzile
                      linfo - despre mine
                      in curand '  );
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
