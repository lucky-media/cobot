const { TOKEN } = require("./util/config");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefix = "/";

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "good bot") {
    msg.reply("Thank you kind sir.");
  }

  let daut = msg.content;

  if (
    daut === "daut" ||
    daut === "Daut" ||
    daut === "daot" ||
    daut === "DAOT" ||
    daut === "duti" ||
    daut === "Duti"
  ) {
    msg.reply(
      "Do you mean to summon the **past, present and future** grand master lead developer of Lucky Media and co ? Careful what you wish for."
    );
  }

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(TOKEN);
