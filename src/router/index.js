import { Router } from "express";
import productRoutes from "./productRoutes.js";
import authRouter from "./authRouters.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/auth", authRouter);

export default router;
