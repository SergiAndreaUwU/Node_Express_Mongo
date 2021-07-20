/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");

const mongoose = require("mongoose");

const cors= require("cors")
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const db = mongoose.connect("mongodb://localhost/bookApi");

const Book = require("./models/bookModel");

const bookRouter = require("./routes/bookRouter")(Book);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express.json()
// express.urlencoded()

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("welcome to my Nodemon API");
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
