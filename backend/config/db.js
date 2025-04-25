const mongoose = require("mongoose");


// for production

const ConnectDataBase = () => {
    // console.log("Mongo URI:", process.env.MONGO_URI); // Debug line

    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database Connected To The Atlas"))
        .catch((err) => console.log("Error in Database Connection", err));
};

module.exports = ConnectDataBase;



// for localhost


// const ConnectDataBase = () => {
//     mongoose.connect(`${process.env.MONGO_URI}`).then((res) => {
//         console.log("Database Connected To The Atlas");
//     }).catch((err) => {
//         console.log("Error in Database Connection" , err);
//     });
// };

// module.exports = ConnectDataBase;