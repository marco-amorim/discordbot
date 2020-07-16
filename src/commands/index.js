const ping = require('./ping');
const ask = require('./ask');
const help = require('./help');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
  ping,
  ask,
  help,
};

module.exports = async (msg) => {
  // console.log(msg);
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.split(' ');
    if (args.length === 0 || args[0].charAt(0) !== '#') return;
    // TODO: handle when no message is passed after the command!
    const command = args[0].substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
