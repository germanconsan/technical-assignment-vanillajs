"use strict"
// eventListenersFilters.js

import { filterProductsByCategories, searchProducts } from '../filter/filterModule.js';
import { displayProducts } from '../components/display/displayProducts.js';

export function setupEventListeners(productsInit) {
    const categoryFilter = document.getElementById("product-category");
    const productsSearch = document.getElementById("search");

    if (!categoryFilter || !productsSearch) {
        console.warn("Elementos necesarios para los filtros no encontrados en el DOM.");
        return;
    }
    //Estado de la busqueda
    let state = {
        categoryValue: "",
        searchValue: "",
        productsByCategoryFound: null,
        productsFound: productsInit
    };
    //Actuzaliza displayProducts segun los filtros
    const updateProductsDisplay = () => {
        const { categoryValue, searchValue, productsByCategoryFound } = state;

        if (categoryValue === "notFilter") {
            state.productsByCategoryFound = null;
            state.productsFound = searchProducts(productsInit, searchValue);
        } else if (categoryValue !== "notFilter" && searchValue.length > 2) {
            state.productsByCategoryFound = filterProductsByCategories(productsInit, categoryValue);
            state.productsFound = searchProducts(state.productsByCategoryFound, searchValue);
        } else if (categoryValue !== "notFilter") {
            state.productsByCategoryFound = filterProductsByCategories(productsInit, categoryValue);
            state.productsFound = state.productsByCategoryFound;
        } else {
            state.productsFound = productsInit;
        }

        displayProducts(
            state.productsFound,
            searchValue && state.productsFound.length === 0
                ? `Producto "${searchValue}" no encontrado para la categoría "${categoryValue === "" || categoryValue === "notFilter" ? "Sin filtro" : categoryValue}".`
                : ""
        );
    };

    const handleCategoryChange = (event) => {
        state.categoryValue = event.target.value;
        updateProductsDisplay();
    };

    const handleSearchInput = (event) => {
        state.searchValue = event.target.value;

        if (state.searchValue.length > 2 || state.searchValue === "") {
            updateProductsDisplay();
        }
    };

    categoryFilter.addEventListener("change", handleCategoryChange);
    productsSearch.addEventListener("keyup", handleSearchInput);
}