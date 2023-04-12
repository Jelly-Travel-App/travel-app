const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/userModel');

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
          .catch((error) => {
            return next({
              log: 'Middleware error at userController.createUser',
              message: 'Unable to create user',
            });
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

userController.verifyUser = async function (req, res, next) {
	const { username, password } = req.body;
	
	try {
		//query database for user
		const user = await User.findOne({ username: username })	
			console.log('user:', user);
			if (!user) {
				res.locals.user = false;
				return next();
			} 
			// username exists, compare password
			const passwordMatch = await bcrypt.compare(password, user.password)
			if (passwordMatch) {
				res.locals.user = user;
				return next();
			} else {
			res.locals.user = false;
			return next();
			}
	} catch (error) {
		return next({
			log: `Middleware error at userController.verifyUser`,
			message: 'Error verifying that user is stored in the database.',
		});
	}
};

module.exports = userController;
