import React from 'react';

// --- Componente Home ---
// Esta es la página de inicio de la aplicación.
// Se muestra cuando el usuario visita la ruta raíz (`/`).

export default function Home() {
  return (
    // Contenedor principal que centra el contenido vertical y horizontalmente.
    // `flex items-center justify-center`: Centra el contenido usando Flexbox.
    // `h-full`: Asegura que el contenedor ocupe toda la altura disponible.
    <div className="flex items-center justify-center h-full text-center">
      <div>
        {/* Título de bienvenida */}
        <h1 className="text-2xl font-bold mb-4">Bienvenido al visor de notas de Alonso</h1>
        
        {/* Instrucción para el usuario */}
        <p>Selecciona una nota del menú de la izquierda para empezar.</p>
      </div>
    </div>
  );
}