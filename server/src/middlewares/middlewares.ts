import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { getCorsOptions } from "@/middlewares"

export const setupMiddlewares = (app: express.Application) => {
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors(getCorsOptions()))
    app.use(express.urlencoded({ extended: true }))
}
