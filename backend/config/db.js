const mongoose = require("mongoose");

const ConnectDataBase = () => {
    mongoose.connect(`${process.env.MONGO_URI}`).then((res) => {
        console.log("Database Connected To The Atlas");
    }).catch((err) => {
        console.log("Error in Database Connection" , err);
    });
};

module.exports = ConnectDataBase;