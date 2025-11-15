import { Router } from "express"
import { onlyAdmin } from "@/middlewares"
import { getAllUsers, getUser } from "@/domains/admin/admin.controllers"

const router = Router()

router.get("/users", onlyAdmin, getAllUsers)
router.get("/users/:username", onlyAdmin, getUser)

export default router
