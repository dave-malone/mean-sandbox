var express        = require('express');
var Person         = require('./models/Person');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/src/index.html');
	});

	var router = express.Router(); 	// get an instance of the express Router

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});

	// more routes for our API will happen here

	// on routes that end in /person
	// ----------------------------------------------------
	router.route('/person')

		// create a person (accessed at POST http://localhost:8080/api/person)
		.post(function(req, res) {
			var person = new Person(); 		// create a new instance of the Person model
			person.name = req.body.name;  // set the person name (comes from the request)

			// save the person and check for errors
			person.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Created Person ' + person.name });
			});
		})

		// get all the people (accessed at GET http://localhost:8080/api/person)
		.get(function(req, res) {
			Person.find(function(err, people) {
				if (err)
					res.send(err);

				res.json(people);
			});
		});

	// on routes that end in /person/:person_id
	// ----------------------------------------------------
	router.route('/person/:person_id')

		// get the person with that id (accessed at GET http://localhost:8080/api/person/:person_id)
		.get(function(req, res) {
			Person.findById(req.params.person_id, function(err, person) {
				if (err)
					res.send(err);
				res.json(person);
			});
		})

		// update the person with this id (accessed at PUT http://localhost:8080/api/person/:person_id)
		.put(function(req, res) {

			// use our person model to find the person we want
			Person.findById(req.params.person_id, function(err, person) {

				if (err)
					res.send(err);

				person.name = req.body.name; 	// update the persons info

				// save the person
				person.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'Updated Person ' + person.name});
				});

			});
		})

		// delete the person with this id (accessed at DELETE http://localhost:8080/api/person/:person_id)
		.delete(function(req, res) {
			Person.remove({
				_id: req.params.person_id
			}, function(err, person) {
				if (err)
					res.send(err);

				res.json({ message: 'Deleted Person with ID ' + req.params.person_id});
			});
		});


	// REGISTER OUR ROUTES -------------------------------
	// all of our routes will be prefixed with /api
	app.use('/api', router);
};