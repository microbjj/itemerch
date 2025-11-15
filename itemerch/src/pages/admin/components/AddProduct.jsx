import clsx from 'clsx'
import { categoryList } from '@/utils/constants'
import { useAddProductForm } from '../hooks'
import { Input, Select, Button } from '@/components'

export function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        onSubmit,
        success,
    } = useAddProductForm()
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-2/7 flex-col gap-y-2 rounded-md border border-gray-300 px-2 py-2"
        >
            <span>Добавление товара</span>
            <Input
                id="name"
                title="Название"
                error={errors.name}
                register={register}
            />
            <Select
                id="categoryId"
                title="Категория"
                error={errors.categoryId}
                register={register}
                options={categoryList}
            />
            <Input
                id="description"
                title="Описание"
                error={errors.description}
                register={register}
            />
            <Input
                id="stock"
                title="Количество на складе, шт"
                placeholder="Название товара"
                error={errors.stock}
                register={register}
            />
            <Input
                id="price"
                title="Цена, руб"
                placeholder="Название товара"
                error={errors.price}
                register={register}
            />
            <span className="mt-2 text-xs">Ссылки на изображения</span>
            <div className="flex items-center gap-x-1 pl-2 text-xs">
                1
                <Input
                    id="imageUrl1"
                    error={errors.imageUrl1}
                    register={register}
                    component="imageUrl"
                />
            </div>
            <div className="flex items-center gap-x-1 pl-2 text-xs">
                2
                <Input
                    id="imageUrl2"
                    error={errors.imageUrl2}
                    register={register}
                    component="imageUrl"
                />
            </div>
            <div className="flex items-center gap-x-1 pl-2 text-xs">
                3
                <Input
                    id="imageUrl3"
                    error={errors.imageUrl3}
                    register={register}
                    component="imageUrl"
                />
            </div>
            <div className="flex items-center gap-x-1 pl-2 text-xs">
                4
                <Input
                    id="imageUrl4"
                    error={errors.imageUrl4}
                    register={register}
                    component="imageUrl"
                />
            </div>

            <Button
                disabled={success || isSubmitting}
                title={success ? 'Товар добавлен' : 'Добавить'}
                className={clsx('mt-4 w-full', success && 'bg-green-600')}
            />
        </form>
    )
}
