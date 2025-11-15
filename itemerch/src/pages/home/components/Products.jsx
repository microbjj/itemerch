import { useState } from 'react'
import { MiniCard, Loader } from '@/components'
import { PageSizeSelector } from './PageSizeSelector'
import { useProducts, usePagination, useFilteredSortedProducts } from '../hooks'
import { categoryList } from '@/utils/constants'
import { useSelector } from 'react-redux'
import { selectProducts, selectProductLoading } from '@/store/selectors'
import { FcNext, FcPrevious } from 'react-icons/fc'
import clsx from 'clsx'

export function Products() {
    const [pageSize, setPageSize] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOrder, setSortOrder] = useState('asc')

    useProducts()
    const products = useSelector(selectProducts)
    const isLoading = useSelector(selectProductLoading)

    const finalProducts = useFilteredSortedProducts(
        products,
        selectedCategory,
        sortOrder,
    )
    const { totalPages, paginatedItems } = usePagination(
        finalProducts,
        pageSize,
        currentPage,
    )

    const onPageSizeSelector = (e) => {
        setPageSize(Number(e.target.value))
        setCurrentPage(1)
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            {/* Фильтры */}

            <div className="mb-4 flex items-center justify-end gap-4">
                {/* Категории */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded border px-2 py-1 text-sm"
                >
                    <option value="all">Все категории</option>
                    {categoryList.map(({ value, title }) => (
                        <option key={value} value={value}>
                            {title}
                        </option>
                    ))}
                </select>

                {/* Сортировка */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded border px-2 py-1 text-sm"
                >
                    <option value="asc">Сначала дешёвые</option>
                    <option value="desc">Сначала дорогие</option>
                </select>
            </div>

            {/* Товары */}
            <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedItems.map((product) => (
                    <MiniCard key={product._id} product={product} />
                ))}
            </div>

            {/* Пагинация */}
            <div className="mb-10 flex items-center justify-end gap-1">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={clsx(
                        'cursor-pointer px-1 py-1',
                        currentPage === 1 && 'hidden',
                    )}
                >
                    <FcPrevious />
                </button>
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`cursor-pointer rounded p-0.5 transition-colors duration-200 ${
                                currentPage === page
                                    ? 'bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500'
                                    : 'bg-white'
                            }`}
                        >
                            <span className="flex min-w-7 items-center justify-center rounded bg-white px-2.5 py-1 text-sm">
                                {page}
                            </span>
                        </button>
                    )
                })}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={clsx(
                        'cursor-pointer px-1 py-1',
                        currentPage === totalPages && 'hidden',
                    )}
                >
                    <FcNext />
                </button>
            </div>
        </div>
    )
}
