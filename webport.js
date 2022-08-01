const e = require("express");
const s = e();
s.all("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(
    `<html><head> <link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #23272A; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 48px;}</style></head><body> <h1>✅ Hosting Port Activated 🌐</h1> <p>Bot type: <b>Discord.js-v13-handler</b></a> <br/><br/><i>Made by:</i> <a href="https://zen-dev.xyz">Zen Developments</a></b><br/><i>Coded By: </i><b>benzmeister#5843<b/><br/><br/> <a href="https://discord.gg/zendev"> <img src="https://discordapp.com/api/guilds/948744977524097116/widget.png?style=banner2"> </a><br/><br/><i>Make sure to add the repl.co URL to some sort of <a href="https://uptimerobot.com/">UPTIMER LINK SYSTEM</a></i></p></body></html>`
  );
  res.end();
});
function k() {
  s.listen(3000, () => {
    console.log(
      "24/7 Keepalive Server is online! Make sure to add the Replit.co URL to an Uptimer System"
    );
  });
}
module.exports = k;


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
