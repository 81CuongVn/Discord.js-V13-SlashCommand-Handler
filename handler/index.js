const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { glob } = require("glob");
const moment = require("moment");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");
const {
  red,
  green,
  blue,
  magenta,
  cyan,
  white,
  gray,
  black,
} = require("chalk");
const Discord = require("discord.js");
const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
  // Commands
  const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
  commandFiles.map((value) => {
    const file = require(value);
    const splitted = value.split("/");
    const directory = splitted[splitted.length - 2];

    if (file.name) {
      const properties = { directory, ...file };
      client.commands.set(file.name, properties);
    }
  });

  // Events
  const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
  setTimeout(async () => {
    console.log(
      `[` +
        ` 🟩 `.green.bold +
        `]` +
        `${` |`.white.bold}` +
        `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
          ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
        }${` -`} [ LOADED EVENTS ]`.green.bold
    );
  }, 200);
  eventFiles.map((value) => require(value));

  // Slash Commands
  const slashCommands = await globPromise(
    `${process.cwd()}/SlashCommands/*/*.js`
  );
  setTimeout(async () => {
    console.log(
      `[` +
        ` 🟩 `.green.bold +
        `]` +
        `${` |`.white.bold}` +
        `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
          ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
        }${` -`} [ LOADED SLASH COMMANDS ]`.green.bold
    );
  }, 200);
  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);
    arrayOfSlashCommands.push(file);
  });

  client.on("messageCreate", async (message, user) => {
    if (message.content.startsWith(`${config.env.prefix}deploy`)) {
      try {
        if (!message.member.permissions.has("MANAGE_GUILD")) {
          return message.reply(
            `**You cannot use this \`Deploy\` command!**\n> **There are \`${arrayOfSlashCommands.length} Slash-Commands\` for ${client.user.username}!**`
          );
        }
        let themsg = await message.reply(
          `*Attempting to set the GUILD Slash Commands in \`${message.guild.name}...\`*`
        );
        await client.application.commands
          .set(arrayOfSlashCommands)
          .then((slashCommandsData) => {
            themsg.edit(
              `*Starting to load \`${slashCommandsData.size}\` slash commands to this guild...*\n _It's recommended to use command __2-4x__ times to ensure acurate deploy_`
            );
          })
          .catch((e) => {
            console.log(e);

            const errorbutton = new MessageActionRow().addComponents(
              new MessageButton()
                .setStyle("LINK")
                .setLabel("Invite Me")
                .setURL(
                  `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
                )
            );
            const errorloading = new MessageEmbed()
              .setTitle(
                `Couldn't load the Slash Commands for \`${message.guild.name}\`\nI must be missing permissions to create Slash-Commands!\n\nClick "Invite me" below!`
              )
              .setColor("RED");

            themsg.edit({ embeds: [errorloading], components: [errorbutton] });
          });
      } catch (e) {
        console.log(String(e.stack));

        const buttonerror = new MessageActionRow().addComponents(
          new MessageButton()
            .setStyle("LINK")
            .setLabel("Join Support Server")
            .setURL("https://discord.gg/zendev")
        );
        return message.channel.send({
          embeds: [
            new Discord.MessageEmbed()
              .setColor(`RED`)
              .setTitle(`❌ Something want wrong!`)
              .setDescription(
                `This error isn't supposed to happen! This must be a code error! Join discord.gg/zendev for help!`
              ),
          ],
          components: [buttonerror],
        });
      }
    }
  });

  client.on("guildCreate", async (guild) => {
    await client.application.commands.set(arrayOfSlashCommands);
    return console.log(
      `[` +
        ` 🔗 `.grey.bold +
        `]` +
        `${` |`.white.bold}` +
        `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
          ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
        }${` -`} [ I was invited to ${
          guild.name
        }!, I will now start creating the Slash-Commands (If i have perms) ]`
          .green.bold
    );
  });

  if (client.config.mongoDB.enable == true) {
    mongoose
      .connect(process.env.mongoURL || client.db.mongoDB.mongoURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(
        console.log(
          `[` +
            ` 🟩 `.green.bold +
            `]` +
            `${` |`.white.bold}` +
            `${` [ ${moment().format("dddd")} ]`.yellow.bold}${
              ` |`.white.bold
            }${
              ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
            }${` -`} [ CONNECTED TO MONGODB DATABASE ]`.green.bold
        )
      )
      .catch(async (e) => {
        console.log(
          `[` +
            ` ⚠️ `.yellow.bold +
            `]` +
            `${` |`.white.bold}` +
            `${` [ ${moment().format("dddd")} ]`.yellow.bold}${
              ` |`.white.bold
            }${
              ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
            }${` -`} [ MONGODB IS HAVING ISSUES ]`.yellow.bold
        );
      });
  } else {
    console.log(
      `[` +
        ` 🟥 `.red.bold +
        `]` +
        `${` |`.white.bold}` +
        `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
          ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
        }${` -`} [ MONGODB IS DISABLED ]`.red.bold
    );
  }
};
