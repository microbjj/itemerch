import { Router } from "express"
import authRoutes from "@/domains/auth/routes"
import userRoutes from "@/domains/user/routes"
import adminRoutes from "@/domains/admin/routes"
import productsRoutes from "@/domains/products/routes"

const router = Router()

router.use("/auth", authRoutes)
router.use("/user", userRoutes)
router.use("/admin", adminRoutes)
router.use("/products", productsRoutes)

export default router
