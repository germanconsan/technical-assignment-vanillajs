"use strict"

//addToCartButton.js

import { saveNewProduct } from "../../controller/shoppingNavController.js";
import { stateQuantity } from "../../state/sharedState.js";

//Crear botón, asignar sus clases css y definir sus funcionalidad
export function createAddButton(product) {

    const MINIMUM_QUANTITY = 1;

    const addButton = document.createElement("div");
    addButton.classList.add("details__button");

    const divText = document.createElement("div");
    divText.classList.add("button-div__text");
    divText.innerHTML = "Añadir al carrito";

    const divBox = document.createElement("div");
    divBox.classList.add("button-div__box");

    const imgBox = document.createElement("img");
    imgBox.setAttribute("src", "./svg/box.svg")
    imgBox.height = 25;

    const imgCar = document.createElement("img");
    imgCar.setAttribute("src", "./svg/carrito-compra.svg");
    imgCar.height = 47;

    const divCar = document.createElement("div");
    divCar.classList.add("button-div__car");
    divBox.appendChild(imgBox);
    divCar.appendChild(imgCar);

    addButton.appendChild(divText);
    addButton.appendChild(divBox);
    addButton.appendChild(divCar);

    let flag = false;

    //Evento click que genera la animacion del botón
    addButton.addEventListener("click", () => {

        //Uso de bandera para controlar solo un click en una misma instancia del botón
        if (!flag) {

            //Añadir los productos a la cesta
            saveNewProduct(stateQuantity.getState(), product);

            //Se añade clases de animaciones css
            divBox.classList.add("box-animation");
            divCar.classList.add("car-animation");

            divText.style.top = "-50px"

            divCar.addEventListener("animationend", () => { // Una vez que la animación css acaba:
                divText.innerHTML = "Producto añadido"
                divText.style.top = ""
                addButton.style.backgroundColor = "#34a834"
                divBox.classList.remove("box-animation");
                divCar.classList.remove("car-animation");
                flag = true;
                setTimeout(() => {
                    divText.innerHTML = "Añadir al carrito";
                    flag = false;
                    addButton.style.backgroundColor = "royalblue";
                    if (!stateQuantity.isEqualToOne()) {
                        stateQuantity.setState(MINIMUM_QUANTITY);
                    }
                }, 3000)
            });
        }
    });
    return addButton;
}
