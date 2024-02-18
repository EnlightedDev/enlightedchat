import express from "express"
import dotenv from "dotenv"
import db from "./db/db.js"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  db();
  console.log(`Server is running on port ${PORT}`);
});
