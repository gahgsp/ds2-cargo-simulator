export interface Cargo {
    id: number
    title: string
    description: string
    size: 'S' | 'M' | 'L' | 'XL'
    weight: number
}

export interface Delivery {
    type: string
    description: string
    totalWeight: number
    cargos: Cargo[]
}