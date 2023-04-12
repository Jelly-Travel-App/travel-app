const bcrypt = require('bcrypt');
const saltRounds = 10;
const user = require('../models/userModel');

// object for user middleware
const userController = {};

// create user
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
				// if username does not exist in DB, create a new user doc with hashed password
				bcrypt.hash(password, saltRounds, (err, hash) => {
					user.create({ username: username, password: hash})
						.then(result => {
							console.log(`Created user: ${result}`);
							// send back created user
							res.locals.user = result;
							return next();
						})
						.catch((err) => {
							return next({
								log: 'Middleware error at userController.createUser',
								message: 'Unable to create user',
							});
						});
				});
			}
		})
		// error handling for querying DB
		.catch((err) => {
			return next({
				log: 'Middleware error at userControler.createUser',
				message: 'Error querying database',
			});
		});
};

userController.verifyUser = function (req, res, next) {
	const { username, password } = req.body;
	if (!username || !password){
		return next({
			log: `Server could not complete request error, invalid login`,
			message: 'Error querying database for username',
		});
	}
	console.log('made it into verification')
	//query database for user
	user
		.findOne({ username: username })
		.then(user => {
			//if user doesn't exist or password is incorrect
			console.log('user ', user);
			if (user === null) {
				//return false on res.locals
				res.locals.user = false;
				console.log('user not found')
				return next();
			} else {
				// username exists, compare password
				bcrypt.compare(password, user.password)
					.then(result => {
						if (result) {
							res.locals.user = user;
							return next();
						}
						res.locals.user = false;
						return next();
					});
			}
		})
		//database error handling
		.catch(error => {
			return next({
				log: `Middleware error at userController.verifyUser`,
				message: 'Error querying database for username',
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
