const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('MarcoBot is Ready!');
});

client.on('message', async (msg) => {
  if (msg.guild.id === process.env.GUILD_ID && msg.channel.id === process.env.CHANNEL_ID) {
    // TODO: watch party link for youtube videos
    if (msg.content.substr(0, 7) === 'mbwatch') {
      const msgContent = msg.content.substr(8, 999);
      const youtube = 'youtube';
      const prefixParam = 'sync-';
      const response = msgContent.replace(youtube, prefixParam + youtube);
      await msg.reply(response);
      console.log('reply sent!');
    }
  }
});

client.login(process.env.BOT_TOKEN);
