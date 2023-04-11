const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

//User Login Route
userRouter.post('/api/login', userController.verifyUser, (req, res) => {
	console.log('login working');
	res.status(200).json(res.locals.user);
});

//User Sign-Up Route
userRouter.post('/api/signup', userController.createUser, (req, res) => {
	console.log('signup working');
	res.status(200).json(res.locals.user);
});

//Notes Route
userRouter.post('/api/notes', userController.addNote, (req, res) => {
	res.status(200).json(res.locals.notes);
});


module.exports = userRouter;