/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express= require('express');

const mongoose=require('mongoose');

const app= express();
const bookRouter= express.Router();
const port = process.env.PORT || 3000

const db=mongoose.connect('mongodb://localhost/bookApi')

const Book=require('./models/bookModel')

bookRouter.route('/books')
.get((req,res)=>{
    const books= Book.find((err,books)=>{
        if(err)return res.send(err)
        
        return res.json(books)
        
        
    })
})

app.use('/api',bookRouter);

app.get('/',(req,res)=>{
    res.send("welcome to my Nodemon API")
})

app.listen(port,()=>{
    console.log(`Running on Port: ${port}`)
})