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
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=resturants&sort_by=best_match&limit=3`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
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
			message: 'Error fetching API data',
    	});
	}
};

module.exports = locationController;
