const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		 type: String,
		 minlength: [3, "title must be at least 3 characters"],
	},	 
	price: {
		type: String,
		required: true
	},
	description: {
		type: String
	}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;