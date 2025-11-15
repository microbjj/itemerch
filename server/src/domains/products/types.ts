import { ProductCategory } from "@/utils"

export interface CreateProductDto {
    name: string
    description: string
    price: number
    stock: number
    imageUrl: string[]
    categoryId: ProductCategory
}
