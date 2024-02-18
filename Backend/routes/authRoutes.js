import express from "express";

import {Login} from "../controllers/authControllers/loginController.js"
import {Register} from "../controllers/authControllers/registerController.js"
import {Logout} from "../controllers/authControllers/logoutController.js"

const router = express.Router();


router.post("/login", Login)
router.post("/register", Register)
router.post("/logout", Logout)

export default router;