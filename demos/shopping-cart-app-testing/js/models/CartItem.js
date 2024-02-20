export default class CartItem {
    constructor( product, quantity ) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotal() {
        return this.product['Retail Price'] * this.quantity;
    };
}