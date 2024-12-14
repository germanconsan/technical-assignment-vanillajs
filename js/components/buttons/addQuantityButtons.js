"use strict"

//addQuantityButtons.js
import { stateQuantity } from "../../state/sharedState.js";


//Crear botones para la cantidad y asignar sus clases css
export function createAddQuantity() {

    const addQuantity = document.createElement("div");
    addQuantity.classList.add("quantity-container");

    const productQuantity = document.createElement("label");
    productQuantity.id = "product-quantity"
    productQuantity.innerHTML = `Cantidad: ${stateQuantity.getState()}`;

    const incrementBtn = document.createElement("button");
    incrementBtn.classList.add("quantity-btn");
    incrementBtn.innerHTML = "+";

    const decrementBtn = document.createElement("button");
    decrementBtn.classList.add("quantity-btn");
    decrementBtn.innerHTML = "-";

    addQuantity.appendChild(productQuantity);
    addQuantity.appendChild(incrementBtn);
    addQuantity.appendChild(decrementBtn);

    const renderAddQuantity = () => {
        productQuantity.innerHTML = `Cantidad: ${stateQuantity.getState()}`;
    }

    incrementBtn.addEventListener("click", () => {
        stateQuantity.increment();
        renderAddQuantity();

    });

    decrementBtn.addEventListener("click", () => {
        stateQuantity.decrement();
        if (stateQuantity.getState() < 1) stateQuantity.setState(1);

        renderAddQuantity();
    });

    stateQuantity.setOnResetToOne(() => {
        renderAddQuantity();
    })

    return addQuantity;
}
