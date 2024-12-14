"use strict"
//createElements.js

//Estos modulos estan orientados a simplificar y reutilizar la reación de elementos

export function createElement(tag) {
    const element = document.createElement(tag);
    return element;
}

export function createTextElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

export function createElementWithClass(tag, classNames) {
    const element = document.createElement(tag);
    // Verificamos si classNames es un array, si no lo convertimos a array
    if (Array.isArray(classNames)) {
        element.classList.add(...classNames);
    } else {
        element.classList.add(classNames);
    }
    return element;
}

export function createImageElement(src, alt, className) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.classList.add(className);
    return image;
}


export function createFieldset(legendText, contentText, className) {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = legendText;
    const paragraph = document.createElement("p");
    paragraph.textContent = contentText;
    fieldset.classList.add(className);
    fieldset.appendChild(legend);
    fieldset.appendChild(paragraph);
    return fieldset;
}