const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`$status$`)) {
  let status = context.params.event.content.split(' ').slice(1).join(' ');

  if (context.params.event.author.id === `${process.env.BOT_OWNER_ID}`) {
    await lib.discord.users['@0.1.5'].me.status.update({
      activity_name: `${status}`, 
      activity_type: `GAME`,
      status: 'ONLINE',
    });
    await lib.discord.channels['@0.2.2'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `✅ | Changed my Status to \`${status}\``,
    });
  } else {
    await lib.discord.channels['@0.2.2'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `❌ | Error, You are not the bot owner, only the bot owner can change my status`,
    });
  }
}
