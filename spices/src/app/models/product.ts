export class Product {
    _id?: string;
    name: string;
    category: string;
    ubication: string;
    price: number;


constructor(name: string, category: string, ubication: string, price: number) {
    this.name = name;
    this.category = category;
    this.ubication = ubication;
    this.price = price;
    }
}