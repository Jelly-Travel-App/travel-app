const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../client/.App");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });


//   app.post('/api/login', userController.verifyUser, (req, res) => {
// 	console.log('login working');
// 	res.status(200).json(res.locals.user);
// });


