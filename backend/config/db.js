const mongoose = require("mongoose");

const ConnectDataBase = () => {
    console.log("Connecting to DB:", process.env.MONGO_URI); // For debug
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database Connected To The Atlas");
        })
        .catch((err) => {
            console.log("Error in Database Connection", err);
        });
};

module.exports = ConnectDataBase;
