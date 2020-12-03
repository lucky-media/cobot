const axios = require('axios');

async function sleep(ms) {
    return Promise((resolve) => setTimeout(resolve, ms));
}

async function getAdvice() {
  return await axios('https://api.adviceslip.com/advice').then(res => res.data.slip);
}

module.exports = {
  name: 'advice',
	description: 'Will tell you a random advice',
	execute(message, args) {
    getAdvice().then(res => {
      message.reply(res.advice);
    })
	},
}