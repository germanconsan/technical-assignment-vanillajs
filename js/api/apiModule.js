"use strict"
//apiModule.js

export async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl); // Realiza la solicitud HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Convierte la respuesta en JSON
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;
    }
}