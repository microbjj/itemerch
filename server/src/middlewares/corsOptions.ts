import { CorsOptions } from "cors"

const devOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"]
const prodOrigins = [
    "https://getonlyneed.ru",
    "https://www.getonlyneed.ru",
    "http://getonlyneed.ru",
    "http://www.getonlyneed.ru",
]

export const getCorsOptions = (): CorsOptions => {
    const isProd = process.env.NODE_ENV === "production"

    return {
        origin: isProd ? prodOrigins : devOrigins,
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }
}
