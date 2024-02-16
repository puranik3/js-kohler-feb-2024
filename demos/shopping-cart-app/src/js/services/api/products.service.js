// how do we get data from the backend
// fetch() API - built-in browser API
// A library like axios
export const getProducts = async () => {
    try {
        const response = await fetch( `http://127.0.0.1:4000/data/products.json/` );

        if( !response.ok ) {
            throw new Error( response.statusText );
        }

        const products = await response.json();
        return products;
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};