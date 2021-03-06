const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot prêt !");
});

bot.login(process.env.TOKEN);
var prefix = "*" ;  
function sendError(message, descritpion) {
    message.channel.send({embed:  {
        color : 0xff0000,
        description: ':x:' + descritpion
    }});
}

bot.on('message', message => {
    var prefix = "*" ;                                                                                                
    let splitMessage = message.content.split(" ");
    let args = message.content.split(" ").slice(1);
    if(message.content.toLowerCase().startsWith(prefix + "stop")){
        if (message.member.hasPermission("ADMINISTRATOR")){
            message.delete();
            bot.destroy();
        }
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "codex")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du codex est https://nationsglory.fr/codex'
        }})


    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "forum")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du forum est https://forum.nationsglory.fr/index.php'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "regle")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du code civil est https://glor.cc/reglesinternes'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "coran")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du coran est https://glor.cc/coran'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "disband")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien des disbands est https://glor.cc/disbandorange'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "ez")){
        message.delete();
        message.reply({embed :{
            color: 0x1CF03C,
            description : 'je te ez'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "wiki")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du wiki est https://glor.cc/wiking'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "plainte")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien du wiki est https://glor.cc/plaintesorange'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith("ping")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'pong'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "contrat")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'Le lien des contrats Mafia https://glor.cc/missions'
        }})


    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "sanctions")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'liste des sanctions https://glor.cc/listesanctions'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "mod")){
        message.delete();
        message.channel.send({embed :{
            color: 0x1CF03C,
            description : 'liste des mods autorisés sur NationsGlory https://glor.cc/modautorise'
        }})

    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "tg")){
        message.delete();
        message.author.createDM().then(channel => {
            channel.send({embed :{
                color: 0x1CF03C,
                description : 'Ta gueule'
            }})

        });
    }else if (message.content.toLocaleLowerCase().startsWith(prefix + "avatar")) {
        message.delete();
        message.reply(message.author.avatarURL);

    }else if (splitMessage[0] === prefix + 'profil'){
        
        if(splitMessage.length === 2){
        var EmbedProfil = new Discord.RichEmbed()
            .setColor ("0x1CF03C")
            .setDescription ('https://nationsglory.fr/profil/' + splitMessage[1])
            .setImage("https://nationsglory.fr/utilitaire/skin_renderer.php?vr=340&hr=30&ratio=4&format=png&displayHair=true&headOnly=true&user=" + splitMessage[1])
            

        message.channel.sendEmbed(EmbedProfil);
        }
        else
            sendError(message, '<*profil + pseudo>');





    }else if (splitMessage[0] === prefix + 'ban'){
        message.delete();        
        if(splitMessage.length > 5)
         message.channel.send({embed :{
            color: 0x1CF03C,
            description : "pseudo ban: " + splitMessage[1] + "\nplateforme: " + splitMessage[2] + "\ndate: " + splitMessage[3] + "\ndurée: " + splitMessage[4] + 
            "\nraison: " + splitMessage[5]+ " "+splitMessage[6]+ " "+splitMessage[7] + " "+splitMessage[8] + " "+splitMessage[9] + " "+splitMessage[10]
        }})
        else
            sendError(message, '*ban <pseudo> <plateforme> <date> <durée> <raison>')




    }else if (splitMessage[0] === prefix + 'jail'){
        message.delete();        
        if(splitMessage.length > 4)
         message.channel.send({embed :{
            color: 0x1CF03C,
            description : "pseudo jail: " + splitMessage[1] + "\ndate: " + splitMessage[2] + "\ndurée: " + splitMessage[3] +  
            "\nraison: " + splitMessage[4] + " "+splitMessage[5]+ " "+splitMessage[6] + " "+splitMessage[7] + " "+splitMessage[8] + " "+splitMessage[9]
        }})
        else
            sendError(message, '*jail <pseudo> <date> <durée> <raison>')




    }else if (splitMessage[0] === prefix + 'mute'){
        message.delete();        
        if(splitMessage.length > 4)
         message.channel.send({embed :{
            color: 0x1CF03C,
            description : "pseudo mute: " + splitMessage[1] + "\ndate: " + splitMessage[2] + "\ndurée: " + splitMessage[3] +  
            "\nraison: " + splitMessage[4] + " "+splitMessage[5]+ " "+splitMessage[6] + " "+splitMessage[7] + " "+splitMessage[8] + " "+splitMessage[9]
        }})
        else
            sendError(message, '*mute <pseudo> <date> <durée> <raison>')




    }else if (splitMessage[0] === prefix + 'mutecommerce'){
        message.delete();
        if(splitMessage.length > 4)
            message.channel.send({embed :{
                color: 0x1CF03C,
                description : "Pseudo : " + splitMessage[1] + "\nHeure : " + splitMessage[2] + "\nDate d'unmute : " + splitMessage[3] + "\nRaison : " + splitMessage[4]+" " + splitMessage[5] +" " + splitMessage[6]
        }})
        else
            sendError(message, '*mutecommerce <Pseudo du mute> <Heure> <Date unmute> <Raison>')




    }else if(splitMessage[0] === prefix + 'say'){
        message.delete();
        const embed = new Discord.RichEmbed()
        .setColor(0x954D23)
        .setDescription(args.join(" "))
        message.channel.send({embed})




}else if (message.content.toLowerCase().startsWith(prefix +"help")){
    message.delete();
    message.author.createDM().then(channel => {
        channel.send({ embed :{
            color: 0x1CF03C,
            description : 'Bonjour ! avec ce bot discord vous avez acces à :',
            fields:[{name: '*codex' ,value :' Envoie le lien du codex.'},{name: '*forum' ,value: 'Envoie le lien du forum.'}, 
                    {name: '*regle' ,value:'Envoie les règles internes du serveur.'}, 
                    {name:'*coran' ,value :'Envoie le GoogleDocs avec tout ce qui concernes les modérateurs.'}, 
                    {name:'*disband' ,value :'Envoie le GoogleDocs pour faire une demande de disband.'}, 
                    {name: '*wiki' ,value: 'Envoie le lien du Wiki Officiel de NationsGlory.'}, 
                    {name : '*plainte' ,value: 'Envoie le lien de la section plainte sur le forum.'}, 
                    {name: '*contrat' ,value : 'Envoie le lien du GoogleDocs pour désposer un contrat sur la tête d\'un joueur.'},
                    {name: '*sanctions' ,value: 'Envoie sur le poste listant toutes les sanctions du serveur Orange.'}, 
                    {name: '*avatar' ,value: 'Vous envoie un lien de votre avatar discord.'},
                    {name: '*say', value: 'Envoie un message global.'},
                    {name: '*ban', value: 'Mets un message avec <pseudo> <plateforme> <date> <durée> <raison>.'},
                    {name: '*mute', value: 'Mets un message avec <pseudo> <date> <durée> <raison>.'},
                    {name: '*jail', value: 'Mets un message avec <pseudo> <date> <durée> <raison>.'}]
            
        }})

})}

});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le discord NationsGlory Orange !\nJe t\'invite à utiliser le *help et à rester courtois sur le serveur discord ;)'
        + member.displayName);

    }).catch(console.error)
});
