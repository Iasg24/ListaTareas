# Estructura del Proyecto React + Vite

El proyecto ha sido generado utilizando Vite con la plantilla de React. A continuación, se detalla la estructura de archivos y carpetas del proyecto:

## Directorios Principales

- **`node_modules/`**: Contiene todas las dependencias y librerías externas que el proyecto necesita para funcionar (como React, React DOM, Bootstrap, etc.). Esta carpeta es autogenerada y no debe modificarse manualmente.
- **`public/`**: Contiene archivos estáticos que se sirven directamente sin ser procesados por el empaquetador (Vite). Aquí se suelen colocar imágenes, favicon, y archivos que no requieren ser pasados por el sistema de módulos de React.
- **`src/`**: Es el directorio principal de desarrollo. Aquí es donde se escribe todo el código fuente de la aplicación React.

## Subdirectorios y Archivos dentro de `src/`

- **`src/components/`**: Carpeta creada para organizar los componentes funcionales de la interfaz. Separar la lógica en componentes pequeños ayuda a la mantenibilidad.
  - `TodoHeader.jsx`: Componente que muestra el título de la aplicación.
  - `TodoForm.jsx`: Componente del formulario para ingresar nuevas tareas (input y botones).
  - `TodoList.jsx`: Componente contenedor que itera y renderiza la lista de tareas.
  - `TodoItem.jsx`: Componente que representa una tarea individual con su checkbox.
  - `ResumenTareasRealizadas.jsx`: Componente que muestra el recuadro final con el conteo de tareas pendientes.
- **`src/App.jsx`**: Es el componente principal (raíz de la UI). Aquí se define la estructura general de la página y se maneja el estado global de la aplicación (la lista de tareas y las funciones para modificarlas).
- **`src/main.jsx`**: Es el punto de entrada de la aplicación. Este archivo se encarga de renderizar el componente `App` dentro del elemento del DOM con el id `root` (que se encuentra en `index.html`). Además, aquí se importan los estilos globales y los de Bootstrap.
- **`src/index.css`**: Archivo para estilos CSS globales personalizados.

## Archivos de Configuración en la Raíz

- **`index.html`**: Es la plantilla HTML principal de la aplicación. Vite inyecta automáticamente los scripts de React (`main.jsx`) en este archivo durante el desarrollo y la construcción.
- **`package.json`**: Archivo de configuración de npm/pnpm. Contiene los metadatos del proyecto, los scripts ejecutables (como `dev`, `build`) y las listas de dependencias necesarias.
- **`pnpm-lock.yaml` / `package-lock.json`**: Aseguran que las versiones exactas de las dependencias instaladas sean consistentes en diferentes entornos.
- **`vite.config.js`**: Archivo de configuración para Vite, donde se pueden definir plugins (como el de React), alias de rutas, y opciones de construcción.
- **`.gitignore`**: Especifica los archivos y carpetas que el sistema de control de versiones Git debe ignorar (como `node_modules` o archivos de entorno locales).
