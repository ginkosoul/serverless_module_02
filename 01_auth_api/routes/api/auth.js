import { Router } from "express";
import { signIn, signUp } from "../../controller/auth.js";

const router = Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);

export default router;
