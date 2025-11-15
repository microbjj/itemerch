export function usePagination(items, pageSize, currentPage) {
    const totalPages = Math.ceil(items.length / pageSize)
    const paginatedItems = items.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    )

    return { paginatedItems, totalPages }
}
