var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var bodyParser = require('body-parser');

module.exports = function(app){
	app.use(bodyParser.json());
	app.get('/customersRoute', function(req, res){
		customers.show(req, res);
	});

	app.get('/ordersRoute', function(req, res){
		orders.show(req, res);
	});

	app.get('/itemsRoute', function(req, res){
		orders.showItems(req, res);
	});

	app.post('/addCustomer', function(req, res){
		customers.addCustomer(req, res);
	})
};