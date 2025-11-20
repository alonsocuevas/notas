'use client';

import { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { displayNameFromPath } from '@/lib/notes-utils';

// --- Componente FileTree ---
// Este componente renderiza de forma recursiva la estructura de archivos y carpetas (el "árbol").
// Utiliza `memo` para optimizar el rendimiento, evitando re-renderizados si sus props no cambian.

const FileTree = memo(function FileTree({ node, onFileClick }) {
  // `node`: Objeto que representa un archivo o carpeta en el árbol.
  // `onFileClick`: Función que se ejecuta cuando se hace clic en un archivo.

  // --- Validación del Nodo ---
  // Si el nodo no es válido (no tiene nombre o ruta), se muestra un error en consola y no se renderiza nada.
  if (!node || typeof node.name === 'undefined' || typeof node.path === 'undefined') {
    console.error("FileTree received an invalid node:", node);
    return null;
  }

  // --- Estado de Apertura ---
  // `isOpen` controla si una carpeta está expandida o contraída.
  const [isOpen, setIsOpen] = useState(false);

  // Determina si el nodo actual es una carpeta (si tiene la propiedad `children`).
  const isDirectory = !!node.children;

  // --- Función para Expandir/Contraer ---
  // `handleToggle` cambia el estado `isOpen` cuando se hace clic en una carpeta.
  // `useCallback` memoriza la función para que no se recree en cada renderizado, mejorando el rendimiento.
  const handleToggle = useCallback(() => {
    if (isDirectory) {
      setIsOpen(!isOpen);
    }
  }, [isDirectory, isOpen]);

  // --- Renderizado del Nodo Raíz (sin nombre) ---
  // Si el nodo no tiene nombre, se asume que es el nodo raíz del árbol.
  // Renderiza directamente a sus hijos sin mostrar nada para sí mismo.
  if (node.name === '') {
    return (
      <ul className="pl-0">
        {node.children?.map(child => (
          <li key={child.path}>
            <FileTree node={child} onFileClick={onFileClick} />
          </li>
        ))}
      </ul>
    );
  }

  // --- Renderizado de un Archivo ---
  // Si el nodo no es una carpeta, se renderiza como un enlace.
  if (!isDirectory) {
    // Limpia el nombre del archivo para mostrar (ej: "MiNota.md" -> "MiNota").
    const displayName = node.name ? node.name.replace(/\.md$/i, '') : displayNameFromPath(node.path);
    return (
      // `Link` de Next.js para una navegación rápida del lado del cliente.
      <Link href={`/notes${node.path}`} passHref>
        <div
          className="cursor-pointer flex items-center py-1 text-synth-light hover:text-synth-pink [text-shadow:0_0_5px_var(--tw-shadow-color)] hover:shadow-synth-pink/50"
          onClick={onFileClick} // Cierra el sidebar en móvil al hacer clic.
        >
          <span className="ml-2">{displayName}</span>
        </div>
      </Link>
    );
  }

  // --- Renderizado de una Carpeta ---
  // Si el nodo es una carpeta con nombre, se renderiza como un elemento desplegable.
  return (
    <div className="my-1">
      {/* El `div` que actúa como botón para expandir/contraer */}
      <div onClick={handleToggle} className="cursor-pointer flex items-center py-1 text-synth-light hover:text-synth-pink [text-shadow:0_0_5px_var(--tw-shadow-color)] hover:shadow-synth-pink/50">
        {/* Muestra una flecha diferente dependiendo de si está abierto o cerrado */}
        <span>{isOpen ? '▼' : '►'}</span>
        <span className="ml-2 font-semibold">{node.name}</span>
      </div>

      {/* Si la carpeta está abierta (`isOpen` es true), renderiza a sus hijos */}
      {isOpen && (
        <ul className="pl-4 border-l border-synth-purple/50">
          {node.children?.map(child => (
            <li key={child.path}>
              {/* Llamada recursiva: `FileTree` se llama a sí mismo para cada hijo */}
              <FileTree node={child} onFileClick={onFileClick} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default FileTree;
