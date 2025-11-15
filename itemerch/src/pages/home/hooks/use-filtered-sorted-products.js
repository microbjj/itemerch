import { useSelector } from 'react-redux'
import { selectProductSearch } from '@/store/selectors'

export function useFilteredSortedProducts(
    products,
    selectedCategory,
    sortOrder,
) {
    const search = useSelector(selectProductSearch)
    let result = [...products]

    // Поиск
    if (search) {
        result = result.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase()),
        )
    }

    // Категория
    if (selectedCategory !== 'all') {
        result = result.filter(
            (p) => String(p.categoryId) === String(selectedCategory),
        )
    }

    // Сортировка
    if (sortOrder === 'asc') {
        result.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'desc') {
        result.sort((a, b) => b.price - a.price)
    }
    return result
}
