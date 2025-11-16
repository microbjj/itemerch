import { Router } from "express"
import { onlyAdmin } from "@/middlewares"
import { deleteUser, editUser, getAllUsers, getUser } from "@/domains/admin/admin.controllers"

const router = Router()

router.get("/users", onlyAdmin, getAllUsers)
router.get("/users/:username", onlyAdmin, getUser)
router.patch("/users/:username/edit", onlyAdmin, editUser)
router.delete("/users/:username", onlyAdmin, deleteUser)

export default router
