const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "www.youtube.com" ;  
global.video= "www.youtube.com" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KzkbanzOVj3FRTKPi8vQVV";
global.website=process.env.GURL || "https://chat.whatsapp.com/KzkbanzOVj3FRTKPi8vQVV" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©Created by Tristan" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "27656319889";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27634624586";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_51_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaS81WW9QRjJNYzNiUlhnS3JZcElUVUZWZzliczBRQ2NScGdIemZGTVZPZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmFIV2JoX05TY0tnTlM3a3lMcVhyQVwiLFxuICBcInBob25lSWRcIjogXCJhZmE4MWNhNi05ZmU2LTQ4MjctOGFjYS0xM2M2Y2ViYWFkZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxNjcsXG4gICAgICAxMzUsXG4gICAgICAyNixcbiAgICAgIDE3NSxcbiAgICAgIDQ4LFxuICAgICAgMTMwLFxuICAgICAgMTMxLFxuICAgICAgODUsXG4gICAgICAxNDgsXG4gICAgICA5MixcbiAgICAgIDEyNCxcbiAgICAgIDEzNyxcbiAgICAgIDE3NyxcbiAgICAgIDI4LFxuICAgICAgMjMsXG4gICAgICA0MyxcbiAgICAgIDY0LFxuICAgICAgNzcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjA1LFxuICAgICAgNTEsXG4gICAgICA2NyxcbiAgICAgIDM3LFxuICAgICAgMTM1LFxuICAgICAgMjIyLFxuICAgICAgNTgsXG4gICAgICAxNjcsXG4gICAgICAxMyxcbiAgICAgIDE0NyxcbiAgICAgIDEwLFxuICAgICAgMjksXG4gICAgICAxNjksXG4gICAgICAyNTAsXG4gICAgICAxMTQsXG4gICAgICAzOSxcbiAgICAgIDIxNCxcbiAgICAgIDg5LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVFCSDY3MTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjU2MzE5ODg5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTU4MjA5ODA4MDU2NTg6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJIMy9jRUVLNlh5YmdHR0JzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKK1FJS3hTUGZZN1l2V1VyT3pUVFpmZGpXZFdDbGM0djhBYXdhUzNQNHhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9ZeFNraFg1ckRYS2xpNE9hUWZpQnpKdmROT1k5OThscWZlNlplMXoxODJSdjVxYTN3c0pXV2d0RXcyZHhWSG1QbVNUOTlENXdHM0YyWEJsbGtsOURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJvazlzK0t5NTk0VlVrQ05PcHRSZmlvWE85RDBRR0RBQ0lFZlk5Q0dNdTV2ZDlOT1NVQ0Z6clpHdXdZNWRRZkdGK3hobVBia2dQMXEwS0hEOENHNmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjU2MzE5ODg5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MjUyMjc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1hkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuc3dNZ1NDMVhzaWF2NmNTdThmdVo0aVZ2Z1AxQ3FDdXZleG1jK3duSk9ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjQ4Njg1NTQsXCJjdXJyZW50SW5kZXhcIjoyNixcImRldmljZUluZGV4ZXNcIjpbMCwxLDIwLDI2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkyNTIyNDk4MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©Created by Tristan®" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Tristan",
  packname: process.env.PACK_NAME || "Tristan",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Tristan",


  errorChat : process.env.ERROR_CHAT || "error occurred,idiot",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
