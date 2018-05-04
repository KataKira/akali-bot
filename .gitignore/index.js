const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login("NDQwNjE5NzYzODA3Mjg5MzQ0.DckhcA.6q1d8cBzUmGskz6fQw0mW1seixU");

client.on("ready" , () => {
    console.log("Katarina au rapport.Que puis-je faire pour vous ?")
    client.user.setGame("faire une traite négrière");
});

client.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("salut jeune bamboula égaré");
        console.log ('Le bot dit bonjour');
    }

    if(message.content === prefix + "help"){
        var help_embed  = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("c'est avec ceci que je pourrais vous aider")
        .setThumbnail(message.author.avatarURL)
        .setDescription("je suis katarina chef de l'armée de Noxus a votre service")
        .addField("/help" , "affiche les commandes du bot")
        .addField("Bonjour", "le bot répond")
        .addField("/statistiques", "Le bot vous envoie les informations de votre profil")
        .addField("/info", "Donne des informations sur le bot et le serveur")
        .setFooter("Menu d'aide - Katarina")
        message.channel.sendMessage(help_embed);
        console.log("un bougnoule a demander de l'aide au bot")
    }

    if(message.content === prefix + "play")
    var help_embed = new Discord.RichEmbed()
    .setColor("#CC0000")
    .setTitle("Lecture de la musique")
    .setThumbnail(message.author.youtubeURL)

    if(message.content === prefix + "info") {}
    var info_embed = new Discord.RichEmbed()
    .setColor("CC0000")
    .setTitle("voici mes infos personnel ainsi que celle du serveur")
    .addField(" :robot: Nom :", `${client.user.tag}`,true)
    .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
    .addField("ID :id: ", `${client.user.id}`)
    .addField("Nombre de menbres", message.guild.members.size)
    .addField("Nombre de catérgories et de salons", message.guild.channels.size)
    .setFooter("Info - Katarina")
    message.channel.sendMessage(info_embed)
    console.log("Un bougnoule a demander des infos au bot")


    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "statistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#00FF00")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utlisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Regarde tes MP sale nègre")
        message.author.send({embed: stats_embed});
        break;
    }

});
