require("express")().listen(1343);//xxkagancooTR

const db = require("quick.db"); 
const discord = require("discord.js");//xxkagancooTR
const client = new discord.Client({ disableEveryone: true });//xxkagancooTR
client.login("token");
const fetch = require("node-fetch");
const fs = require('fs')//xxkagancooTR

setInterval(() => {
  var links = db.get("linkler");//xxkagancooTR
  if(!links) return 
  var linkA = links.map(c => c.url)//xxkagancooTR
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")//xxkagancooTR
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//xxkagancooTR
db.set("linkler", [])
}//xxkagancooTR
  
  
})

client.on("ready", () => {
  client.user.setActivity(`up!yardım | yapımcı xxkagancooTR`)//xxkagancooTR
  console.log(`Logined`)//xxkagancooTR
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//xxkagancooTR
  if(spl[0] == "up!ekle") {
  var link = spl[1]//xxkagancooTR
  fetch(link).then(() => {//xxkagancooTR
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ Bu bot zaten uptime ediliyor.**")//ukqzn
    
    let yardım = new Discord.RichEmbed()//xxkagancooTR
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Başarılı! Projeniz artık 7/24!**")//xxkagancooTR
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //xxkagancooTR
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//xxkagancooTR
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Hata! Sadece düzgün url'ler ekleyebilirsiniz.**")//xxkagancooTR
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000)); //xxkagancooTR
  })//xxkagancooTR
  }
})


client.on("message", message => {//xxkagancooTR
  if(message.author.bot) return;
  var spl = message.content.split(" ");//xxkagancooTR
  if(spl[0] == "up!botsay") {//xxkagancooTR
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//xxkagancooTR
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//xxkagancooTR
  if(spl[0] == "up!yardım") {
let embed = new Discord.RichEmbed()//xxkagancooTR
.setColor('#070706')
.addField(`Botu eklemek için tıkla! = https://bit.ly/2G9wjve`, `Botu Sunucunuza Ekliyebilirsiniz!`)
.setDescription(`**Uptime komudunu kullandıktan sonra sisteme eklenmesi için 3-5 dk bekleyin.**

 ❓ **up!yardım** : Botun yardım menüsünü açar.

 🖐 **up!ekle <link>** : Eklediğiniz proje linkini 7/24 açık yapar.

 ⚡ **up!botsay** : Bot'umuzla uptime olan proje sayısını gösterir.

 🔮 **up!botbilgi** : Bot'un istastistik verilerini gösterir.

`)
.setAuthor(`xuptimex | Yardım Menüsü`, client.user.avatarURL)
.setFooter(`xuptimex | Botun Kodlayıcıları = xxkagancooTR#3439`)//xxkagancooTR
.setImage(`https://cdn.discordapp.com/attachments/741014134576906332/741980222101913600/unknown.png`)
return message.channel.send(embed);//xxkagancooTR
    }
  
  })
  const log = message => {//xxkagancooTR
  console.log(`${message}`);
}
  
client.on("message", message => {//xxkagancooTR
  if(message.author.bot) return;
  var spl = message.content.split(" ");//https://bit.ly/2G9wjve
  if(spl[0] == "up!botbilgi") {
  var link = spl[1]
 message.channel.send(`***
xuptimex bot bilgi menüsü
yapımcı = xxkagancooTR#9999
geliştirici = xxkagancooTR#9999
destek sunucu = https://discord.gg/j28uRUG
sponsor = şuan yok olmak için xxkagancooTR#9999
bot site = https://kagangokmen31.wixsite.com/sitem-2
***`)//https://bit.ly/2G9wjve
}})

//coded by xxkaggancoTR
  

  