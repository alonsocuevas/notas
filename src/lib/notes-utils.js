// --- Utilidades Seguras para el Cliente ---
// Este archivo contiene funciones de utilidad que son seguras para usar en el lado del cliente (en el navegador).
// No contienen lógica sensible del lado del servidor.

/**
 * --- displayNameFromPath ---
 * Genera un nombre legible para mostrar a partir de una ruta de archivo.
 * Por ejemplo, transforma "/javascript/variables_y_tipos.md" en "variables y tipos".
 *
 * @param {string | string[]} p - La ruta del archivo, puede ser un string o un array de segmentos de ruta.
 * @returns {string} El nombre limpio y legible.
 */
export function displayNameFromPath(p) {
  // Si la ruta no existe o es nula, devuelve un string vacío.
  if (!p) return '';

  // Si la ruta es un array (ej: ['javascript', 'variables.md']),
  // toma el último elemento.
  if (Array.isArray(p)) {
    const lastName = String(p[p.length - 1] || '');
    // Elimina la extensión ".md" (sin importar mayúsculas/minúsculas).
    // Reemplaza los guiones bajos con espacios para un formato más legible.
    return lastName.replace(/\.md$/i, '').replace(/_/g, ' ');
  }

  // Si la ruta es un string (ej: "/javascript/variables.md"),
  // la divide por "/" y toma el último segmento.
  if (typeof p === 'string') {
    const last = p.split('/').pop() || '';
    // Realiza las mismas transformaciones: quitar ".md" y reemplazar guiones bajos.
    return last.replace(/\.md$/i, '').replace(/_/g, ' ');
  }

  // Si el tipo de dato no es ni array ni string, devuelve un string vacío.
  return '';
}