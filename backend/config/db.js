const mongoose = require("mongoose");

const ConnectDataBase = () => {
    mongoose.connect(`mongodb+srv://py0504955:${process.env.DB_PASSWORD}@skilllinkr.mrkhdx4.mongodb.net/?retryWrites=true&w=majority&appName=SkillLinkr`).then((res) => {
        console.log("Database Connected To The Atlas");
    }).catch((err) => {
        console.log("Error in Database Connection" , err);
    });
};

module.exports = ConnectDataBase;