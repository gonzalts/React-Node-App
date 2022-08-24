# React-Node-App

## Descripción ##
Se desarrolló un modelo para publicación de productos con su respectiva alta, baja y modificación.

## Funcionalidades de la Aplicación ##

#### Se divide la aplicación en las siguientes opciones de menú ####
- Home
  - Se visualizarán imágenes en un Slide.
  
- Lista de Productos
  - Se visualizan en "Cards" los productos cargados con su Títulos, Precio, Descripción y Imagen.
  
- Lista de Productos estilo CRUD
  - Se permite a través de un botón de edición realizar modificaciones a cada producto.
  - Se pueden eliminar los productos con un botón asociado a cada ítem.
  
- Alta de producto
  - Este menú permite la carga de un nuevo registro con los campos (Título - Precio - Descripción - Imagen)

- Contacto
  - Se permite la carga de una consulta a travez de un formulario, la misma requiere que se carguen los campos (Nombre - Apellido - Email - Asunto - Mensaje)

## Requisitos ##
- Git
- Node.js
- NPM
- MySQL

## Instalación ##

#### Clonar el repositorio ####
```bash
  git clone https://github.com/gonzalts/React-Node-App.git
```

#### Generar la DB con MySQL ####
```bash
  Utilizar script adjunto en la carpeta /scripts
```

#### Instalar React y node ####
```bash
  cd backend/
  npm install
```

```bash
  cd frontend/
  npm install
```

#### Ejecutar los siguientes comandos para levantar la app ####
```bash
  cd frontend/
  npm start
  
  cd backend/
  node index
```
