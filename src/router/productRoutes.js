import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductsById,
  removeProductById,
  updateProductById,
} from "../controllers/Product.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { productSchema } from "../validSchema/ProductSchema.js";

const productRoutes = Router();

productRoutes.get("/", getAllProducts);
productRoutes.post("/:id", getProductsById);

//admin
productRoutes.post("/", validBodyRequest(productSchema), createProduct);
productRoutes.patch("/:id", validBodyRequest(productSchema), updateProductById);
productRoutes.delete("/:id", removeProductById);

export default productRoutes;
