"use strict"
//sharedState.js

//Cantidad de productos centralizada
export const stateQuantity = {
    cantidad: 1,
    onResetToOneCallback: null,
    getState() {
        return this.cantidad;
    },
    setState(newState) {
        this.cantidad = newState;
        if (this.isEqualToOne() && typeof this.onResetToOneCallback === 'function') {
            this.onResetToOneCallback();  // Llama a la función de notificación
        }
    },
    increment() {
        return this.cantidad++
    },
    decrement() {
        return this.cantidad--
    },
    isEqualToOne() {
        return this.cantidad === 1;
    },
    setOnResetToOne(callback) {
        this.onResetToOneCallback = callback;  // Establecer el callback de notificación
    },
};


//Cantidad total a pagar centralizada
export const stateForPay = {
    totalTopay: 0,
    getState() {
        return this.totalTopay;
    },
    setState(newState) {
        this.totalTopay = newState;
    },
};
