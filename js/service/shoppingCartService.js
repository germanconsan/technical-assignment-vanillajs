"use strict"
//shoppingCartService.js

// Este servicio es el encargado de guardar, actualizar y borrar localStorage

import { saveToLocalStorage, hasLocalStorageKey, getFromLocalStorage } from "../utils/localStorage.js";
import { calTotalForProduct } from "../utils/mathUtils.js";

export function saveNewProductService(num, product) {

    const products = getFromLocalStorage("products") || [];
    const total = calTotalForProduct(product.precio, num);


    // Verifica si el producto ya existe
    const existingProductIndex = products.findIndex(productUp => productUp.id === product.id);

    if (existingProductIndex !== -1) {
        // Si existe, actualiza el producto
        products[existingProductIndex].cantidad += num;
        products[existingProductIndex].total += total;
    } else {
        // Si no existe, agrega el nuevo producto
        products.push({ ...product, cantidad: num, total: total });
    }
    try {
        // Guarda los productos actualizados en localStorage
        saveToLocalStorage("products", products);
        return true; // Retorna true si el guardado fue exitoso
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
        return false; // Retorna false si ocurre un error al guardar
    }
}

export function updateCartQuantityService(newQuantity, product) {
    const products = getFromLocalStorage("products") || [];
    const total = calTotalForProduct(product.precio, newQuantity);

    // Verifica si el producto ya existe
    const existingProductIndex = products.findIndex(productUp => productUp.id === product.id);

    if (existingProductIndex !== -1) {
        // Si existe, actualiza el producto
        products[existingProductIndex].cantidad = newQuantity;
        products[existingProductIndex].total = total;
    }else return false;
    
    try {
        // Guarda los productos actualizados en localStorage
        saveToLocalStorage("products", products);
        return true; // Retorna true si el guardado fue exitoso
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
        return false; // Retorna false si ocurre un error al guardar
    }

}

export function deleteProductService(id) {
    if (!id) {
        console.warn('No se proporcionó un id válido para eliminar el producto.');
        return false;
    }

    if (hasLocalStorageKey("products")) {
        let products = getFromLocalStorage("products");
        const initialLength = products.length;
        const filteredProducts = products.filter(product => product.id != id);

        if (filteredProducts.length !== initialLength) {
            // Solo guarda en localStorage si el producto fue eliminado
            saveToLocalStorage("products", filteredProducts);
            return true;
        } else {
            console.warn('No se encontró el producto con el id especificado.');
            return false;
        }
    } else {
        console.warn('No se encontraron productos en el almacenamiento.');
        return false;
    }
}