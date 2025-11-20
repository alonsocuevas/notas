'use client';

import { memo } from 'react';
import VirtualizedFileTree from './VirtualizedFileTree';

// --- Componente Sidebar ---
// Este componente renderiza la barra lateral de la aplicación.
// Utiliza `memo` para evitar re-renderizados innecesarios si las props no cambian.

const Sidebar = memo(function Sidebar({ notesTree, closeSidebar, currentPath }) {
  // `notesTree`: Un objeto que representa la estructura de carpetas y archivos de las notas.
  // `closeSidebar`: Una función que se llama para cerrar la barra lateral (en vista móvil, por ejemplo).
  // `currentPath`: La ruta del apunte que se está viendo actualmente.

  return (
    // Contenedor principal de la barra lateral
    <div className="relative w-64 text-white p-4 h-screen overflow-y-auto">
      {/* Fondo con imagen desenfocada */}
      {/* Este div crea un efecto de fondo con una imagen (`bg-dev-image`) que se desenfoca (`blur-sm`). */}
      {/* El `z-index: -10` lo posiciona detrás del contenido. */}
      <div className="absolute inset-0 bg-dev-image bg-cover bg-center blur-sm -z-10" />

      {/* Contenido de la barra lateral */}
      <div className="relative z-10">
        {/* Título de la sección */}
        <h2 className="text-lg font-semibold mb-4">Apuntes</h2>

        {/* Enlace al portafolio */}
        <a href="https://alonsocuevas.github.io/dev/" className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-0.3 px-4 rounded w-full text-center block">
          Portafolio
        </a>

        {/* Navegación del árbol de archivos */}
        {/* La etiqueta <nav> se utiliza para agrupar los enlaces de navegación. */}
        <nav>
          {/* Renderiza el árbol de archivos solo si `notesTree` tiene datos. */}
          {/* `VirtualizedFileTree` es un componente optimizado para mostrar listas largas de archivos. */}
          {notesTree && <VirtualizedFileTree tree={notesTree} onFileClick={closeSidebar} />}
        </nav>
      </div>
    </div>
  );
});

export default Sidebar;