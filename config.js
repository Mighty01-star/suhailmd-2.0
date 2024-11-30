const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="mightytechcompanylimited@gmail.com"
global.location="Osun,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349152511080";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_00_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK01BcjgyWFgyS0JrUmRwb3NyMUoyUUljdVNMbUlkNDdjdFU2b29IQXN3WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVnNRcXVPUVVTSDYwZm02Mkd2QnpDd1wiLFxuICBcInBob25lSWRcIjogXCIyZjg2ZGI4Yi0xNmM3LTQ2YjYtYmFkMi03NWY3M2M2YjlmNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyMjMsXG4gICAgICAxOTYsXG4gICAgICAxMDUsXG4gICAgICAxMDgsXG4gICAgICAxNjIsXG4gICAgICA4NCxcbiAgICAgIDcxLFxuICAgICAgMzQsXG4gICAgICAyMjYsXG4gICAgICAxNjYsXG4gICAgICAzMixcbiAgICAgIDIzMSxcbiAgICAgIDEyMCxcbiAgICAgIDQzLFxuICAgICAgMzYsXG4gICAgICA0OSxcbiAgICAgIDE3MixcbiAgICAgIDIxNixcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNTgsXG4gICAgICA3NSxcbiAgICAgIDI1MCxcbiAgICAgIDE4NCxcbiAgICAgIDc1LFxuICAgICAgNTEsXG4gICAgICAxMzAsXG4gICAgICAyNTMsXG4gICAgICAxNDUsXG4gICAgICAxNDUsXG4gICAgICA5NyxcbiAgICAgIDEwNCxcbiAgICAgIDE4MixcbiAgICAgIDY1LFxuICAgICAgMTM3LFxuICAgICAgNTksXG4gICAgICA0NyxcbiAgICAgIDEwOSxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSzlHTEJaVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MjUxMTA4MDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1pZ2h0eSBUZWNoIENvbXBhbnkgTGltaXRlZFwiLFxuICAgIFwibGlkXCI6IFwiMTYyODA1NTMzNjU1MDU4OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQR2p4MFExT0NydWdZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZTZ6UkdUOEhXV3JRcGVTSXUvNjl0K3VGckU4ZVRpNkhNQWNQRUFCZ2JGcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6bXNNQlRUUU9LNzA5Z1FKd3FQcndVNUc0QUcvNDgwaVl4cDBPM1YvTHJ4MVMrdHRwTm5qanpWbjl2VHZ2WXQ3Ryt1V3l6WkEwK0M5dFJBUkZ0WnBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBVm5hekRXb0Nyd0FrWWRhdFNpMVE1NXkrOWhhSS9CR2MrOVozRWRpRFRVZkN0RTNrYzBZcVhNWnhKUGNaTWdEQ1lzUThqL284QVNKaUEzdGh2ZWNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTUyNTExMDgwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTY0NDQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUs2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlanBxb0FZWXJJendMa2tVd0s0UWJpSkJTZU4yWGRNZ1NvbU5QSDZ5bXB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxMDcyMTQ3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMjk2MzY1MDM4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHUR "mighty tech",
  packname: process.env.PACK_NAME || "Mighty tech",
  botname : process.env.BOT_NAME  || "mighty tech",
  ownername:process.env.OWNER_NAME|| "Mighty Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
