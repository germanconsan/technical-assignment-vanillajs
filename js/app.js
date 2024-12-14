"use strict"
// app.js
//Este Script de entrada se carga de forma diferida "defer" desde el HTML, cuando este se ha cargado por completo

import { fetchData } from './api/apiModule.js';
import { displayProducts } from './components/display/displayProducts.js';
import { displayCategories } from './components/display/displayCategories.js';
import { setupEventListeners } from './events/eventListenersFilters.js';
import { renderNavShopping } from './controller/shoppingNavController.js';

//Importar la URL de la api
import { API_ENDPOINTS } from './config/apiEndpoints.js';


async function loadData() {
    try {
        const productsInit = await fetchData(API_ENDPOINTS.PRODUCTS);
        // Llamada a la función para mostrar los productos
        displayProducts(productsInit.productos);
        
        const categorias = await fetchData(API_ENDPOINTS.CATEGORIES);
        // Llamada a la función para mostrar las categorias
        displayCategories(categorias);
        setupEventListeners(productsInit.productos);  // Agregar los event listeners
        renderNavShopping();        

    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

//Entrada a la App
loadData();