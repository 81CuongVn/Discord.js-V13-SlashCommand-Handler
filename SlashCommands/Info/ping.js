const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "ping",
  cooldown: 5,
  description: "Shows Bots Ping",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    // Function Uptime
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    // Latency Check
    let webLatency = new Date() - interaction.createdAt;
    let apiLatency = client.ws.ping;

    // Emoji
    let emLatency = {
      Green: "🟢 FAST",
      Yellow: "🟡 SLOW",
      Red: "🔴 SLOW AF",
    };

    const embed = new MessageEmbed()
      .setAuthor(
        `Returns Latency and API Ping!`,
        client.user.displayAvatarURL()
      )
      .setColor(client.config.color.main)
      .addField(
        `**Websocket Latency:**`,
        `\`${
          webLatency <= 200
            ? emLatency.Green
            : webLatency <= 400
            ? emLatency.Yellow
            : emLatency.Red
        } - ${webLatency}ms\``
      )
      .addField(
        `API Latency:`,
        `\`${
          apiLatency <= 200
            ? emLatency.Green
            : apiLatency <= 400
            ? emLatency.Yellow
            : emLatency.Red
        } - ${apiLatency}ms\``
      )
      .addField(
        `Upime:`,
        `\`${days} Day(s)\` : \`${hours} Hour(s)\` : \`${minutes} Minute(s)\` : \`${seconds} Second(s)\``
      )
      .setFooter(`⚡Powered by Zen Developments`);

    interaction.followUp({ embeds: [embed] });
  },
};

/**
// ================< ==================== >================= //
//                                                           //
//            Handlers Coded by benzmeister#5843             //
//                                                           //
//     Work for Zen Developments | https://zen-dev.xyz       //
//                                                           //
//                    All Right Reserved!                    //
//                                                           //
// ================< ==================== >================= //
*/
