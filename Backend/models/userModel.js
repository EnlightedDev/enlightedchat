import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {

    firstName : {
        type: String,
        required: true
    },

    lastName : {
        type: String,
        required: true
    },

    displayName : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true,
        minlength: 8
    },

    phoneNumber : {
        type: String,
        required:true,
        unique: true
    },

    displayPic : {
        type: String,
        defualt: ""
    }

}, {timestamps: true})


const User = mongoose.model("User", userSchema);

export default User;