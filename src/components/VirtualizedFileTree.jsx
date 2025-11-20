'use client';

import { memo } from 'react';
import FileTree from './FileTree'; // Import the non-virtualized FileTree

// --- Componente VirtualizedFileTree ---
// Este componente originalmente estaba destinado a implementar la virtualización
// para optimizar el renderizado de árboles de archivos muy grandes.
// Sin embargo, en la implementación actual, actúa como un simple envoltorio
// para el componente `FileTree` no virtualizado, deshabilitando de facto
// cualquier lógica de virtualización.

const VirtualizedFileTree = memo(function VirtualizedFileTree({ tree, onFileClick }) {
  // `tree`: El objeto que representa la estructura de archivos y carpetas.
  // `onFileClick`: Función que se ejecuta cuando se hace clic en un archivo.

  // Si no se proporciona un árbol, no se renderiza nada.
  if (!tree) {
    return null;
  }

  return (
    // Contenedor que permite el desplazamiento vertical si el contenido excede la altura.
    <div className="h-full overflow-y-auto">
      {/* Renderiza el árbol de archivos utilizando el componente `FileTree`. */}
      {/* Esto significa que, por ahora, no hay virtualización activa. */}
      <FileTree node={tree} onFileClick={onFileClick} />
    </div>
  );
});

export default VirtualizedFileTree;