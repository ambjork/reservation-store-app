
export interface ProductItem {
    id: string,
    name: string,
    price: number,
    inStock: number
}

export interface CartItem extends ProductItem {
    amount: number
}