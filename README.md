<div align="center">
  
  
  ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![Discord](https://img.shields.io/discord/948744977524097116?logo=discord&style=for-the-badge)
  ![GitHub top language](https://img.shields.io/github/languages/top/benzmeister/Discord.js-V13-SlashComamand-Handler?logo=javascript&style=for-the-badge)
  ![GitHub all releases](https://img.shields.io/github/downloads/benzmeister/Discord.js-V13-SlashComamand-Handler/total?style=for-the-badge)
  ![GitHub forks](https://img.shields.io/github/forks/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![GitHub contributors](https://img.shields.io/github/contributors/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![GitHub issues](https://img.shields.io/github/issues/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr-closed/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![Watching](https://img.shields.io/github/watchers/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![Stars](https://img.shields.io/github/stars/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
  
</div>

---------
<p align="center">
  <a href="https://discord.gg/VzGNhtmmfB"><img src="https://discordapp.com/api/guilds/948744977524097116/widget.png?style=banner2" alt="Discord server"></a>
</p>

---------
# Discord.js v13 Handler Template

---------
## ⚙️ Configuration
- ⚠️ Never share your tokens or api keys to other or make it publicly
- To start the Handler use `node cluster.js` or `node .`
- Modify `config.json` and fill out the values:
```env
{
  "env": {
    "token": "PUT_YOUR_TOKEN_HERE",
    "prefix": "//",
    "activity": "/help | On {shards} Cluster(s)",
    "type": "WATCHING",
    "status": "online"
  },

  "mongoDB": {
    "COMMENT": "Put TRUE(in lowercase) if you want this handler to have MongoDB database.",
    "enable": false,
    "mongoURL": "PUT_YOUR_MONGODB_HERE"
  },

  "developers": [],

  "emoji": {
    "wrong": "",
    "right": ""
  }
```
---------
- Slash Command Structures
```env
const { Client, CommandInteraction } = require("discord.js");

module.exports = {
  name: "",
  cooldown: 5,
  description: "",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    //Put your codes here
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
```
---------
## 💝 Credits

*If you consider using our template, make sure to give Credits!*

**[Zen Developments](https://discord.zen-dev.xyz) | [Website](https://zen-dev.xyz) | [Discord](https://discord.gg/zendev)**
---------

## 📜 License
![Github license](https://img.shields.io/github/license/benzmeister/Discord.js-V13-SlashCommand-Handler?style=for-the-badge)
