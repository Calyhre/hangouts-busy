var http = require('http');
var hangoutsBot = require("hangouts-bot");
var dotenv = require('dotenv').load();

var bot = new hangoutsBot(process.env.HANGOUTS_USER, process.env.HANGOUTS_PASSWORD);

if(!process.env.HANGOUTS_USER || !process.env.HANGOUTS_PASSWORD){
  throw 'Missing HANGOUTS_USER and/or HANGOUTS_USER !';
}

var autoReplyMessage = process.env.HANGOUTS_MESSAGE || "I'm not available on Hangouts, and I may never see this message. Please send me an email.";

bot.on('online', function() {
  console.log('online');
});

bot.on('message', function(from, message, attrs) {
  bot.sendMessage(from, autoReplyMessage);
});

http.createServer(function (req, res) {
  res.writeHead(200, "OK");
  res.write('Bot is up !');
  res.end();
}).listen(process.env.PORT || 5000);
