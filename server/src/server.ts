import express from "express"
import routes from "@/routes/routes"
import { setupMiddlewares } from "./middlewares"

const app = express()

// Middlewares
setupMiddlewares(app)

// Routes
app.use("/api", routes)

export default app
