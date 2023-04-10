const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	currentLocation: String,
	notes: Array
});

const userModel = model('user', userSchema);

module.exports = userModel;
