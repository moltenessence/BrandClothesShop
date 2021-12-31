export interface ICartItem {
    itemId: number,
    userId: number,
    photoUrl: string,
    name: string,
    price: number,
    size: string
}

export interface ICartState {
    itemCollection: ICartItem[],
}