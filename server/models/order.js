var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name: String,
	qty: Number,
	orderedItem: String
});

var ItemSchema = new mongoose.Schema({
	name: String
});

mongoose.model('Order', OrderSchema);
mongoose.model('Item', ItemSchema);