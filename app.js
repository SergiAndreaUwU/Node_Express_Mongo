/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express= require('express');

const app= express();
const bookRouter= express.Router();
const port = process.env.PORT || 3000

bookRouter.route('/books')
.get((req,res)=>{
    const books= {books:[{title:"1st book"},{title:"2nd book"}]}
    res.json(books)
})

app.use('/api',bookRouter);

app.get('/',(req,res)=>{
    res.send("welcome to my Nodemon API")
})

app.listen(port,()=>{
    console.log(`Running on Port: ${port}`)
})