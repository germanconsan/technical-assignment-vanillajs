"use strict"
//displayCategories.js

// Función para mostrar las categorias
export function displayCategories(categories) {
    
    if (categories && categories.categorias) {
       
        const categorySelect = document.getElementById('product-category'); // El contenedor de las select
      
        categories.categorias.forEach(category => {
            // Crear la categoría del producto
            const categoryOption = document.createElement('option');
            categoryOption.value = category.nombre;
            categoryOption.innerHTML = category.nombre;
            
            // Agregar el option al select principal
            categorySelect.appendChild(categoryOption);

        });
    }
}
