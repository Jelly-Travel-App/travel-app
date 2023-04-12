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
		// console.log('location working');
		// deconstruct the location from the request body
		//console.log('res.locals.restaurantInfo: ', res.locals.restaurantInfo, 'res.locals.eventInfo: ', res.locals.eventInfo)
		res.status(200).json({
			restaurantInfo: res.locals.restaurantInfo,
			eventInfo: res.locals.eventInfo,
		});
		// res.status(200).json(res.locals)
	}
);

module.exports = locationRouter;