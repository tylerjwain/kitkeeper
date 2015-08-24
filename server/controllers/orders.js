var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Item = mongoose.model('Item');

module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		showItems: function(req, res) {
			Item.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		}
	}
})();