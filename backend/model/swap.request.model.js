const mongoose = require("mongoose");

const swapRequestSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    skillOffered:{
        type:String,
        required:true
    },
    skillWanted:{
        type:String,
        required:true
    },
    dateRequestd:{
        type: Date,
        default: Date.now,
    },
    timeSlot:String,

    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
    },
}, {timestamps: true});


const skillRequest = mongoose.model("SkillRequest" , swapRequestSchema);


module.exports = skillRequest;