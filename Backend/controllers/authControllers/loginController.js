import User from "../../models/userModel.js"
import bcryptjs from "bcryptjs" 
import generateToken from "../../utils/generateToken.js";


export const Login = async (req, res) => {

    try {
        console.log("Hello")
        const {
            phoneNumber,
            password
         } = req.body

        const user = await User.findOne({phoneNumber})

        if(user) {

            if(await bcryptjs.compare(password, user.password)) {
                
                generateToken(user._id, res)
                res.status(201).json({
                    message: "Login Succesfull!",
                    _id: user._id,
                    displayName: user.displayName,
                    phoneNumber: user.phoneNumber,
                    displayPic: user.displayPic
                })

            } else {

                res.status(400).json({
                    message: "Incorrect Password!"
                })

            }

        } else {

            res.status(400).json({
                message: "User not found with this Phone Number!"
            })

        }

    } catch(e) {

        res.status(500).json({
            error: `Could not Login because ${e}`
        })

    }
    

}