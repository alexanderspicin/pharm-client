import { Category } from "./Category";
export interface Product{
    id: number,
    composition: string,
    indications: string,
    manifacturer: string,
    price: Float32Array,
    productDescription: string,
    productName: string,
    categories: Array<Category>,
}