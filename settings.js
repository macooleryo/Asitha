const fs = require('fs');

if (fs.existsSync('config.env'))
  require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

module.exports = {

  // 🔐 SESSION
  SESSION_ID: process.env.SESSION_ID || 'ASITHA-MD=acee65a1224789c4',
  SESSION_NAME: process.env.SESSION_NAME || 'asitha',
  PORT: process.env.PORT || "8000",

  // 👑 OWNER SETTINGS
  NUMERO_OWNER: process.env.NUMERO_OWNER || "263XXXXXXXXX",
  OWNER_NAME: process.env.OWNER_NAME || "Bot Owner",
  WARN_COUNT: process.env.WARN_COUNT || "3",

  // 🤖 BOT BASIC INFO
  BOT_NAME: process.env.BOT_NAME || "ASITHA-MD",
  BOT_MENU_LINKS: process.env.BOT_MENU_LINKS || "https://your-link.com",
  MENUTYPE: process.env.MENUTYPE || "text",
  STARTING_BOT_MESSAGE: process.env.STARTING_BOT_MESSAGE || "🤖 Bot is now online!",
  PRESENCE: process.env.PRESENCE || "online",

  // 💬 CUSTOM TEXT
  AUTO_REPLY: process.env.AUTO_REPLY || "Hello 👋, I am your WhatsApp bot!",
  MENU_TEXT: process.env.MENU_TEXT || "📜 Menu:\n.menu\n.play\n.owner",

  // ⚡ AUTO FEATURES
  AUTO_READ: convertToBool(process.env.AUTO_READ || "false"),
  AUTO_REACT: convertToBool(process.env.AUTO_REACT || "false"),
  AUTO_TYPING: convertToBool(process.env.AUTO_TYPING || "false"),
  RECORDING: convertToBool(process.env.RECORDING || "false"),
  STATUSVIEW: convertToBool(process.env.STATUSVIEW || "false"),
  ONLINE: convertToBool(process.env.ONLINE || "false"),

  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS || "false"),
  AUTO_SAVE_STATUS: convertToBool(process.env.AUTO_SAVE_STATUS || "false"),
  AUTO_SAVE_CONTACTS: convertToBool(process.env.AUTO_SAVE_CONTACTS || "false"),
  AUTO_DOWNLOAD_STATUS: convertToBool(process.env.AUTO_DOWNLOAD_STATUS || "false"),

  // 🛡️ SECURITY FEATURES
  ANTICALL: convertToBool(process.env.ANTICALL || "false"),
  ANTILINK_GROUP: convertToBool(process.env.ANTILINK_GROUP || "false"),
  ANTIDELETE_MESSAGES: convertToBool(process.env.ANTIDELETE_MESSAGES || "false"),
  PM_PERMIT: convertToBool(process.env.PM_PERMIT || "false"),
  PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE || "true"),

  // 🤖 AI FEATURES
  CHATBOT: convertToBool(process.env.CHATBOT || "false"),
  AUDIO_CHATBOT: convertToBool(process.env.AUDIO_CHATBOT || "false"),
  AUTO_BIO: convertToBool(process.env.AUTO_BIO || "false"),

  // ☁️ HEROKU SUPPORT
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""

};