require('dotenv').config();
const{Client , IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c)=>{
    console.log(`${c.user.id} is online`);
});

client.on('messageCreate', (msg)=>{
    if(msg.author.bot){
        return;
    }
    if(msg.author.username === "dung.nguyenxuan"){
        msg.reply("fuckkkkkkkkkkkkkkkkkkkkkk you");
        return; 
    } 
    if(msg.author.username === "myeooo"){
        
    }
    if(msg.content === "hello"){
        msg.reply("meo meo");
    }
    if(msg.content === "math"){
        msg.reply("Alan Becker Animation vs Math");
    }
    if(msg.content.includes("chị liên")){
        msg.reply("Tao chưa thấy con đàn bà nào bỏ chồng mà xây được nhà cả");
    }
})

client.login(process.env.TOKEN);

