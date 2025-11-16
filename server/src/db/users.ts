import mongoose, { Document, Schema, Types } from "mongoose"
import { Role } from "@/utils"
import { UserDto } from "@/db/types"
import { IProduct, ProductModel } from "@/db/products"

export interface IUser extends Document {
    username: string
    passwordHash: string
    role: Role
    profile: {
        avatar: {
            name: string
            path: string
        }
        firstName: string
        email: string
        phone: string
    }
    favorites: string[]
    createdAt: Date
    updatedAt: Date
}

const UserSchema: Schema = new mongoose.Schema<IUser>(
    {
        username: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.USER,
            required: true,
        },
        profile: {
            avatar: {
                name: { type: String },
                path: { type: String },
            },
            firstName: { type: String },
            email: { type: String },
            phone: { type: String },
        },
        favorites: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true },
)

export const UserModel = mongoose.model<IUser>("User", UserSchema)

export const fetchAllUsers = async (): Promise<IUser[]> => {
    return UserModel.find().exec()
}

export const getUserByUsername = async (username: string): Promise<IUser | null> => {
    return UserModel.findOne({ username }).exec()
}

export const updateUserData = async (user: UserDto, payload: Partial<UserDto>): Promise<IUser | null> => {
    return UserModel.findOneAndUpdate({ username: user.username }, payload, { new: true }).exec()
}

export async function updateUserPassword(user: UserDto, passwordHash: string): Promise<IUser | null> {
    return UserModel.findOneAndUpdate({ username: user.username }, { passwordHash }).exec()
}

export async function fetchFavoritesProducts(user: UserDto): Promise<IProduct[]> {
    const ids: string[] = user.favorites
    return ProductModel.find({ _id: { $in: ids } }).exec()
}

export async function updateFavorites(user: UserDto, productId: string): Promise<IUser | null> {
    let updatedFavorites: string[] = [...user.favorites]
    const isAlreadyExist: boolean = updatedFavorites.includes(productId)

    if (isAlreadyExist) {
        updatedFavorites = updatedFavorites.filter((itemId) => itemId !== productId)
    } else {
        updatedFavorites.push(productId)
    }

    return UserModel.findOneAndUpdate(
        { username: user.username },
        { favorites: updatedFavorites },
        { new: true },
    ).exec()
}

export async function deleteUserByUsername(username: string) {
    return UserModel.findOneAndDelete({ username }).exec()
}
