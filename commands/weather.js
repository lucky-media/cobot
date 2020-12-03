const { WEATHER } = require("../util/config");
const axios = require("axios");

const URL = `https://api.weatherbit.io/v2.0/current?city=gostivar&country=macedonia&key=${WEATHER}`;

async function getWeather() {
  return await axios.get(URL).then((res) => {
    return {
      desc: res.data.data[0].weather.description,
      temp: res.data.data[0].temp,
    };
  });
}

module.exports = {
  name: "weather",
  description: "Current weather in Gostivar",
  execute(message) {
    getWeather().then((res) => {
      message.reply(
        `Current weather as of now in Gostivar is: :cloud: **${res.desc}** with a temperature of **${res.temp}°**`
      );
    });
  },
};
