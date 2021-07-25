"use strict";
const mongoose= require('mongoose');

const {Schema}=mongoose;

const fruitModel= new Schema(
    {
        title:{type:String},
        description:{type:String},
        category:{type:String},
        image:{type:String},
        created_at:{type:Date}

}
);

module.exports= mongoose.model('Fruit',fruitModel);