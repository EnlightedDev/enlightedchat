import express from "express";
import { sendMessage } from "../controllers/messageControllers/sendMessageController.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { getMessage } from "../controllers/messageControllers/getMessageController.js";


const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage)
router.get("/:id", protectRoute, getMessage)

export default router;