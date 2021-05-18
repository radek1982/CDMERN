const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: Number
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;