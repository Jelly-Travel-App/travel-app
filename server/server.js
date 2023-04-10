const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
// URI to connect to the database
const URI =
	'mongodb+srv://JellyDev:jellytime@jelly-travel-app.yjivwqz.mongodb.net/?retryWrites=true&w=majority';
const userController = require('./userController');
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
	res.sendStatus(200);
});

//YELP API
// /api/location, method: POST
app.post('/api/:location', (req, res) => {
	// console.log('location working');
	// deconstruct the location from the request body
	const { location } = req.params;
	// specify the type of request
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer OmgJFQk8VBZfv0zC6St4qG5X1zfA694YbdWZlvFmF09GAU9vSgR56VG0g7FpjJf2XHGqO6kfeypyDcrKMkLMo_CzP4ED7v9XXodQazsa_YYnXIpy-kRkjs9z-DE0ZHYx',
		},
	};

	fetch(
		`https://api.yelp.com/v3/businesses/search?location=${location}&term=resturants&sort_by=best_match&limit=3`,
		options
	)
		// parse the response data
		.then((response) => response.json())
		// receive tha parsed data
		.then((data) => {
			// create a new array of objects containing only the information we want to display
			console.log(data)
			const locationInfo = data.businesses.map((obj) => {
				return {
					name: obj.name,
					image: obj.image_url,
					review_count: obj.review_count,
					rating: obj.rating,
					address: obj.location.display_address[0],
					price: obj.price,
				};
			});
			console.log(locationInfo);
			res.status(200).json(locationInfo);
		})
		.catch((err) => console.log(err));
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
