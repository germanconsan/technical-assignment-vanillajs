"use strict"
//localStorage.js

export function saveToLocalStorage(key, value) {
    if (!key || value === undefined) {
        console.error("Se requieren una clave y un valor válidos.");
        return;
    }

    try {
        const serializedValue = JSON.stringify(value); // Convierte el valor a una cadena JSON
        localStorage.setItem(key, serializedValue);    // Guarda en localStorage
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
    }
}

export function hasLocalStorageKey(key) {
    if (!key) {
        console.error("Se requiere una clave válida.");
        return false;
    }

    return localStorage.getItem(key) !== null; // Devuelve true si existe, false si no
}


export function getFromLocalStorage(key) {
    try {
        const serializedValue = localStorage.getItem(key); // Obtiene el valor
        return serializedValue ? JSON.parse(serializedValue) : null; // Devuelve el objeto deserializado o null
    } catch (error) {
        console.error("Error al leer de localStorage:", error);
        return null;
    }
}