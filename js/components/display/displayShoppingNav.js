

import { formatter } from "../../utils/format.js";
import { createElement, createElementWithClass } from "../../utils/createElements.js";
import { createButtonDelete, createDecrementBtn, createIncrementBtn } from "../buttons/shoppingNavButtons.js";


export function createDisplayNavShopping(product) {
    const mainContainer = createElementWithClass("div", "basket-nav-card");
    mainContainer.dataset.productId = product.id;
    const detailsShopContainer = createElement("div");
    
    // Nombre de producto:
    const name = createElement("div");
    const nameStrong = createElement("strong");
    nameStrong.innerHTML = "Nombre: ";
    name.appendChild(nameStrong);
    name.innerHTML += product.nombre;

    // Precio de producto:
    const price = createElement("div");
    const priceStrong = createElement("strong");
    priceStrong.innerHTML = "Precio: ";
    price.appendChild(priceStrong);
    price.innerHTML += formatter.format(product.precio);

    // Cantidad de producto:
    const quantityContainer = createElement("div");
    const quantityTitle = createElement("strong");
    quantityTitle.innerHTML = "Cantidad: ";
    const quantityNum = createElementWithClass("span", "quantity-for-products");
    quantityNum.innerHTML = product.cantidad
    quantityContainer.appendChild(quantityTitle);
    quantityContainer.appendChild(quantityNum);

    // Total de producto:
    const totalContainer = createElement("div");
    const totalTitle = createElement("strong");
    totalTitle.innerHTML = "Total: ";
    const totalNum = createElementWithClass("span", "price-for-quantity");
    totalNum.innerHTML = formatter.format(product.total);
    totalContainer.appendChild(totalTitle);
    totalContainer.appendChild(totalNum);

    const containerOptions = createElementWithClass("div", "basket-nav-card-options");
    const cartQuantity = createElementWithClass("div", "cart-quantity-nav");

    // Botones
    const incrementBtn = createIncrementBtn(product);
    const decrementBtn = createDecrementBtn(product);
    const buttonDelete = createButtonDelete(product.id);

    detailsShopContainer.appendChild(name);
    detailsShopContainer.appendChild(price);
    detailsShopContainer.appendChild(quantityContainer);
    detailsShopContainer.appendChild(totalContainer);
    mainContainer.appendChild(detailsShopContainer);
    cartQuantity.appendChild(decrementBtn);
    cartQuantity.appendChild(incrementBtn);
    containerOptions.appendChild(cartQuantity);
    containerOptions.appendChild(buttonDelete);
    mainContainer.appendChild(containerOptions);

    return mainContainer;
}