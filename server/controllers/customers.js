var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
		
		addCustomer: function(req, res) {
			// console.log(req.body);
			var customers = new Customer(req.body);
			customers.save(function(err){
				if(err){
					console.log(err);
				} else {
					res.json({response: "It worked!"});
				}
			});
		}
	}
})();