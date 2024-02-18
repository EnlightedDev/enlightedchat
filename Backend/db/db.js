import mongoose from "mongoose";


const db = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connection successful!")
    }
    catch (e) {
        console.log("Could not connect to Database!!", e)
    }
}

export default db;