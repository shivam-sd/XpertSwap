const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
  
    skillyouoffre:{
        type:String
    },
    skillyouwant:{
        type:String
    },
   
    bio: String,
    // location:{
    //     type:{
    //         type:String,
    //         enum:["Point"],
    //         default: "Point"
    //     },
    //     coordinates:{
    //         type:[Number], //[longitude , lattitude]
    //         required:true
    //     },
    // },
    rating:{
        type:Number,
        default:0,
    },
    profilePic:{
        type:String,
        default: "",
    },
    status:{
        type:String,
        enum:["active","inactive","pending"],
        default:"active"
    },
    // image: {
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //   },
}, {timestamps:true});


userSchema.index({location: "2dsphere"});

const UserModel = mongoose.model("User" , userSchema);


module.exports = UserModel;