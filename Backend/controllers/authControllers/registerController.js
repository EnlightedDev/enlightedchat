import User from "../../models/userModel.js"
import bcryptjs from "bcryptjs" 
import generateToken from "../../utils/generateToken.js";


export const Register = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            displayName,
            password,
            confirmPassword,
            phoneNumber
        } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({
                error : "Uh Oh! Password and Confirm Password do not match"
            })
        }

        const user = await User.findOne({phoneNumber})

        if(user) {
            return res.status(400).json({
                error: "Uh Oh! Profile already exists with this phoneNumber, Please try to Login!"
            })
        }

        const saltForHash = await bcryptjs.genSalt(10);
        const hashed = await bcryptjs.hash(password, saltForHash);

        const newUser = new User({

            firstName,
            lastName,
            displayName,
            password: hashed,
            phoneNumber,
            displayPic : `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`

        })
        
        if(newUser) {

            generateToken(newUser._id, res)

            await newUser.save()
            
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                displayName: newUser.displayName,
                phoneNumber: newUser.phoneNumber,
                displayPic: newUser.displayPic
            })
        } else {
            res.status(400).json({
                error: "Invalid User Data!"
            })
        }

    } catch(e) {

        res.status(500).json({
            error: `Could not save profile! Register Failed beacause ${e}`
        })

    }
    

}