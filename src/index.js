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

const owgameEventDll = `
1. owgame_events_create( owgame_id, unsigned int, owgame_info_category*, owgame_events_handle*)
2. owgame_events_set_info_key(owgame_events_handle, const char*, const char*, unsigned int, const char*)
3. owgame_events_trigger_event(owgame_events_handle, owgame_event*),
4. owgame_events_begin_info_transaction(owgame_events_handle)
5. owgame_events_commit_info_transaction(owgame_events_handle)
6. owgame_events_turn_on_logger(const wchar_t*)
`;
const repo = `https://github.com/nam-trinhhoai/DiscordBot.git`;
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
    // if(msg.author.username === "dung.nguyenxuan"){
    //     msg.reply("lượn đi, lêu lêu");
    //     return;
    // }
    if(msg.content === "hello"){
        msg.reply("meo meo");
    }
    if(msg.content === "very 🙂"){
        msg.reply("Fuck You");
    }
    if(msg.content === "todo"){
        msg.reply(todoList);
    }
    if(msg.content === "game event"){
        msg.reply("game event producer" + owgameEventDll);
    }
    if(msg.content === "*repo"){
        msg.reply(repo);
    }

})

client.login(process.env.TOKEN);

