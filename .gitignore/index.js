const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot prêt !");
});

bot.login('NTI4MjQ2ODI4OTk5NzcwMTEy.DzUTeg.Abkh6xZm8GozilbJlYWu0JEwDP0');
var prefix = "*" ;  
bot.on('message', message => {
    var prefix = "*" ;                                                                                                     

    if(message.content.toLowerCase().startsWith(prefix + "stop")){
        if (message.member.hasPermission("ADMINISTRATOR")){
            message.delete();
            bot.destroy();
        }
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "codex")){
        message.delete();
        message.channel.send("Le lien du codex est https://nationsglory.fr/codex");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "forum")){
        message.delete();
        message.channel.send("Le lien du forum est https://forum.nationsglory.fr/index.php");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "regle")){
        message.delete();
        message.channel.send("Le lien du code civil est https://glor.cc/reglesinternes");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "coran")){
        message.delete();
        message.channel.send("Le lien du coran est https://glor.cc/coran");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "disband")){
        message.delete();
        message.channel.send("Le lien des disbands est https://glor.cc/disbandorange");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "mdr")){
        message.delete();
        message.reply("je te Ez");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "wiki")){
        message.delete();
        message.channel.send("Le lien du wiki est https://glor.cc/wiking");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "plainte")){
        message.delete();
        message.channel.send("Le lien du wiki est https://glor.cc/plaintesorange");
    }else if(message.content.toLocaleLowerCase().startsWith("ping")){
        message.delete();
        message.reply("pong");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "contrat")){
        message.delete();
        message.channel.send("https://glor.cc/missions");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "sanctions")){
        message.delete();
        message.channel.send("liste des sanctions https://glor.cc/listesanctions");
    }else if(message.content.toLocaleLowerCase().startsWith(prefix + "tg")){
        message.delete();
        message.author.createDM().then(channel => {
            channel.send('tg fdp');
        });
    }else if (message.content.toLocaleLowerCase().startsWith(prefix + "avatar")) {
        message.delete();
        message.reply(message.author.avatarURL);
    }else if (message.content.toLocaleLowerCase().startsWith(prefix + "kick")){
        message.delete();
        if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
            message.reply("tu n'as pas le droit de kick ! ;)")
        }else{
            var member = message.mentions.members.first();
            if(!member){
                message.reply("La personne n'existe pas !");
            }else{
                if(!member.kickable){
                    message.reply("L'utilisateur ne peut pas être kick");
                }else{
                    member.kick().then((member) => {
                    message.channel.send('${member.displayName} à éte kick !')
                }).catch() => {
                    message.channel.send("Kick refusé !")
                }
            }
        }}
    
    }else if (message.content.toLowerCase().startsWith(prefix +"help")){
        message.delete();
        message.author.createDM().then(channel => {
            channel.send({ embed :{
                color:3447003,
                description : 'Bonjour ! avec ce bot discord vous avez acces à :',
                fields:[{name: '*codex' ,value :' Envoie le lien du codex.'},{name: '*forum' ,value: 'Envoie le lien du forum.'}, {name: '*regle' ,value:'Envoie les règles internes du serveur.'}, {name:'*coran' ,value :'Envoie le GoogleDocs avec tout ce qui concernes les modérateurs.'}, {name:'*disband' ,value :'Envoie le GoogleDocs pour faire une demande de disband.'}, {name: '*wiki' ,value: 'Envoie le lien du Wiki Officiel de NationsGlory.'}, {name : '*plainte' ,value: 'Envoie le lien de la section plainte sur le forum.'}, {name: '*contrat' ,value : 'Envoie le lien du GoogleDocs pour désposer un contrat sur la tête d\'un joueur.'},{name: '*sanctions' ,value: 'Envoie sur le poste listant toutes les sanctions du serveur Orange.'}, {name: '*avatar' ,value: 'Vous envoie un lien de votre avatar discord.'}]
            
            }})

})}});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le discord NationsGlory Orange !\nJe t\'invite à utiliser le *help et à rester courtois sur le serveur discord ;)'+ member.displayName);

    }).catch(console.error)
});

