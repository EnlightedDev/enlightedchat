export const Logout = (req, res) => {

    try {
        
        res.cookie("jwt", "", {maxAge: 0})
        res.status(201).json({
            message: "Logged out successfully!"
        })

    } catch (error) {

        res.status(500).json({
            error: `Could not Logout because ${e}`
        })

    }


}