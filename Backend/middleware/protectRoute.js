import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const protectRoute = async (req, res, next) => {

    try {

        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({
                error:"Unauthorized"
            })
        }

        const decoded = jwt.verify(token, process.env.SECRET)

        if(!decoded) {
            return res.status(401).json({
                error:"Unauthorized - Invalid Token"
            })
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user) {
            res.status(404).json({
                error: "User Not Found"
            })
        }

        req.user = user

        next();

    } catch(e) {

    }

}
