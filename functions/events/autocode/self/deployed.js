// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let guilds = await lib.discord.users['@0.0.1'].me.guilds.list({
  limit: 1
});

let channels = await lib.discord.guilds['@0.0.2'].channels.list({
  guild_id: guilds[0].id
});

let generalChannel = channels.find((channel) => {
  return channel.name === 'allgemein';
});

if (generalChannel) {
  await lib.discord.channels['@0.0.3'].messages.create({
    channel_id: generalChannel.id,
    content: [
      `🍍Vielen Dank fürs Installieren!`,
      `Ich werde ab sofort jedem neuem Mitglied die Frage aller Fragen stellen.`,
      `Alternativ kannst du mich auch markieren und ich werde die Frage stellen.`,
      '',
    ].join('\n')
  });
}
