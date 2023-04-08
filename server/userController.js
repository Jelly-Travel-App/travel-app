const user = require('./userModel');
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
							log: 'Middleware error at userController.createuser',
							message: 'Username already exists',
						});
					});
			}
		})
		// error handling for querying DB
		.catch((error) => {
			return next({
				log: 'Middleware error at userControler.createUser',
				message: 'Error querying database',
			});
		});
};

userController.verifyUser = function (req, res, next) {
	const { username, password } = req.body;
	//query database for user
	user
		.findOne({ username: username })
		.then((user) => {
			//if user doesn't exist or password is incorrect
			if (user === null || user.password !== password) {
				//return false on res.locals
				res.locals.user = false;
				return next();
			} else {
				//successful login
				res.locals.user = user;
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
	const { username, note } = req.body;
	user
		.updateOne({ username: username }, { $push: { notes: note } })
		.then((result) => {
			console.log('result ', result);
			return next();
		});
};

module.exports = userController;
