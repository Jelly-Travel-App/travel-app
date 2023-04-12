const express = require('express');
const locationRouter = express.Router();
const locationController = require('../controllers/locationController');

//YELP API
// /api/location, method: POST
locationRouter.post(
	'/:location',
	locationController.getRestaurants,
	locationController.getEvents,
	(req, res) => {
		res.status(200).json({
			restaurantInfo: res.locals.restaurantInfo,
			eventInfo: res.locals.eventInfo,
		});
	}
);

module.exports = locationRouter;