export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    url: string
}

// Somente necessário para criar uma estrutura que deve ser, rigorosamente seguida
export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
}