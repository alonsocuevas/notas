import { memo } from 'react';

// --- Componente IconChevronLeft ---
// Este componente renderiza un icono SVG de una flecha apuntando a la izquierda.
// Se utiliza comúnmente para indicar "anterior" o para cerrar un panel/sidebar.
// Utiliza `memo` para optimizar el rendimiento, evitando re-renderizados innecesarios.

const IconChevronLeft = memo(() => (
  // El elemento <svg> define el lienzo para el gráfico.
  // `xmlns`: Define el espacio de nombres XML para SVG.
  // `className`: Clases de Tailwind CSS para definir el tamaño del icono (h-6, w-6).
  // `fill="none"`: Asegura que el interior de la forma no tenga color de relleno.
  // `viewBox="0 0 24 24"`: Define las coordenadas y dimensiones del viewport del SVG.
  // `stroke="currentColor"`: Hace que el color del trazo herede el color del texto circundante.
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* El elemento <path> define la forma del icono. */}
    {/* `strokeLinecap="round"`: Las terminaciones de las líneas son redondas. */}
    {/* `strokeLinejoin="round"`: Las uniones de las líneas son redondas. */}
    {/* `strokeWidth={2}`: El ancho del trazo es de 2 unidades. */}
    {/* `d="M15 19l-7-7 7-7"`: Los comandos de dibujo que forman la flecha. */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
));

export default IconChevronLeft;