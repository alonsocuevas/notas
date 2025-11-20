El proposito de esto es tener una app que sirva como almacenamiento y visor de notas con una apariencia especifica, simple, directa y totalmente gratis. Esto empezo como un proyecto básico de Next.js, al instalarse con `create-next-app`, incluyo lo siguiente:

- `app/:` Contiene los archivos principales de tu aplicación, como las páginas y las plantillas.
  - <span style="color:orange">layout.js</span>: Plantilla principal que se aplica a todas las páginas.
  - <span style="color:orange">page.js</span>: La página de inicio de la aplicación.
  - <span style="color:orange">globals.css</span>: Archivo de estilos globales.
- `public/`: Para archivos estáticos como imágenes, fuentes, etc.
- <span style="color:orange">package.json:</span>: Define los scripts del proyecto y gestiona las dependencias.
- <span style="color:orange">next.config.js:</span>: Archivo de configuración de Next.js.
- <span style="color:orange">.gitignore:</span> Especifica qué archivos y carpetas deben ser ignorados por Git.
- <span style="color:orange">postcss.config.js</span> y <span style="color:orange">tailwind.config.js</span>: Archivos de configuración para Tailwind CSS (si se elige durante la instalación).
---
Ahora, en **este proyecto en particular**, se han intervenido y añadido varias partes para construir la aplicación que existe ahora:

**Carpetas y archivos añadidos:**

- notes/: Esta carpeta es completamente nueva y es el corazón del contenido de la aplicación. Almacena todos los apuntes en formato Markdown.
- src/components/: Se creó para organizar los componentes reutilizables de React que forman la interfaz de usuario, como Sidebar.jsx, FileTree.jsx, etc.
- src/lib/: Contiene la lógica de negocio y funciones de utilidad, como notes-utils.js y notes.js, que se encargan de leer y procesar los archivos de la carpeta notes/.
- src/app/notes/[...slug]/page.jsx: Esta es una ruta dinámica. Es una adición clave que permite a Next.js generar una página por cada apunte que exista en la carpeta notes/.
- src/app/neon-code-theme.css: Se añadió para dar un estilo específico a los bloques de código.
- scripts/: Contiene scripts personalizados para tareas específicas del proyecto.

**Módulos (dependencias) instalados:**

Para lograr la funcionalidad actual, se añadieron las siguientes dependencias clave (visibles en package.json):

- react-markdown: Es el módulo principal que permite convertir el contenido de los archivos Markdown a HTML para que se pueda mostrar en la página.
- rehype-highlight: Un plugin para react-markdown que se encarga de resaltar la sintaxis del código dentro de los apuntes (por ejemplo, colorear el código de Python o JavaScript).
- remark-gfm: Otro plugin para react-markdown que añade soporte para "GitHub Flavored Markdown", que permite crear tablas, listas de tareas, etc.
- @tailwindcss/typography: Un plugin de Tailwind CSS que proporciona estilos por defecto para el texto renderizado desde Markdown, asegurando que se vea bien sin tener que estilizar cada párrafo, título, etc., manualmente.


Como puedes ver este es un proyecto de Next.js, y su estructura se organiza de la siguiente manera:

1. Rutas (Routing)
Next.js utiliza un sistema de enrutamiento basado en el sistema de archivos. Todo lo que está dentro del directorio src/app/ se asigna a una URL.

src/app/page.jsx: Es la página principal de la aplicación, la que ves cuando visitas la raíz del sitio (/).
src/app/notes/[...slug]/page.jsx: Esta es una ruta dinámica. Permite mostrar diferentes notas basadas en la URL. Por ejemplo, /notes/javascript/variables mostrará la nota correspondiente a esa ruta.
2. Componentes (Similares a Controladores/Vistas)
Los componentes de React son los bloques de construcción de la interfaz de usuario. En este proyecto, se encuentran en src/components/ y cada uno tiene una responsabilidad específica:

Sidebar.jsx: La barra lateral que muestra el árbol de archivos de las notas.
FileTree.jsx: El componente que renderiza la estructura de carpetas y archivos en la barra lateral.
AppContainer.jsx: Un componente que envuelve el contenido principal de la aplicación.
Iconos: Los componentes dentro de src/components/icons/ son simplemente íconos utilizados en la interfaz.
En el patrón MVC (Modelo-Vista-Controlador), estos componentes actuarían tanto de Vistas (porque definen la UI) como de Controladores (porque manejan la lógica de la interacción del usuario).

3. Lógica de Negocio (Similar a Modelos/Controladores)
La lógica para obtener y procesar los datos de las notas se encuentra en el directorio src/lib/.

src/lib/notes.js y src/lib/notes-utils.js: Estos archivos contienen las funciones para leer los archivos de markdown del directorio notes/, procesarlos y estructurarlos para que los componentes puedan mostrarlos. Esto sería el equivalente a la capa de Modelo o parte de la lógica del Controlador en una arquitectura tradicional, ya que se encargan de la manipulación de los datos.

4. Estilos
Los estilos que definen la apariencia de la aplicación están en varios archivos:

src/app/globals.css: Estilos globales que se aplican a toda la aplicación.
src/app/neon-code-theme.css: El archivo que da el estilo específico a los bloques de código, con el tema de neón que he estado ajustando.
tailwind.config.js: La configuración de Tailwind CSS, un framework de CSS que permite estilizar componentes de forma rápida y declarativa.

5. Configuración del Proyecto
Archivos en la raíz del proyecto que definen cómo se construye y se ejecuta:

next.config.js: Archivo de configuración principal de Next.js.
package.json: Define los scripts del proyecto (como npm run dev) y las dependencias (librerías externas).

Resumen de la División (Analogía con MVC)
Rutas: src/app/ (manejado por Next.js).
Vistas/Controladores (Componentes): src/components/ y las páginas en src/app/.
Modelos/Lógica de Datos: src/lib/.
Middleware: No hay un archivo de middleware explícito en este proyecto (middleware.js), pero next.config.js puede contener configuraciones que actúan de manera similar para reescrituras de rutas.










---
# Estilos de texto
Cursiva: *texto en cursiva*

Negrita: **texto en negrita**

Tachado: ~~texto tachado~~

# Titulo (H1)
## Subtítulo (H2)
### Sub-subtítulo (H3)
#### Y así sucesivamente...

Texto sin modificaciones o algun estilo.

- Item de lista 1
- Item de lista 2

---

# Fragmento de codigo

```javascript
console.log("Hello, world!");
```
---
Citas o Texto Enmarcado / Bloque de cita.

> Este es un texto enmarcado o una cita. Ideal para resaltar un párrafo completo.
--- 
"Callouts" o Avisos
Markdown no tiene un formato específico para "callouts" como en Notion, pero puedes simularlos de forma muy efectiva usando blockquotes y emojis:

> ℹ️ **Nota:** Esta es una nota informativa.

> ⚠️ **Advertencia:** Ten cuidado con este punto.

> 🔥 **Importante:** Esto es algo que no debes olvidar.
---
# Colorear Texto

Esto es texto <span style="color:red">rojo</span> y esto es <span style="color:blue">azul</span>.

## Using external notes repository

You can keep your Markdown notes in a separate Git repository and clone them into this project before running the app.

1. Clone notes into `notes/`:

```bash
./scripts/fetch-notes.sh git@github.com:youruser/notas-content.git
```

2. Start the dev server (example):

```bash
export NOTES_DIR=$(pwd)/notes
npm run dev
```

This sets `NOTES_DIR` so the app reads notes from the cloned repo.



