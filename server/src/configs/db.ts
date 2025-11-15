import mongoose from "mongoose"
import * as process from "node:process"

// const uri: string = `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@clusterzero.04dcbwy.mongodb.net/${process.env.MONGODB_NAME}?appName=ClusterZero`

const db_uri: string | undefined = process.env.MONGO_URI

if (!db_uri) {
    throw new Error("MONGO_URI is not defined.")
}

const clientOptions = {
    serverApi: { version: "1" as const, strict: true, deprecationErrors: true },
}

export const connectDB = async () => {
    try {
        await mongoose.connect(db_uri, clientOptions)
        console.log("✅ Connected to MongoDB")
    } catch (error) {
        console.error("❌ MongoDB connection error:", error)
    }
}
