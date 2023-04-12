const user = require('../models/userModel');
// creating the object for the middleware functions to be stored on
const userController = {};

userController.createUser = function (req, res, next) {
	const { username, password } = req.body;
	// query database with username
	user
		.findOne({ username: username })
		.then((data) => {
			// if username returns a document send back an error
			if (data) {
				// allow the front end to check locals.user to equal false, signaling a username already exists
				res.locals.user = false;
				return next();
			} else {
				// if username does not exist in DB, create a new user doc
				user
					.create({ username: username, password: password })
					.then((result) => {
						// console.log for testing purposes
						console.log(`Created user: ${result}`);
						// send the created user doc to the front end to be parsed and used
						res.locals.user = result;
						return next();
					})
					// error handling when creating new user doc
					.catch((error) => {
						return next({
							log: 'Middleware error at userController.createuser1',
							message: 'Username already exists',
						});
					});
			}
		})
		// error handling for querying DB
		.catch((error) => {
			return next({
				log: 'Middleware error at userControler.createUser2',
				message: 'Error querying database',
			});
		});
};

userController.verifyUser = function (req, res, next) {
	const { username, password } = req.body;
	console.log('made it into verification')
	//query database for user
	user
		.findOne({ username: username })
		.then((user) => {
			//if user doesn't exist or password is incorrect
			console.log('user ', user);
			if (user === null || user.password !== password) {
				//return false on res.locals
				res.locals.user = false;
				console.log('user not found')
				return next();
			} else {
				//successful login
				res.locals.user = user;
				console.log('user found')
				return next();
			}
		})
		//database error handling
		.catch((err) => {
			return next({
				err: `Middleware error at userController.verifyUser`,
				message: err,
			});
		});
};

userController.addNote = function (req, res, next) {
	console.log(req.body, 'req body')
	const { username, note } = req.body;
	user
		.findOneAndUpdate(
			{ username: username },
			{ $push: { notes: note } },
			{ new: true }
		)
		.then((result) => {
			console.log('result ', result);
			res.locals.notes = result.notes
			return next();
		});
};

module.exports = userController;
