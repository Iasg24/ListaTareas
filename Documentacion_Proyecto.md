# Documentación Evaluación Sumativa III - Proyecto React + Vite

## a.- Estructura del proyecto y explicación de directorios (20 Pts)
El proyecto ha sido generado utilizando Vite y estructurado de la siguiente forma para mantener un orden lógico y modular:

- `node_modules/`: Contiene todas las dependencias y librerías de terceros necesarias para que el proyecto funcione.
- `public/`: Directorio para archivos estáticos públicos (como imágenes base o el favicon) que no necesitan ser procesados.
- `src/`: Directorio principal donde reside todo el código fuente de nuestra aplicación React.
  - `components/`: Carpeta dedicada a almacenar de forma ordenada todos los componentes de interfaz que hemos creado.
    - `TodoHeader.jsx`: Componente que renderiza el título o encabezado principal.
    - `TodoForm.jsx`: Componente con el formulario (input) y los botones de acción para agregar tareas.
    - `TodoList.jsx`: Componente contenedor que maneja la renderización de la lista de tareas.
    - `TodoItem.jsx`: Componente visual para cada tarea individual de la lista.
    - `ResumenTareasRealizadas.jsx`: Componente situado en la parte inferior (actuando como Footer) que muestra tareas pendientes.
  - `App.jsx`: Componente principal que orquesta a todos los demás y maneja el estado centralizado (las tareas).
  - `main.jsx`: Punto de entrada de la aplicación donde se inicializa React y se importan los estilos globales de Bootstrap.

## b.- Estilos con Bootstrap (25 Pts)
Se ha incorporado Bootstrap 5 en el proyecto para garantizar un diseño responsivo. Se prestó especial atención a los elementos solicitados en el requerimiento:
- **Header**: Se estilizó en el componente `TodoHeader` utilizando clases utilitarias como `text-center`, `fw-bold` y márgenes (`mt-4`).
- **Footer**: Se implementó mediante el componente `ResumenTareasRealizadas`, dándole un aspecto destacado con colores de fondo y espaciados (`text-center`, `p-4`, `rounded`, colores turquesa personalizados).
- **Lista**: Se utilizaron las clases de lista de Bootstrap en `TodoList` y `TodoItem` (`list-group`, `list-group-item`, `d-flex`, `align-items-center`) para que cada fila se vea ordenada.
- **Botones**: Se le dio funcionalidad y estilo a los botones en `TodoForm` usando las clases `btn-success` (para agregar) y `btn-danger` (para eliminar), logrando una interfaz intuitiva.

## c.- Incorporación de Componentes (30 Pts)
Se han desarrollado e integrado exitosamente componentes funcionales locales, incluyendo algunos de los sugeridos en las instrucciones:
1. **`TodoHeader`** (Sugerido)
2. **`ResumenTareasRealizadas`** (Sugerido, actúa también como TodoFooter)
3. **`TodoForm`** (Para el ingreso de datos)
4. **`TodoList`** (Para agrupar elementos)
5. **`TodoItem`** (Para cada elemento)

## d.- Procedimiento y Capturas de Pantalla (10 Pts)

### Procedimiento realizado:
1. Generación del proyecto base con Vite (`pnpm create vite my-app --template react`).
2. Instalación de dependencias (Bootstrap y Bootstrap Icons).
3. Creación de la estructura de archivos en la carpeta `src/components`.
4. Desarrollo de cada componente (Header, Lista, Botones, Footer/Resumen) aplicando clases de Bootstrap.
5. Integración del estado (useState) en `App.jsx` para dar funcionalidad a la lista.

### Captura de la Aplicación Funcionando
![Aplicación Funcionando](./localHost.png)

### Captura de los principales bloques de código (Estructura en App.jsx)
![Estructura App.jsx](./capturAppjsx.png)
```javascript
// Principal bloque de código integrador en App.jsx
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <TodoHeader />
      <TodoForm addTask={addTask} removeCompletedTasks={removeCompletedTasks} />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <ResumenTareasRealizadas pendingTasksCount={pendingTasksCount} />
    </div>
  );
```

## e.- Disponibilidad en GitHub (15 Pts)
El proyecto ha sido inicializado con Git y subido exitosamente a un repositorio remoto en GitHub.

**Link para clonar el proyecto:**
`https://github.com/Iasg24/ListaTareas.git`
