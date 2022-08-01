const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  cooldown: 5,
  description: "See all of the bots commands",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @returns
   */
  run: async (client, interaction, args) => {
    let categories = [];

    readdirSync("./SlashCommands/").forEach((dir) => {
      const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );

      const cmds = commands.map((command) => {
        let file = require(`../../SlashCommands/${dir}/${command}`);
        if (!file.name) return "Missing file name.";
        let name = file.name.replace(".js", "");
        return `\`${name}\``;
      });
      let data = new Object();

      data = {
        name: dir.toUpperCase(),
        value: cmds.length === 0 ? "`🔺 N/A`" : cmds.join(" , "),
      };

      categories.push(data);
    });

    const embed = new MessageEmbed()
      .setAuthor(
        `Discord.js Bot | Handler | Zen Developments`,
        client.user.displayAvatarURL()
      )
      .setColor(client.config.color.main)
      .addField(
        `About Me`,
        "*I am a Discord.js V13 Slash Commands Handler made by https://discord.gg/zendev\nPlease give credits if you use our handler*"
      )
      .addFields(categories)
      .setFooter(
        `Powered by Zen Developments\n🔸 Server-Shard(s): ${interaction.guild.shardId}`,
        interaction.guild.iconURL()
      );
    return interaction.followUp({ embeds: [embed] });
  },
};
