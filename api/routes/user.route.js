import express from "express";
import { fn } from "../controllers/user.controller.js";
// import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();
router.get("/test", fn);

// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;