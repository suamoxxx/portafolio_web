Portafolio Web Personal
Descripción:

Este proyecto es un portafolio web personal desarrollado con Node.js y Express para el backend, y HTML, CSS y JavaScript para el frontend. El portafolio presenta información sobre mí, mis habilidades y proyectos, y permite a los visitantes contactarme a través de un formulario que utiliza Nodemailer para enviar mensajes por correo electrónico.

Características Principales:

Portafolio Personal: Presenta información sobre mí, mis habilidades y experiencia.
Frontend Interactivo: Utiliza HTML, CSS y JavaScript para crear una interfaz de usuario atractiva y dinámica.
Backend con Node.js y Express:
Maneja las solicitudes del frontend.
Implementa una API REST para el envío de correos.
Envío de Correos con Nodemailer: Permite a los visitantes contactarme a través de un formulario, enviando los mensajes a mi correo electrónico.
Configuración con Variables de Entorno: Utiliza variables de entorno para almacenar información sensible, como las credenciales de Nodemailer.
CORS Configuration: Configura CORS para permitir solicitudes desde dominios específicos (por ejemplo, Vercel).
Logging con Morgan: Utiliza Morgan para registrar las solicitudes HTTP en la consola.
Despliegue en Vercel: Diseñado para ser desplegado fácilmente en Vercel.
Animaciones e Interacciones: Utiliza JavaScript para crear animaciones y mejorar la experiencia del usuario.
Intersection Observer API: Implementa la Intersection Observer API para animaciones y visualización de secciones al hacer scroll.
Estructura del Proyecto:

├── index.js         # Archivo principal del servidor Node.js
├── public/         # Contiene archivos estáticos del frontend
│   ├── index.html   # Archivo HTML principal
│   ├── style.css    # Archivo CSS principal
│   ├── index.js     # Archivo JavaScript principal del frontend
│   └── img/       # Carpeta de imágenes
│       ├── ...      # Archivos de imagen
├── package.json   # Archivo de configuración de Node.js
├── README.md      # Este archivo
├── .env           # Archivo para variables de entorno (no versionado)
└── vercel.json    # Archivo de configuración de Vercel (opcional)
Tecnologías Utilizadas:

BACKEND:
Node.js
Express
Nodemailer
cors
morgan
dotenv


Html 5
Css 
Css Grid, flexbox
JavaScript
API Intersection Observer
DOM 
Fetch
Media Querys
Keyframes
Class list toggle


Envío de correos:

El formulario de contacto en el frontend envía una solicitud POST a la ruta /mailer de la API.
La API utiliza Nodemailer para enviar un correo electrónico con los datos proporcionados en el formulario.


Animaciones e Interacciones:

Intersection Observer API:
El archivo index.js en public/ utiliza la Intersection Observer API para detectar cuándo las secciones del portafolio entran en la ventana del navegador.
Esto se utiliza para activar animaciones y mostrar contenido de forma dinámica.
Texto Dinámico:
El archivo index.js también incluye código para escribir texto dinámicamente en la pantalla, creando un efecto de "máquina de escribir".
Modal:
Se utiliza un modal para mostrar el formulario de contacto al hacer clic en el botón "Contáctame".
