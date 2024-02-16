const renderStaticHtml = ( container ) => {
    container.innerHTML = 'Products List';
};

// arrow function does not require () around a single argument
export const render = container => {
    renderStaticHtml( container );
};

// export default render;

// export {
//     render
// }