import express from "express"
import dotenv from "dotenv"
import db from "./db/db.js"
import authRoutes from "./routes/authRoutes.js"


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  db();
  console.log(`Server is running on port ${PORT}`);
});
