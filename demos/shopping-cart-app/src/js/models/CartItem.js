// 1 file can have at max 1 export marked as a "Default export"
export default class CartItem {
    constructor( product, quantity ) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotal() {
        return this.product['Retail Price'] * this.quantity;
    }
}