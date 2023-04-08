const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
// URI to connect to the database
const URI =
	'mongodb+srv://JellyDev:jellytime@jelly-travel-app.yjivwqz.mongodb.net/?retryWrites=true&w=majority';

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
app.post('/api/login', (req, res) => {
	console.log('login working');
	res.sendStatus(200);
});

//user sign-up
app.post('/api/signup', (req, res) => {
	console.log('signup working');
	res.sendStatus(200);
});

//YELP API
// /api/location, method: POST
app.post('/api/location', (req, res) => {
	console.log('location working');
	res.sendStatus(200);
});

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
