import jwt, { JwtPayload } from "jsonwebtoken"

export interface AuthPayload extends JwtPayload {
    username: string
}

const secret = process.env.JWT_SECRET

if (!secret) {
    throw new Error("JWT_SECRET не задан в .env")
}

const JWT_SECRET: string = secret
const options: jwt.SignOptions = {
    expiresIn: "30d",
}

export function getToken(username: string): string {
    return jwt.sign({ username }, JWT_SECRET, options)
}

export function verifyToken(token: string): AuthPayload {
    return jwt.verify(token, JWT_SECRET) as AuthPayload
}
