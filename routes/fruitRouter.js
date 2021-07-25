const express = require("express");

function routes(Fruit) {

const fruitRouter = express.Router();

  fruitRouter
    .route("/fruits")
    .post((req, res) => {
      const fruit = new Fruit(req.body);

      console.log(fruit);
      fruit.save();
      return res.status(201).json(fruit);
    })
    .get((req, res) => {
      const query = {};
      Fruit.find(query, (err, fruits) => {
        if (err) return res.send(err);

        return res.json(fruits);
      });
    });

  fruitRouter.route("/fruits/:id").get((req, res) => {
    Fruit.findById(req.params.id, (err, fruit) => {
      if (err) return res.send(err);
      return res.json(fruit);
    });
  });

  return fruitRouter
}

module.exports = routes;
