## CoBot

CoBot is a Discord bot we use internally for CoWork.

Commands start with the prefix `!`

List of available commands here:
- `!advise` - Will display a random advice
- `!assist` - Assist command for CoWork
- `!help` - Displays a list of available commands
- `!holidays`: Displays a list of holidays for the current  month in Macedonia
- `!joke` - Displays a random joke
- `!leave` - Stuff to do before leaving CoWork
- `!ping` - Will return pong
- `!pong` - Will return ping
- `!rules` - Will return the channel for rules
- `!schedule` - Will return the schedule at CoWork Gostivar
- `!weather` - Will display the current weather in Gostivar

## How to use

In order to use the Bot you will have to obtain a key for Weather API and Holidays Api.
For weather we use [WeatherBit](https://www.weatherbit.io/), its free to use.
For holidays we use [HolidaysApi](https://holidayapi.com/), also free to use.

Make sure to place your keys on a `.env` file and also there is the `config.json.example` which is used in Heroku.

For hosting we use Heroku and there is already a `Procfile`.

## Installation
First install the required packages with:

```bash
npm install
```

And then to start the bot use the following command:
```bash
npm run start
```

## Learn More

To learn more about Discord.js please look at the folowing resources:

- [Discord.JS](https://discord.js.org/)
- [WeatherBit](https://www.weatherbit.io/api/weather-current)
- [HolidaysApi](https://holidayapi.com/docs)