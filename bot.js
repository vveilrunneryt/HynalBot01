const mineflayer = require('mineflayer')

const SERVER_IP = process.env.SERVER_IP
const PORT = process.env.PORT || 25565
const BOT_COUNT = process.env.BOT_COUNT || 3

for (let i = 0; i < BOT_COUNT; i++) {
  createBot(i)
}

function createBot(i) {
  const bot = mineflayer.createBot({
    host: SERVER_IP,
    port: PORT,
    username: 'Bot_' + Math.floor(Math.random() * 10000)
  })

  bot.on('spawn', () => {
    console.log(`Bot ${i} joined`)
  })

  bot.on('end', () => {
    setTimeout(() => createBot(i), 5000)
  })

  bot.on('error', err => console.log(err))
}