const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

module.exports = {
  name: "invite",
  cooldown: 5,
  description: "Gets the bot's invite link",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`Invite ${client.user.username}`)
      .setDescription(`Invite ${client.user.username} to your server`)
      .setFooter(`⚡Powered by Zen Developments`);

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
        )
        .setLabel("Invite Me")
        .setStyle("LINK")
    );

    interaction.followUp({ embeds: [emb], components: [row] });
  },
};
