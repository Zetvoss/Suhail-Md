const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349014543540";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_10_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJXa29aeGI2Z29ha01RRjBrbFVtOFQ2TkExaXpUcmdHUWVlVDNMN0RDa1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVUSGNncENXU3ZxX3NUTFVCSkpBRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmU3MjY1MTMtMjdlNS00MjNjLTg1YTItYmFiYWI4MTRjNWEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDE4MSxcbiAgICAgIDI1NCxcbiAgICAgIDY4LFxuICAgICAgNzEsXG4gICAgICAyMCxcbiAgICAgIDM0LFxuICAgICAgMjEyLFxuICAgICAgMTI3LFxuICAgICAgMTk1LFxuICAgICAgOTksXG4gICAgICAzMSxcbiAgICAgIDk2LFxuICAgICAgMTQ3LFxuICAgICAgMjE1LFxuICAgICAgNDYsXG4gICAgICA4NCxcbiAgICAgIDIyMixcbiAgICAgIDIyOSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMjQxLFxuICAgICAgMTU1LFxuICAgICAgMTQ2LFxuICAgICAgNDUsXG4gICAgICAyMTMsXG4gICAgICA0NCxcbiAgICAgIDM0LFxuICAgICAgMjE2LFxuICAgICAgMTkxLFxuICAgICAgMTE1LFxuICAgICAgMjI4LFxuICAgICAgODQsXG4gICAgICA4MixcbiAgICAgIDE0NixcbiAgICAgIDI5LFxuICAgICAgNSxcbiAgICAgIDE5OCxcbiAgICAgIDM2LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTlTWlpFM0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTQ1NDM1NDA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTY3NDQ1NDEwMTYyNDg6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNR2pxWTRFRUp5WnM3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ3ZmFzOUxPbnRGVlVZTnBGeGZ6ekNxMnlqcU1IUURxMlZBTDNhMTV4a0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFdjSGlJMGtnUXJLU3BZRVZVcFB2aWU3NFN5M293ay9la3pXbkNDQmJON05XUkI2WnRQTGRIejFtZWxMUHBURGc1S3JLWjVyNmRCRVJxRzNJMWdGQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGdnTFZTcFhuTHZLdVJOTUdreGdjWXhsZkxwMzRSWDVKV0JqMGFCUUhvY3hOZ3NUcm1FeG9yTUFOaE1vdE1Wa0pRQ3BxbmlEUUxVTFhwakJMK09JQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDU0MzU0MDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYwMDYwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdyY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3JjLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUNHSnpqYUh4T3U5bTFmVnB5QVpSK3d5RXU5eHEyMXpLcGsxY0NxWExFST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTAzNzc4MjQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MzgwNjQxNzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
