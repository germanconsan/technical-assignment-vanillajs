# Prueba Frontend: Listado de Productos Interactivo

Este proyecto consiste en una aplicación web simple que realiza peticiones a una API y genera partes del DOM de manera dinámica utilizando los datos obtenidos. El desarrollo está realizado con **Vanilla JavaScript**, **CSS** y **HTML**.

## Requisitos

Para ejecutar este proyecto, necesitas:

1. Tener instalado **Visual Studio Code**.
2. Instalar la extensión **Live Server** de Visual Studio Code.

## Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio en tu equipo local:

   ```bash
   git clone https://github.com/germanconsan/technical-assignment-vanillajs.git
   ```

2. Abre la carpeta del proyecto en **Visual Studio Code**.

3. Haz clic derecho en el archivo `index.html` y selecciona **"Open with Live Server"**.

4. El proyecto se abrirá en tu navegador predeterminado.

### Nota sobre el puerto en el proyecto

Si Live Server asigna un puerto diferente y necesitas actualizarlo dentro del proyecto, puedes hacerlo en el archivo:

```plaintext
js/config/apiEndpoints.js
```

Ejemplo de actualización del puerto:

```javascript
const API_BASE_URL = "http://127.0.0.1:5500/database";
```

Reemplaza `5500` por el puerto en el que se está ejecutando tu servidor(Live Server).

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:

```plaintext
/
|-- css/                # Archivos de estilos CSS
|-- database/           # Recursos de base de datos
|-- js/                 # Lógica principal del proyecto
|   |-- api/            # Módulo para realizar peticiones a la API
|   |-- components/     # Componentes reutilizables del DOM
|   |-- config/         # Archivos de configuración (URLs, claves API, etc.)
|   |-- controller/     # Archivos de auxiliares para la funcionalidad de un componente
|   |-- events/         # Eventos escucha de alguna funcionalidad importante
|   |-- filter/         # Lógica para filtrar o procesar los datos obtenidos
|   |-- service/        # Servicios o funciones auxiliares (CRUD LocalStorage)
|   |-- state/          # Manejo del estado de la aplicación
|   |-- utils/          # Utilidades y funciones generales
|   |-- app.js          # Punto de entrada principal del proyecto
|-- svg/                # Archivos SVG
|-- index.html          # Archivo principal HTML
```

## Descripción del Funcionamiento

1. El proyecto realiza una petición HTTP a una API externa para obtener datos.
2. Los datos recibidos se procesan y se generan elementos del DOM de manera dinámica.
3. Los productos pueden filtrarse de dos maneras:
   - **Campo de búsqueda**: Al escribir el tercer carácter, se ejecuta un filtrado en tiempo real.
   - **Categorías**: Los productos se pueden filtrar también por categorías.
   - Ambas opciones son alternables y funcionan de manera conjunta.
4. Se puede abrir un producto mediante un **modal**, elegir la cantidad y añadirlo al carrito.
5. El carrito es accesible desde un **desplegable** en la parte superior derecha. Desde allí, puedes editarlo.
6. Toda la información del carrito se guarda automáticamente en **LocalStorage**, por lo que si recargas la página, el contenido del carrito se mantiene.

---
