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
    console.log(msg);
})

client.login(
    "MTEyODI0NTUwODU5NTUyNzc1MA.GdkqSf.LRi_N2f9vTZIyherghZvyn0NcuuIiFt-KoYKho"
);

