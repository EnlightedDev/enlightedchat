import User from "../../models/userModel.js"

export const getUsers = async (req, res) => {

    try {

        const currentUser = req.user._id

        const allUsers = await User.find({
            _id: {$ne: currentUser}
        })

        res.status(200).json(allUsers)
        
    } catch (e) {
        
        res.status(500).json({
            error: `Internal Server Error Due to ${e}`
        })

    }

}