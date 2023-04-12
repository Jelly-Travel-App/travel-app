const express = require('express');
const locationRouter = express.Router();
const locationController = require('../controllers/locationController');

//YELP API
// /api/location, method: POST
locationRouter.post(
	'/:location',
	locationController.getRestaurants,
	(req, res) => {
		res.status(200).json({
			restaurantInfo: res.locals.restaurantInfo
		});
	}
);

module.exports = locationRouter;