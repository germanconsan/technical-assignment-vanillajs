"use strict"
//shoppingNavEvents.js

//eventListeners mostrar y ocultar carrito de compra:
export function shoppingNavEvents() {
    const shopping = document.getElementById("shopping");
    const basketNav = document.getElementById("basket-nav");
    let basketNavOpen = false;
    shopping.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!basketNavOpen) {
            basketNavOpen = true;
            basketNav.style.top = "70px"
        } else {
            basketNavOpen = false;
            basketNav.style.top = ""
        }
    })
    document.addEventListener("click", (event) => {
        if (!basketNav.contains(event.target) && event.target !== shopping && !event.target.closest(".basket-nav-card-options")) {
            // Si el clic no está dentro de "basketNav" ni en "shopping", cerramos el carrito
            basketNavOpen = false;
            basketNav.style.top = "";
        }
    });

}