# Prototipo Sistema de Administracion de Universidad Tecnologica Nacional UTN-FRT

![Portada](./assets/img/Admin%20UTN_FRT.png)

## Introduccion

Esta aplicación web es una MPA (aplicación de múltiples páginas) desarrollada con JavaScript vanilla como prototipo de una idea que intenta brindar una solución a un problema de la aplicacion web actual llamada Sysacad.frt.utn.edu.ar en la cual se corrigen errores de interfaz de usuario, usabilidad y escalabilidad.

El objetivo principal de este prototipo es brindar a la comunidad de la UTN-FRT una agradable aplicación web donde puedan gestionar asuntos administrativos y, en un futuro, también educativos. Esto permitiría al estudiante consultar sus notas, promedios, documentación y todo lo relacionado a temas académicos que le competen.

Si bien este proyecto solo está realizado en un 10 %, sería un concepto de mi visión de cómo sería el sistema de la facultad si tuviera que ser refactorizado; de la cual, si tuviera que ser asi seria desarrollada con otras tecnologias y mejores estandares y arquitectura.

## Estructura del sitio web
 
La construcción de este sitio web sigue una metodología "desktop first", adaptándose posteriormente a diferentes tamaños de pantalla. Se han establecido tres puntos de quiebre en:

(mínimo 200px a máximo 767px) => Mobile
(mínimo 768px a máximo 991px) => Tablet
(mínimo 992px a maximo 1200px) => Desktop

La estructura del proyecto incluye un archivo principal llamado index.html donde estará el inicio de sesión. Si el usuario es el correcto, lo llevará a la sección llamada dashboard-student donde estará un sidebar que conecta al dashboard-student con otras secciones de la aplicación, como por ejemplo dashboard-teacher, dashboard-404 y config. Si el usuario no está registrado, podrá acceder a una plantilla llamada register.html para registrarse.

En la carpeta "css" se encuentra el archivo style.css, el cual contiene los estilos de todo el sitio web. Además, utiliza Sass para poder componentizar la lógica del diseño CSS en pequeños ficheros, fáciles de mantener y leer.

La lógica se encuentra en la carpeta script donde existen distintos ficheros JavaScript con el respectivo nombre en el que se utilizará la lógica del mismo. Por ejemplo, en el archivo register.js está desarrollado para la plantilla register.html.

Existe una carpeta llamada JSON que brinda al sistema un archivo llamado teacher.json que tendrá, de manera jerarquizada, distintos profesores para utilizar en la sección dashboard-teacher.html.

Por último, se ha creado una carpeta llamada "assets" en la cual se encuentran las imágenes utilizadas en el sitio web.

## Stack Tecnologico 

### Lenguales
1. HTML5
2. CSS3
3. SASS
4. JAVASCRIPT 

### Framework
1. BOOTSTRAP 5.2.3

### Librerias
2. Toastify.js
3. Ion Icons

### Tipografia
2. Poppins 200, 300, 500, 600, 700