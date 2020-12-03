const { HOLIDAY } = require("../util/config");
const axios = require("axios");
const dayjs = require("dayjs");

const date = new Date().getMonth();

async function getHolidays(pubHoliday = false) {
  return await axios
    .get(
      `https://holidayapi.com/v1/holidays?key=${HOLIDAY}&country=MK&year=2019&month=${
        date + 1
      }&public=${pubHoliday}`
    )
    .then((res) => res.data.holidays);
}

const formatData = (items) => {
  return items.map((item) => {
    return `${dayjs(item.date).format("DD ddd")} ---- **${item.name}**`;
  });
};

module.exports = {
  name: "holidays",
  description:
    "Get a list of all holidays or type **/holidays public** to get a list of public holidays only",
  execute(message, args) {
    let publicHoliday = args[0];

    if (publicHoliday === "public") {
      getHolidays(true).then((res) => {
        message.reply(`**Public Holidays** for this month:`);
        message.channel.send(formatData(res));
      });
    } else {
      getHolidays().then((res) => {
        message.reply(`**Holidays** for this month:`);

        message.channel.send(formatData(res));
      });
    }
  },
};
