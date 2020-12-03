let config;

require("dotenv").config();

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.WEATHER = config ? config.WEATHER : process.env.WEATHER;
exports.HOLIDAY = config ? config.HOLIDAY : process.env.HOLIDAY;
