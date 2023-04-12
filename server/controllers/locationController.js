const locationController = {};

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer OmgJFQk8VBZfv0zC6St4qG5X1zfA694YbdWZlvFmF09GAU9vSgR56VG0g7FpjJf2XHGqO6kfeypyDcrKMkLMo_CzP4ED7v9XXodQazsa_YYnXIpy-kRkjs9z-DE0ZHYx',
	},
};

locationController.getRestaurants = async function (req, res, next) {
	try {
		const { location } = req.params;
		//fetch data from API with location input and options request
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=resturants&sort_by=best_match&limit=3`,
			options
		);
		const data = await response.json();
		// map data based on options selected
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.restaurantInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
      		log: 'Middleware error at locationController.getRestaurants',
      		message: 'Error fetching API data.',
    	});
	}     
};

locationController.getEvents = function (req, res, next) {
	const { location } = req.params;
	// send request to YELP API's event info
	fetch(
		`https://api.yelp.com/v3/events?limit=3&sort_by=desc&sort_on=popularity&location=${location}&start_date=1681144462`,
		options
	)
		// parse the response data
		.then((response) => response.json())
		.then((data) => {
			// create a new array of objects containing only the information we want to display
			const locationInfo = data.events.map((obj) => {
				return {
					name: obj.name,
					image: obj.image_url,
					address: obj.location.display_address[0],
					is_free: obj.is_free,
					description: obj.description,
				};
			});
			// save the info into locals to be sent back to the front
			res.locals.eventInfo = locationInfo;
			return next();
		})
		.catch((err) => {
			return next(err);
		});
};

module.exports = locationController;
