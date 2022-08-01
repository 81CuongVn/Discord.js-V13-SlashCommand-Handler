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
const moment = require("moment");
const client = require("../index");

client.on("ready", () => {
  console.log(
    `[` +
      ` ⚡ `.yellow.bold +
      `]` +
      `${` |`.white.bold}` +
      `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
        ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
      }${` -`} [ POWERED BY: ] -`.green +
      ` [` +
      `>>`.magenta +
      `]` +
      ` https://discord.gg/zendev`.cyan.bold // Please dont remove this
  );
  console.log(
    `[` +
      ` 🟩 `.green.bold +
      `]` +
      `${` |`.white.bold}` +
      `${` [ ${moment().format("dddd")} ]`.yellow.bold}${` |`.white.bold}${
        ` [ ${moment().format("DD-MM-YYYY HH:mm:ss")} ]`.blue.bold
      }${` -`} [ LOGGED IN AS: ] -`.green +
      ` [` +
      `>>`.magenta +
      `]` +
      ` ${client.user.tag}`.cyan.bold
  );
  client.user.setActivity(
    client.config.env.activity.replace("{shards}", client.cluster.id),
    { type: client.config.env.status.type }
  );
  client.user.setStatus(client.config.env.status);
});
