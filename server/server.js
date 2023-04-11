const express = require('express');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/userRouter');
const locationRouter = require('./routes/locationRouter')
const mongoose = require('mongoose');
// URI to connect to the database
const URI =
	'mongodb+srv://JellyDev:jellytime@jelly-travel-app.yjivwqz.mongodb.net/?retryWrites=true&w=majority';
const userController = require('./controllers/userController');
const locationController = require('./controllers/locationController');
// actual connection to the database, upon successful connection, log connected
mongoose.connect(URI);
mongoose.connection.once('open', () => {
	console.log('Connected to the database');
});

// Parse all incoming requests for json and url encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers: Login, Signup, and Location paths
app.use('/user', userRouter);
app.use('/location', locationRouter);

// Handles requests to unknown routes
app.use((req, res) => res.status(404).send(`The page you requested could not be found. Please check the URL for any errors and try again.`));

// Global error handler
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

// Once connection to server is established, log successful connection
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
