export class productCreateForm{
    composition: string;
    indications: string;
    manifacturer: string;
    price: Float32Array;
    productDescription: string;
    productName: string;
    categories: [];

    constructor(composition: string,
    indications: string,
    manifacturer: string,
    price: Float32Array,
    productDescription: string,
    productName: string,
    categories: [],){
        this.composition = composition
        this.indications = indications
        this.manifacturer = manifacturer
        this.price = price
        this.productDescription = productDescription
        this.productName = productName
        this.categories = categories
    }
}