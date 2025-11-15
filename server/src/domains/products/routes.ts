import { Router } from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    editProductById,
    deleteProductById,
} from "@/domains/products/products.controllers"
import { onlyAdmin } from "@/middlewares"

const router = Router()

router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.patch("/:id", onlyAdmin, editProductById)
router.delete("/:id", onlyAdmin, deleteProductById)
router.post("/", onlyAdmin, createProduct)

export default router
