"use strict"
//displayDetailsProduct.js

import { createTextElement, createElementWithClass, createImageElement, createFieldset } from "../../utils/createElements.js";
import { formatter } from "../../utils/format.js";
import { createAddQuantity } from "../buttons/addQuantityButtons.js";
import { createAddButton } from "../buttons/addToCartButton.js";


export function displayDetailsProduct(product) {

    // Obtener el elemento del modal donde inyecta
    const modalContent = document.getElementById("modal-content");

    const productTitle = createTextElement("h2", product.nombre);

    const containerDetails = createElementWithClass("div", "container-details");

    const containerDetailsImg = createElementWithClass("div", "container-details-img");

    const productImg = createImageElement(product.img, product.nombre, "details__img");

    const containerDetailsInfo = createElementWithClass("div", "container-details-info");

    const descriptionFieldset = createFieldset("Descripción del Producto", product.descripcion, "details-info__fieldset");

    const priceFieldset = createFieldset("Precio del Producto", formatter.format(product.precio), "details-info__fieldset");

    //Añadir los bontones
    const addQuantity = createAddQuantity();
    const addButton = createAddButton(product);

    //Añadir la imagen a su contendor div
    containerDetailsImg.appendChild(productImg);

    //Añadir los elementos de info y el botón a su contenedor div
    containerDetailsInfo.appendChild(descriptionFieldset);
    containerDetailsInfo.appendChild(priceFieldset);

    containerDetailsInfo.appendChild(addQuantity);
    containerDetailsInfo.appendChild(addButton);

    //Añadir los dos contenedores anteriores a su contenedor "containerDetails"
    containerDetails.appendChild(containerDetailsImg);
    containerDetails.appendChild(containerDetailsInfo);

    //Añadir tanto "productTitle" como "containerDetails" al elemento del modal
    modalContent.appendChild(productTitle);
    modalContent.appendChild(containerDetails);
}