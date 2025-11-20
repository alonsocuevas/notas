'use client';

import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import IconChevronLeft from './icons/IconChevronLeft';
import IconChevronRight from './icons/IconChevronRight';

// --- Componente AppContainer ---
// Este es el componente principal que estructura la disposición de la aplicación.
// Gestiona el estado de la barra lateral (abierta/cerrada) y la muestra junto con el contenido principal.

export default function AppContainer({ notesTree, children }) {
  // `notesTree`: La estructura de archivos de las notas, que se pasará al Sidebar.
  // `children`: El contenido de la página actual que se mostrará en el área principal.

  // --- Estado de la Barra Lateral ---
  // `isSidebarOpen` controla si la barra lateral está visible o no.
  // Por defecto, la barra lateral está abierta (`true`).
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // `pathname` obtiene la ruta actual de la URL (ej. "/notes/javascript/variables").
  // Se usa para saber qué página está activa.
  const pathname = usePathname();

  // --- Función para Cerrar la Barra Lateral ---
  // `closeSidebar` es una función para cerrar la barra lateral.
  // `useCallback` la memoriza para que no se recree en cada renderizado, optimizando el rendimiento.
  // Se pasa al Sidebar para que pueda cerrarse desde dentro (ej. al hacer clic en un archivo en móvil).
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    // Contenedor principal que usa Flexbox para alinear la barra lateral y el contenido.
    <div className="flex">
      {/* Contenedor de la Barra Lateral */}
      {/* La clase `w-64` o `w-0` se aplica según `isSidebarOpen` para mostrar u ocultar la barra lateral. */}
      {/* `transition-width` y `duration-300` animan el cambio de ancho. */}
      <div className={`transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden flex-shrink-0`}>
        <Sidebar notesTree={notesTree} closeSidebar={closeSidebar} currentPath={pathname} />
      </div>

      {/* Contenedor del Contenido Principal */}
      <main className="flex-1 p-8 pt-20 h-screen overflow-y-auto relative">
        {/* Botón para Abrir/Cerrar la Barra Lateral */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-6 left-4 z-10 bg-synth-purple p-2 rounded-full text-synth-cyan hover:bg-synth-pink hover:text-synth-black transition-all duration-200 shadow-lg hover:shadow-synth-pink/50"
          aria-label="Toggle sidebar"
        >
          {/* Cambia el ícono dependiendo de si la barra lateral está abierta o cerrada. */}
          {isSidebarOpen ? <IconChevronLeft /> : <IconChevronRight />}
        </button>

        {/* Aquí se renderiza el contenido de la página actual (por ejemplo, el contenido de una nota). */}
        {children}
      </main>
    </div>
  );
}