/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");

const mongoose = require("mongoose");

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const db = mongoose.connect("mongodb://localhost/bookApi");

const Book = require("./models/bookModel");

const api= require("./api_call_test/api_insertBook")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

bookRouter
  .route("/books")
  .post((req, res) => {
    const book = new Book(req.body);

    console.log(book)
    return res.json(book)
  })
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) return res.send(err);

      return res.json(books);
    });
  });

bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) return res.send(err);
    return res.json(book);
  });
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("welcome to my Nodemon API");
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
