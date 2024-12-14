"use strict"
//filterModule.js

export function filterProductsByCategories(products, filter){
        products = products.filter(product => product.categoria === filter);
    return products
}

export function searchProducts(products, searchValue){
    products = products.filter(product =>
        product.nombre.toLowerCase().includes(searchValue)  // Filtra si el nombre del producto incluye el texto de búsqueda
    );
    return products
}

