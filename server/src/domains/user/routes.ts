import { Router } from "express"
import { authRequest, passwordUpdateValidation } from "@/middlewares"
import {
    profile,
    updatePassword,
    updateUser,
    setFavorites,
    getFavoritesProducts,
} from "@/domains/user/user.controllers"

const router = Router()

router.get("/profile", authRequest, profile)
router.post("/update", authRequest, updateUser)
router.post("/update/password", authRequest, passwordUpdateValidation, updatePassword)
router.get("/favorites", authRequest, getFavoritesProducts)
router.post("/favorites/:id", authRequest, setFavorites)

export default router
