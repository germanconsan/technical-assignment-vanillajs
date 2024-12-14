"use strict"

//displayProductsModule.js

import { toggleModal } from '../modal/modalModule.js';
import { formatter } from '../../utils/format.js';
import { createElementWithClass } from "../../utils/createElements.js";

// Función para mostrar los productos
export  function displayProducts(products, textNotFound="No hay productos disponibles.") {
    
    if (products) {

        const container = document.getElementById('container-card'); // El contenedor de las cards
        container.innerHTML = "";

        if (products.length === 0) {
            container.style.display = "unset";
            container.style.width = "auto";
            // Crear no hay productos
            const notProduct = document.createElement('div');
            notProduct.classList.add('not-product');
            notProduct.textContent = textNotFound;
            container.appendChild(notProduct);
        }else{
            container.style.removeProperty('display');
            container.style.removeProperty('width');
        }


        products.forEach(product => {
            // Crear el contenedor de la card
            const card = createElementWithClass("div", "card");

            // Crear la imagen de la card
            const cardImg =  createElementWithClass("div", "card__img");
            const img =  createElementWithClass("img", "img");
            img.src = product.img;
            img.alt = product.nombre;
            cardImg.appendChild(img);

            // Crear el nombre del producto
            const productName =  createElementWithClass("h3", "ml-5");
            productName.classList.add('ml-5');
            productName.textContent = product.nombre;

            // Crear el precio del producto
            const productPrice =  createElementWithClass("div", ["card_price","ml-5"]);
            productPrice.textContent = formatter.format(product.precio);

            // Crear la categoría del producto
            const productCategory =  createElementWithClass("div", ["card_category","ml-5"]);
            productCategory.textContent = product.categoria;

            // Agregar los elementos al contenedor de la card
            card.appendChild(cardImg);
            card.appendChild(productName);
            card.appendChild(productPrice);
            card.appendChild(productCategory);
            card.id = product.id

            // Agregar la card al contenedor principal
            container.appendChild(card);

            card.addEventListener('click', (event)=> toggleModal(product))

        });
    }
}
