const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    reviewr:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    targetUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    feedback:String,
}, {timestamps:true});



const Reviews = mongoose.model("Reviews" , reviewSchema);


module.exports = Reviews;