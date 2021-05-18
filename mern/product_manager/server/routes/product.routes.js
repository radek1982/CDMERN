const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/products/", ProductController.findAll);
  app.get("/api/products/:id", ProductController.findOne);
  app.put("/api/products/update/:id", ProductController.update);
  app.post("/api/products/new", ProductController.create);
  app.delete("/api/products/delete/:id", ProductController.delete);
};