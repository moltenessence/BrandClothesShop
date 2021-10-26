export type Photo = {
    url: string,
}

type Item = {
    clothesItemId: number,
    modelName: string,
    brand: string,
    size: string,
    description: string,
    price: number,
    type: string,
    photos: Photo[],
}

export type ItemsCollection = Array<Item>;

export interface IShowcaseState {
    itemsCollection: ItemsCollection,
    isFetching: boolean,
}
