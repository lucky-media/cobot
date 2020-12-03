module.exports = {
  name: "schedule",
  description: "CoWork opening hours",
  execute(message) {
    message.reply(
      "although CoWork is open 24/7, our official hours are from 09:00 to 17:00"
    );
  },
};
