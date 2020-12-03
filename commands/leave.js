const rules = `**If you are the last one to leave please make sure to:**

**Turn off** the :bulb: lights :point_down: :
- Main area
- Meeting room
- Kitchen
- Toilet

**Turn off the air conditioner :point_down: :**
- Kitchen only

***Lock the door with the :key: key***
`;


module.exports = {
  name: 'leave',
	description: 'What to do before leaving?',
	execute(message, args) {
		message.reply(rules);
	},
}