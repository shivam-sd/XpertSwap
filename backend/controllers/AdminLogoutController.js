const AdminLogoutController = (req,res) => {
    try{
        res.clearCookie("AdminToken" , {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        });

        res.status(200).json({message:"Logged out success"});

    }catch(err){
        console.log("Error In Admin Logut" , err);
        res.sattus(500).json({error:err.message});
    }
}



module.exports = AdminLogoutController;