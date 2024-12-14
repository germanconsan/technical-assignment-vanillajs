"use strict"
//format.js

export const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});