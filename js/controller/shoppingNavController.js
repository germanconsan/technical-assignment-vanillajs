"use strict"
//shoppingNavController.js

import { hasLocalStorageKey, getFromLocalStorage } from "../utils/localStorage.js";
import { formatter } from '../utils/format.js';
import { deleteProductService, saveNewProductService, updateCartQuantityService } from "../service/shoppingCartService.js";
import { calTotalToPay } from "../utils/mathUtils.js";
import { stateForPay } from "../state/sharedState.js";
import { shoppingNavEvents } from "../events/shoppingNavEvents.js";
import { createDisplayNavShopping } from "../components/display/displayShoppingNav.js";

const basketNav = document.getElementById("basket-nav");
const basketNavContainerCard = document.getElementById("basket-nav-container-card");

//FUNCIONES BOTONES
// Lo utiliza addToCartButton.js para guardar un nuevo producto
export function saveNewProduct(num, product) {
    if (!num || !product) {
        console.warn('No se proporcionó un datos válidos.');
        return;
    }
    const isSaved = saveNewProductService(num, product)
    if (isSaved) {
        renderNavShopping();
    }
}

// Lo utiliza shoppingNavButtons.js para actualiar un producto
export function updateCartQuantity(newQuantity, product) {
    if (newQuantity < 1) {
        deleteProduct(product.id);
        return;
    }
    if (!newQuantity || !product) {
        console.warn('No se proporcionó datos válidos.');
        return;
    }
    const isUpdate = updateCartQuantityService(newQuantity, product);
    if (isUpdate) {
        renderNavShopping();
    } else {
        console.warn('No se pudo eliminar el producto.');
    }
}

// Lo utiliza shoppingNavButtons.js para borrar un producto
export function deleteProduct(id) {
    if (!id) {
        console.warn('No se proporcionó un ID válido.');
        return;
    }
    const isDeleted = deleteProductService(id);
    if (isDeleted) {
        const productElement = document.querySelector(`[data-product-id="${id}"]`);
        if (productElement) {
            productElement.remove();
        }
        renderNavShopping();
    } else {
        console.warn('No se pudo eliminar el producto.');
    }
}

// Lo utiliza shoppingNavManager.js y shoppingNavButtons.js para renderizar la 
// vista cuando se añade, actualiza o elimina un producto
export function renderNavShopping() {
    const products = getFromLocalStorage("products");
    basketNavContainerCard.innerHTML = "";
    
    let total = 0;

    products.forEach(product => {
        basketNavContainerCard.appendChild(createDisplayNavShopping(product));
        total = calTotalToPay(total, product.total);
    })
    stateForPay.setState(total);
    renderToPay(stateForPay.getState());
    renderNavCount();
    shoppingNavEvents();
}

// Render de total a pagar
function renderToPay(forPayValue) {
    const totalAccount = document.getElementById("price-for-pay");
    totalAccount.innerHTML = `Total a pagar: ${formatter.format(forPayValue)}`;
    basketNav.appendChild(totalAccount);
}

// Actualiza la cantidad del "notification sign"
function renderNavCount() {
    let productCount = 0;
    let productCountElement = document.getElementById("product-count");
    if (hasLocalStorageKey("products")) {
        productCount = getFromLocalStorage("products").length;
    }
    
    if (productCount < 1) {
        productCountElement.style.display = "none";
    } else {
        productCountElement.innerHTML = productCount;
        productCountElement.style.display = "";
    }
}