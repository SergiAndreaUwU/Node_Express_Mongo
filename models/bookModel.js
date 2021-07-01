"use strict";
const mongoose= require('mongoose');

const {Schema}=mongoose;

const bookModel= new Schema(
    {
        title:{type:String},
        author:{type:String},
        genre:{type:String},
        read:{type:Boolean},
        pages:{type:Number}
}
);

module.exports= mongoose.model('Book',bookModel);