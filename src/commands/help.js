module.exports = async (msg, args) => {
  if (!args.length) return;
  await msg.channel.send('Bem-vindo ao Marco Bot, confira a lista de comandos até o momento:');
};
