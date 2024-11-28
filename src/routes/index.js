import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.js";

const router = Router();

router.post("/auth/login", loginController);
router.post("/auth/register", registerController);

export default router;
