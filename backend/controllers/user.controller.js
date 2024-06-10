import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res)=>{

    try{
        const loggedInUserId = req.user._id;
        const fitleredUsers = await User.find({ _id: {$ne : loggedInUserId}}).select("-password")
        res.status(200).json(fitleredUsers);
    }catch(error){
        console.error("Error in getUserForSidebar : ", error.message)
        res.status(500).json({ error: "Internal Server Error"});
    }
}