export interface IPizzaBlock {
    id: string
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

export interface ISort {
    name: string
    value: string
}

export interface IPizzasParams {
    category?: number
    sort?: {
        name: string
        value: string
    }
    search?: string
    page: number
    limit?: number
}
