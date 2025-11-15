import mongoose from "mongoose"
import * as process from "node:process"

const isProd = process.env.NODE_ENV === "production"
const DB_URI = isProd ? process.env.MONGO_URI : process.env.MONGO_URI_DEV

if (!DB_URI) {
    throw new Error("MONGO_URI is not defined.")
}

const clientOptions = {
    serverApi: { version: "1" as const, strict: true, deprecationErrors: true },
}

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, clientOptions)
        console.log("✅ Connected to MongoDB")
    } catch (error) {
        console.error("❌ MongoDB connection error:", error)
    }
}
