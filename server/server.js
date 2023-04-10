const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
// URI to connect to the database
const URI =
	'mongodb+srv://JellyDev:jellytime@jelly-travel-app.yjivwqz.mongodb.net/?retryWrites=true&w=majority';
const userController = require('./userController');
const locationController = require('./locationController');
// actual connection to the database, upon successful connection, log connected
mongoose.connect(URI);
mongoose.connection.once('open', () => {
	console.log('Connected to the database');
});

// parse all incoming requests
app.use(express.json());
// parses incoming requests with urlencoded payloads? better definition needed
app.use(express.urlencoded({ extended: true }));

//user login
app.post('/api/login', userController.verifyUser, (req, res) => {
	console.log('login working');
	res.status(200).json(res.locals.user);
});

//user sign-up
app.post('/api/signup', userController.createUser, (req, res) => {
	console.log('signup working');
	res.status(200).json(res.locals.user);
});

// notes

app.post('/api/notes', userController.addNote, (req, res) => {
	res.status(200).json(res.locals.notes);
});

//YELP API
// /api/location, method: POST
app.post(
	'/api/location/:location',
	locationController.getRestaurants,
	locationController.getEvents,
	(req, res) => {
		// console.log('location working');
		// deconstruct the location from the request body
		res.status(200).json({
			restaurantInfo: res.locals.restaurantInfo,
			eventInfo: res.locals.eventInfo,
		});
	}
);

// handles requests to unknown routes
// add better error?
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

// once connection to server is established, log successful connection
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
