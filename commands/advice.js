const axios = require("axios");

async function getAdvice() {
  return await axios("https://api.adviceslip.com/advice").then(
    (res) => res.data.slip
  );
}

module.exports = {
  name: "advice",
  description: "Will tell you a random advice",
  execute(message) {
    getAdvice().then((res) => {
      message.reply(res.advice);
    });
  },
};
