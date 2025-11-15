import "dotenv/config"
import app from "./server"
import { connectDB } from "./configs"

const PORT = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log(`🚀 Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error("❌ Failed to start server:", error)
        process.exit(1)
    }
}

void startServer()
