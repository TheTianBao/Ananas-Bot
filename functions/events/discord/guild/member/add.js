const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// *** Set the channel ID to post in ***
const channel_id = process.env.WELCOME_CHANNEL_ID

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id,
  content: [
    `Willkommen auf dem GameFriends Server <@${context.params.event.user.id}>!`,
    `Die wichtigste Frage nun zuerst:`,
    `Pizza mit oder ohne Ananas?🍍`,
    '',
  ].join('\n')
});