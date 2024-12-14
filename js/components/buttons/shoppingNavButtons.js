"use strict"

//shoppingNavButtons.js

import { createElementWithClass } from "../../utils/createElements.js";
import { deleteProduct, updateCartQuantity } from "../../controller/shoppingNavController.js";

export function createIncrementBtn(product) {
    const incrementBtn = createElementWithClass("div", "quantity-btn-nav");
    incrementBtn.innerHTML = "+";
    incrementBtn.addEventListener("click", (event) => {
        let newQuantity = ++product.cantidad;
        updateCartQuantity(newQuantity, product);

    })

    return incrementBtn;
}

export function createDecrementBtn(product) {
    const decrementBtn = createElementWithClass("div", "quantity-btn-nav");
    decrementBtn.innerHTML = "-";
    decrementBtn.addEventListener("click", (event) => {
        let newQuantity = --product.cantidad;
        updateCartQuantity(newQuantity, product);

    })
    return decrementBtn;
}

export function createButtonDelete(id) {
    const buttonDelete = createElementWithClass("div", "basket-nav-card__delete");
    buttonDelete.innerHTML = "Eliminar";
    buttonDelete.addEventListener("click", (event) => {
        deleteProduct(id);
    })
    return buttonDelete
}


