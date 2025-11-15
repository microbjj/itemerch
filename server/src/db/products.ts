import mongoose, { Document, Schema, Types } from "mongoose"
import { ProductCategory } from "@/utils"

export interface IProduct extends Document {
    _id: Types.ObjectId
    name: string
    description: string
    price: number
    stock: number
    imageUrl: string[]
    categoryId: ProductCategory
    createdAt: Date
    updatedAt: Date
}

const ProductSchema: Schema = new mongoose.Schema<IProduct>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        imageUrl: { type: [String], default: [] },
        categoryId: {
            type: String,
            enum: Object.values(ProductCategory),
            required: true,
        },
    },
    { timestamps: true },
)

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema)

export const findAllProducts = async (): Promise<IProduct[]> => {
    return ProductModel.find().exec()
}

export const findProductById = async (id: string): Promise<IProduct | null> => {
    return ProductModel.findById(id).exec()
}

export const insertProduct = async (productData: Partial<IProduct>): Promise<IProduct> => {
    const product = new ProductModel(productData)
    return product.save()
}

export const updateProduct = async (id: string, productData: Partial<IProduct>): Promise<IProduct | null> => {
    return ProductModel.findByIdAndUpdate(id, productData, { new: true }).exec()
}

export const removeProduct = async (id: string): Promise<IProduct | null> => {
    return ProductModel.findByIdAndDelete(id).exec()
}
