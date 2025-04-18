const UserModel = require("../model/user.model");

const AllUsersController = async (req,res) => {
    try{
        const allUsers = await UserModel.find();
        res.status(200).json({message:"All Users" , allUsers});
    }catch(err){
        console.log("Error In Fetching All Users" , err);
        res.status(500).json({error:err.message});
    }
}


module.exports = AllUsersController;