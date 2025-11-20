import './globals.css';
import './neon-code-theme.css';
import AppContainer from '@/components/AppContainer';
import { getNotesTree } from '@/lib/notes';

// --- Componente RootLayout ---
// Este es el Layout principal de la aplicación. Next.js lo utiliza para envolver
// todas las páginas. Es el lugar perfecto para poner elementos comunes como
// la cabecera, el pie de página o, en este caso, la barra lateral.

export default async function RootLayout({ children }) {
  // `children`: Representa el contenido de la página que se está renderizando actualmente.

  // --- Obtención de Datos en el Servidor ---
  // `getNotesTree` es una función asíncrona que se ejecuta en el servidor
  // para obtener la estructura de archivos de las notas ANTES de que la página se envíe al cliente.
  // Esto es una característica clave de los Server Components en Next.js.
  const notesTree = await getNotesTree();

  return (
    <html lang="es">
      <head>
        {/* Puedes añadir metadatos como el título, descripción, etc. aquí */}
        <title>Apuntes de Desarrollo</title>
        <meta name="description" content="Una colección de apuntes sobre desarrollo de software." />
      </head>
      <body className={`bg-synth-black`}>
        {/* --- Contenedor Principal de la Aplicación --- */}
        {/* `AppContainer` es el componente que organiza la barra lateral y el contenido principal. */}
        {/* Le pasamos `notesTree` para que el Sidebar pueda renderizar el árbol de archivos. */}
        <AppContainer notesTree={notesTree}>
          {/* `children` es el contenido de la página actual (ej. la página de inicio o una nota). */}
          {/* Este contenido se mostrará en el área principal, a la derecha de la barra lateral. */}
          {children}
        </AppContainer>
      </body>
    </html>
  );
}