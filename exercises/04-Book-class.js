class Book {
    constructor( name, author, year, price ) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    setPrice( newPrice ) {
        this.price = newPrice;
    }
}

const jsBook = new Book( 'JavaScript - The Definitive Guide', 'David Flanagan', 2011, 495 );
jsBook.setPrice( 550 );

console.log( jsBook );