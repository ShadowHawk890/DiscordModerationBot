const Discord = require("discord.js");
{ 
  "token"  ; "Nzg0MTIzNzgxOTI0NzgyMDkw.X8kuLQ.CYRSn1jY2wBKu4J2p6a7uN5R9ek",
  "prefix" ; "/"
}
/*
 DISCORD.JS VERSION 12 CODE
*/


const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels inside of ${client.guilds.cache.size} servers.`);
client.user.setActivity(`Online`);
});
client.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
client.user.setActivity(`enslaved ${client.users.cache.size} servers`);
});
client.on("guildDelete", guild => {
console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
client.user.setActivity(`enslaving ${client.users.cache.size} idiots`);
});
client.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
if(message.author.bot) return;
if(!message.content.startsWith(config.prefix)) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "ping") {
const m = await message.channel.send("Ping?");
m.edit(`Server Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}
//mod comamnds start
if(command === "kick") {
  if(!message.member.roles.cache.some(r=>["The Administrator","O5 Council","Moderator","Head Moderator","Developer","Head Developer"].includes(r.name)))
  return message.reply("You do not have permission to use this command!");
  let member = message.mentions.members.first();
  if(!member)
  return message.reply("Please mention a valid user of the server.");
  if(!member.kickable) 
  return message.reply("Unable to kick the mentioned user, as they have higher permissions.");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  await message.delete()
  const embeddmk = new Discord.MessageEmbed()
  .setColor(0)
  .setTitle(`You have been kicked from the SCPxF Discord Server:`)
  .setThumbnail(`https://t0.rbxcdn.com/97ab86a921ad7f0b79dd949504095583`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API")
  .addFields(
    { name: '__Moderator:__', value: `${message.author.tag}`},
    { name: '__Reason for Kick:__', value: `${reason}`},
    { name: '__Moderation Note:__', value: `This ban may be appealed through the appeal process identified within our __[Moderation Discord Server](https://discord.gg/K8TgRa6852)__\n\n*Any complaints/inquires may be submitted within the Moderation Hub.*`}
  )
  await member.send(embeddmk),
  await member.send("https://discord.gg/K8TgRa6852"),
  await member.kick(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  const channel01 = client.channels.cache.find(channel => channel.id === '784508200019427398');
  const user = message.mentions.users.first();
  const embedchank = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addFields(
      { name: `**${member.user.tag}** was Kicked from the SCPxF server:`, value: `*${reason}*`}
  )
  const embedmessagek = new Discord.MessageEmbed()
  .setColor(15105570)
  .setTitle("User was Kicked")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API")
  .addFields(
      { name: '__User Kicked:__', value: `${member.user.tag}`},
      { name: '__Reason for Kick:__', value: `${reason}`},
      { name: '__Moderator:__', value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  .setThumbnail(user.displayAvatarURL());
  message.channel.send(embedchank);
  channel01.send(embedmessagek)
  }
  if(command === "ban") {
  await message.delete()
  if(!message.member.roles.cache.some(r=>["The Administrator","O5 Council","Moderator","Head Moderator","Developer","Head Developer"].includes(r.name)))
  return message.reply("You do not have permissions to use this command.");
  let member = message.mentions.members.first();
  if(!member)
  return message.reply("Please mention a valid user of the server.");
  if(!member.bannable) 
  return message.reply("I am unable to ban this user, as they have higher permissions.");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  const embeddm = new Discord.MessageEmbed()
  .setColor(0)
  .setTitle(`You have been banned from the SCPxF Discord Server:`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API")
  .addFields(
    { name: '__Moderator:__', value: `${message.author.tag}`},
    { name: '__Reason for Ban:__', value: `${reason}`},
    { name: '__Moderation Note:__', value: `This ban may be appealed through the appeal process identified within our __[Moderation Discord Server](https://discord.gg/K8TgRa6852)__\n\n*Any complaints/inquires may be submitted within the Moderation Hub*.`},
    { name: `__Moderation Hub Link:__`, value: `https://discord.gg/K8TgRa6852`}
  )
  await member.send(embeddm),
  await member.send("https://discord.gg/K8TgRa6852"),
  await member.ban({reason: reason})
  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`))
  const channel01 = client.channels.cache.find(channel => channel.id === '784508200019427398');
  const user = message.mentions.users.first();
  const embedchanb = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addFields(
      { name: `**${member.user.tag}** was Banned from the Server:`, value: `*${reason}*`}
  )
  const embedmessageb = new Discord.MessageEmbed()
  .setColor(15158332)
  .setTitle(":no_pedestrians: User was Banned")
  .setThumbnail(`https://t0.rbxcdn.com/97ab86a921ad7f0b79dd949504095583`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API")
  .addFields(
      { name: '__User Banned:__', value: `${member.user.tag}`},
      { name: '__Reason for Ban:__', value: `${reason}`},
      { name: '__Moderator:__', value: `${message.author.tag} - <\@${message.author.id}>`},
  )
  .setThumbnail(user.displayAvatarURL());
  message.channel.send(embedchanb);
  channel01.send(embedmessageb)

  }
if(command === "purge") {
if(!message.member.roles.cache.some(r=>["The Administrator","O5 Council","Moderator","Head Moderator","Developer","Head Developer"].includes(r.name)))
return message.reply("You do not have permissions to execute this command!");
let member = message.mentions.members.first();
const channel11 = client.channels.cache.find(channel => channel.id === '784508200019427398');
const deleteCount = parseInt(args[0], 10);
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
channel = message.guild.channels.cache.get('channelID')
const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(fetched)
.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
const embedmessagep = new Discord.MessageEmbed()
.setColor(9936031)
.setTitle(":speech_balloon: Purge Command Executed")
.setTimestamp()
.setFooter("DM reloaded#1269 with any inquiries regarding bot API")
.addFields(
  { name: `__Channel:__`, value: `<\#${message.channel.id}>` },
  { name: `__Moderator:__`, value: `${message.author.tag} - <\@${message.author.id}>`},
  { name: `__Messages Deleted:__`, value: `${deleteCount}`}
)
.setThumbnail(message.author.avatarURL())
channel11.send(embedmessagep)
}
if(command === "avatar"){
let member = message.mentions.members.first();
if(!member)
return message.reply("Please mention a valid member of this server.");
  const user = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed() 
  .setColor(`RANDOM`)
  .setAuthor(`${member.user.tag}`)
  .setTitle("User Avatar:")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any API inquiries")
  .setThumbnail(user.displayAvatarURL());
message.channel.send(embed);
}
if(command === "avatar"){
    if(!message.member.roles.cache.some(r=>["O5 Council", "Mod","The Administrator","O5 Head"].includes(r.name)))
return message.reply("You do not have permissions to use this command. ``(MOD PERMS)``");
let member = message.mentions.members.first();
if(!member)
return message.reply("Please mention a valid member of this server.");
    const user = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
    .setColor(`RANDOM`)
    .setAuthor(`${member.user.tag}`)
    .setTitle("User Avatar:")
    .setTimestamp()
    .setFooter("DM reloaded#1269 with any API inquiries")
    .setThumbnail(user.displayAvatarURL());
message.channel.send(embed);
}
//mod commands end
});

client.login(config.token);
