const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    tag:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        enum:["Tech" , "Music" , "Creative" , "Photoghraphy"],
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
} , {timestamps:true});


const skillModel = mongoose.model("Skill", skillSchema);


module.exports = skillModel;