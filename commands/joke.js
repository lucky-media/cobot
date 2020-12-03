const axios = require("axios");

async function sleep(ms) {
  return Promise((resolve) => setTimeout(resolve, ms));
}

async function getJoke() {
  return await axios(
    "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single"
  ).then((res) => res.data);
}

module.exports = {
  name: "joke",
  description: "Will tell you a random joke",
  execute(message) {
    getJoke().then((res) => {
      message.reply(res.joke);
    });
  },
};
