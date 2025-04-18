const mongoose = require("mongoose");

const ConnectDataBase = () => {
    mongoose.connect(`${process.env.DB_URL}`).then((res) => {
        console.log("Database Connected To The Atlas");
    }).catch((err) => {
        console.log("Error in Database Connection" , err);
    });
};

module.exports = ConnectDataBase;