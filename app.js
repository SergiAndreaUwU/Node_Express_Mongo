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
const Fruit = require("./models/fruitModel");


const bookRouter = require("./routes/bookRouter")(Book);

const fruitRouter= require("./routes/fruitRouter")(Fruit);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express.json()
// express.urlencoded()

app.use("/api", bookRouter);
app.use("/api", fruitRouter);




app.get("/", (req, res) => {
  res.send("welcome to my Nodemon API");
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
