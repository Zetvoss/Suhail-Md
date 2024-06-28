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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_50_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImd6am4vTW5qRExHcnQrVVkzcnlIN3lFL3k2eW1XdUxoYmk5Mm1SdmIwTkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNDU0MzU0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDEyRjE1QzZGQjBGQkNCQTdCMUY3QzBDRDlGNzU0MkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTU3NDM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNDU0MzU0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkE2NEVEMTJCRkVFOTg2QjNFRjQ3NzgyMjQwNTVBODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTU3NDM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRXOVpTdERCU1dTTkxOdkE0U3BWNVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDY1OGU1NGYtOTdiMi00ZTFlLTkwMDUtNjdjMDNiNjBhOTQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgMzYsXG4gICAgICAyNDMsXG4gICAgICAxOTAsXG4gICAgICAxOTksXG4gICAgICAzMixcbiAgICAgIDMsXG4gICAgICAxNTksXG4gICAgICA1OCxcbiAgICAgIDI0NixcbiAgICAgIDIwOCxcbiAgICAgIDE4NSxcbiAgICAgIDE4MixcbiAgICAgIDgzLFxuICAgICAgMjQ1LFxuICAgICAgMjM1LFxuICAgICAgMTk1LFxuICAgICAgMjE2LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDI0MixcbiAgICAgIDE4NixcbiAgICAgIDUzLFxuICAgICAgMzQsXG4gICAgICAzNCxcbiAgICAgIDkwLFxuICAgICAgNjAsXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDI0MixcbiAgICAgIDIzOCxcbiAgICAgIDE5NyxcbiAgICAgIDEwNSxcbiAgICAgIDE0NixcbiAgICAgIDgyLFxuICAgICAgNTgsXG4gICAgICA3NSxcbiAgICAgIDUwLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBQRFpMOURGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE0NTQzNTQwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk2NzQ0NTQxMDE2MjQ4OjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ29hY2ggVG9sdWxvcGVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTEJocEVFRUxXNitiTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNVanVkcnVDWDBiY2JYcStvUkZ0VjdIZjJrL3JpcFFYa3FlRTljMGpPbjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXpIcDdKQjI2VVpVdUVIRi9KdzkyM2RUKzE4SGVLNHJmRnI3YVRScE9DNFRGRElMZEtiYzZRWjhudlNmSkNFUHdMYm9pekFBbnJsTi9QTGZTcEJDQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzNVblFGa0oybENaa1FYeWJmVEtEZ1l5S1JjUFNJaWc4U1V0blNSTVpLamRyajMyUHBWN0FZTHJyY1ZKaFRjYVBzUnNQZksvUVJyMVFPOUpLWEQ4Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDU0MzU0MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTU3NDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUg4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTRW1kWTZud0hoU0hhVlVBK3FJYUVwWkd4RkdNbDlnZHZCTkI5dkhrckE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDk1MDAwODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA1MDY1MjM2NFwifSIKfQ=="  // PUT your SESSION_ID 


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
