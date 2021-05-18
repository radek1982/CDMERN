const Product = require("../models/product.model");

module.exports.findAll = (req, res) => {
  Product.find()
    .then(allProducts => res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOne = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneProduct => res.json({ product: oneProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.create = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.json({ product: newProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.update = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.delete = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
