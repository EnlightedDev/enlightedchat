import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {

    const jwtToken = jwt.sign({userId}, process.env.SECRET, {
        expiresIn: "2d"
    })

    res.cookie("jwt", jwtToken, {
        maxAge: 172800000,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateToken;