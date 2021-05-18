const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAll);
  app.get("/api/jokes/:id", JokeController.findOne);
  app.put("/api/jokes/update/:id", JokeController.update);
  app.post("/api/jokes/new", JokeController.create);
  app.delete("/api/jokes/delete/:id", JokeController.delete);
};