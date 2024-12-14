"use strict"
//modalModule.js


import { displayDetailsProduct } from '../display/displayDetailsProduct.js';
import { stateQuantity } from '../../state/sharedState.js';

const myModal = document.getElementById("myModal");
const modalContent = document.getElementById("modal-content");

let isModalOpen = false;

//Crear el modal y su funcionalidad
function createModal() {
    
    const closeModalBtn = document.createElement("span");
    closeModalBtn.classList.add("close");
    closeModalBtn.innerHTML = "×";
    modalContent.appendChild(closeModalBtn);

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    // // Cerrar el modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target == myModal) {
            closeModal();
        }
    });
}

// Cerrar modal y hace la animación de cierre
function closeModal() {   
    modalContent.style.transform = "scale(0.5)";
    modalContent.style.opacity = "0";
    stateQuantity.setState(1);
    // Se hace el setTimeout para que se aprecie la animación antes de ponerlo en display none
    setTimeout(() => {
        isModalOpen = false;
        myModal.style.display = "none"; 
        modalContent.innerHTML = "";
    }, 300);
};

// Abrir modal y hace la animación de apertura
function openModal() {

    myModal.style.display = "block"; 

    // Se hace el setTimeout para que se aprecie la animación despues de ponerlo en display block
    setTimeout(() => {
        isModalOpen = true;
        modalContent.style.opacity = "1";
        modalContent.style.transform = "scale(1.1)"; 
    }, 10); // Un valor pequeño para asegurarnos de que el modal se ha mostrado antes de aplicar la transformación
};


//Ejecuta la apertura del modal
export function toggleModal(product) {
    if (!isModalOpen) {
        createModal(); // Se crea un nuevo modal
        displayDetailsProduct(product); // Se inicializa el contenido de los detalles del producto
        openModal();
    } else { //Si intentasemos abrirlo dos veces se cerrará
        closeModal();
    }
}