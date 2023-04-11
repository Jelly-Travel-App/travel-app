const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// URI to connect to database
const MONGO_URI = 'mongodb+srv://garybalogh93:JnYYnDdiOA9FyzJo@cluster0.3u25ma1.mongodb.net/?retryWrites=true&w=majority';

// actual connection to the database, upon successful connection, log connected
mongoose.connect(MONGO_URI);
mongoose.connection.once('open', () => {
	console.log('Connected to the database');
});

// schema for users
const userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	currentLocation: String,
	notes: Array
});

// create a user model based off the user schema
const userModel = model('user', userSchema);

module.exports = userModel;
