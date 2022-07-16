module.exports = {
    name: 'cmd',
    description: "embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        //CMD List:
        .setColor('#FF0000')
        .setTitle('Here is ALL of the Commands | "=" for activate the commands')
        .setURL('https://www.youtube.com/watch?v=Ru_j8oRi-rY')
        .setDescription('Command List')
        .addFields(
            {name: 'Cmd #1', value: '=cmd (For displaying all the commands)'},
            {name: 'Cmd #2', value: '=sigma? (Đoán xem ai là sigma nào ? ^^)'}, 
            {name: 'Cmd #3', value: '=home (Link redirect về group Mess)'},
            {name: 'Cmd #4', value: '=bách (dỉty secret ^^)'},
            {name: 'Cmd #5', value: '=dạy_đời (Dùng để spam đạo lý làm người của nhà đạo lý học Huấn Rosé)'},
            {name: 'Cmd #6', value: '=insult (chửi = văn mẫu)'},
        )
        .setImage('https://i.imgflip.com/40thfv.gif')
        .setFooter('Make sure to using the commands properly or else ur arse would be filled with white stuff after U wake up ;)) ');
        //Ending
        message.channel.send({embeds: [newEmbed]});
    }   
}