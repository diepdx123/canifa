import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { authSchema } from "../validSchema/authSchema.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(authSchema), register);
authRouter.post("/login", validBodyRequest(authSchema), login);

export default authRouter;
