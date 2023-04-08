const user = require('./userModel')

// creating the object for the middleware functions to be stored on
const userController = {};

// userController.findUser = function (req, res, next) { 
//   //query database with username
//   //if exists, next()
//   //if doesn't, 
// }

// user, pass
// signUp, createUser

userController.createUser = function (req, res, next) {
    const { username, password } = req.body
    // query database with username
    user.findOne({ username: username })
        .then((data) => {
            // if username returns a document send back an error
            if (data) {
                return next(console.log('error')) // ???????
            } else {
                // if username does not exist in DB, create a new user doc
                user.create({ username: username, password: password})
                    .then(result => {
                        `Created user: ${result}`
                        return next() 
                    })
                    // error handling when creating new user doc
                    .catch(error => { return next(console.log('Error in createUser while creating user')) })
            }
        })
        // error handling for querying DB
        .catch(error => { return next(console.log('Error in createUser while querying database')) })
}

userController.verifyUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    //query database for user
    const user = await userModel.findOne({ username: username });
    //if user does not exist
    if (user === null) {
      //return error with log and error message
      return next({log: `Middleware error at userController.verifyUser`, message: `User does not exist`})
    } else {
      //if password is incorrect
      if (user.password !== password) {
        //return error with log and error message
        return next({log: `Middleware error at userController.verifyUser`, message: `Incorrect password`})
      } else {
        //save user data on res.locals
        res.locals.user = user
        next()
      }
    }
  }
  //error handling
  catch (err) {
    return next({
      err: `Middleware error at userController.verifyUser`,
    message: err});
  }
}

