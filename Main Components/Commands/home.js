module.exports = {
    name: 'home',
    description: "thisss is a command mf",
    execute(message, args) {

        if(message.member.roles.cache.has('911912435672309790')){
        message.channel.send('https://www.messenger.com/t/4249353125106862');
        
        } else {
            message.channel.send('00ps, it seems that you dont have a higher ground to use this command !');
        }
        
    }
}
