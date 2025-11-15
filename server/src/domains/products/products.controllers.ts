import { Request, Response } from "express"
import { findAllProducts, findProductById, insertProduct, IProduct, removeProduct, updateProduct } from "@/db/products"
import { HTTP_STATUS } from "@/utils/status.codes"
import { CreateProductDto } from "@/domains/products/types"

export async function getAllProducts(req: Request, res: Response) {
    try {
        const products: IProduct[] = await findAllProducts()
        return res.status(HTTP_STATUS.OK).json(products)
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function getProductById(req: Request, res: Response) {
    try {
        const id: string = req.params.id
        if (!id) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Не указан ID товара" })
        }
        const product: IProduct | null = await findProductById(id)
        if (!product) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Товар не найден" })
        }
        return res.status(HTTP_STATUS.OK).json(product)
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function createProduct(req: Request<{}, {}, CreateProductDto>, res: Response) {
    try {
        const data: Partial<IProduct> = req.body
        const product: IProduct = await insertProduct(data)
        return res.status(HTTP_STATUS.CREATED).json(product)
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function editProductById(req: Request, res: Response) {
    try {
        const id: string = req.params.id
        if (!id) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Не указан ID товара" })
        }

        const data: Partial<IProduct> = req.body
        const editedProduct: IProduct | null = await updateProduct(id, data)

        if (!editedProduct) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Товар не найден для обновления" })
        }

        return res.status(HTTP_STATUS.OK).json(editedProduct)
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function deleteProductById(req: Request, res: Response) {
    try {
        const id: string = req.params.id

        if (!id) {
            return res.status(HTTP_STATUS.BAD_REQUEST)
        }

        const deleteProduct: IProduct | null = await removeProduct(id)

        if (!deleteProduct) {
            return res.status(HTTP_STATUS.NOT_FOUND).json("Не удалось удалить товар")
        }

        return res.status(HTTP_STATUS.NO_CONTENT).end()
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}
