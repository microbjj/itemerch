export enum ProductCategory {
    CLOTHING = "clothing",
    PC_ACCESSORIES = "pc_accessories",
    TOYS_SOUVENIRS = "toys_souvenirs",
    STATIONERY = "stationery",
    HOME_OFFICE = "home_office",
    BAGS_BACKPACKS = "bags_backpacks",
}

export const ProductCategoryLabels = {
    [ProductCategory.CLOTHING]: "Одежда",
    [ProductCategory.PC_ACCESSORIES]: "Аксессуары для ПК",
    [ProductCategory.TOYS_SOUVENIRS]: "Игрушки и сувениры",
    [ProductCategory.STATIONERY]: "Канцелярия",
    [ProductCategory.HOME_OFFICE]: "Для дома и офиса",
    [ProductCategory.BAGS_BACKPACKS]: "Сумки и рюкзаки",
} as const
