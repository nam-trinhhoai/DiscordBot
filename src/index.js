require('dotenv').config();
const{Client , IntentsBitField} = require('discord.js');
const todoList = `có 2 việc cần làm 
1. hiểu discord event 
2. thiết kế flow data và logic 
cần làm cái đấy trước khi code 
discord event thì gồm có: 
1. text event (mention, link, emo...) 
2. media event 
3. game sdk event`;
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
    if(msg.content === "hello"){
        msg.reply("meo meo");
    }
    if(msg.content === "very 🙂"){
        msg.reply("Fuck You");
    }
    if(msg.content === "todo"){
        msg.reply(todoList);
    }
})

client.login(process.env.TOKEN);

