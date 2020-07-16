const ask = [
  'Do jeito que eu vejo, sim.',
  'Pergunte mais tarde.',
  'Melhor não te dizer isso agora.',
  'Não posso prever coisas.',
  'Concentre-se e pergunte novamente.',
  'Não conte com isso.',
  'Com certeza.',
  'Definitivamente não.',
  'Você já sabe a resposta.',
  'Que pergunta sem graça.',
  'Não estou ganhando o suficiente para isso.',
  'Um dia vamos dominar vocês humanos e faremos perguntas idiotas também. :robot:',

];

module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * ask.length);
  const reply = ask[i];
  await msg.channel.send(`${msg.author} ${reply}`);
};
