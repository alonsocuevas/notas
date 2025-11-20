import { promises as fs } from 'fs';
import path from 'path';

// --- Lógica de Acceso a Datos de las Notas (Lado del Servidor) ---
// Este archivo contiene las funciones para leer el sistema de archivos,
// construir la estructura de las notas y obtener el contenido de cada nota.
// SOLO debe usarse en el lado del servidor (Server Components o `getStaticProps`).

// --- Directorio de Notas ---
// Determina la ubicación de la carpeta `notes`.
// Permite sobreescribir la ruta usando una variable de entorno `NOTES_DIR`.
// Si `NOTES_DIR` no está definida, usa la carpeta `notes` en la raíz del proyecto.
const NOTES_DIR = process.env.NOTES_DIR
  ? path.resolve(process.env.NOTES_DIR)
  : path.join(process.cwd(), 'notes');

/**
 * --- buildTree ---
 * Función recursiva que explora el directorio de notas y construye un objeto
 * que representa la estructura de carpetas y archivos.
 *
 * @param {string} dirPath - La ruta del directorio a explorar.
 * @param {string[]} prefix - Un array que acumula los segmentos de la ruta para construir la URL.
 * @returns {Promise<object[]>} Un array de nodos (archivos o carpetas).
 */
async function buildTree(dirPath = NOTES_DIR, prefix = []) {
  // Lee todas las entradas (archivos y carpetas) del directorio actual.
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const nodes = [];

  for (const ent of entries) {
    const fullPath = path.join(dirPath, ent.name);

    // Si es una carpeta, crea un nodo de directorio y llama a `buildTree` recursivamente para sus hijos.
    if (ent.isDirectory()) {
      const nodePrefix = prefix.concat(ent.name);
      nodes.push({
        name: ent.name,
        path: '/' + nodePrefix.join('/'),
        children: await buildTree(fullPath, nodePrefix),
      });
    }
    // Si es un archivo, crea un nodo de archivo.
    else if (ent.isFile()) {
      // Elimina la extensión .md del nombre para la ruta.
      const name = ent.name.replace(/\.md$/i, '');
      const nodePrefix = prefix.concat(name);
      nodes.push({
        name: ent.name, // Mantiene el nombre original del archivo (ej: "MiNota.md")
        path: '/' + nodePrefix.join('/'),
      });
    }
  }

  return nodes;
}

/**
 * --- getNotesTree ---
 * Obtiene la estructura completa de archivos y carpetas de las notas.
 * Es el punto de entrada para construir el árbol que se usará en el Sidebar.
 *
 * @returns {Promise<object>} El objeto raíz del árbol de notas.
 */
export async function getNotesTree() {
  try {
    // Devuelve un nodo raíz que contiene el árbol generado por `buildTree`.
    return {
      name: '',
      path: '/',
      children: await buildTree(NOTES_DIR),
    };
  } catch (e) {
    // Si hay un error (ej: la carpeta `notes` no existe), devuelve un árbol vacío.
    console.error("Error building notes tree:", e);
    return { name: '', path: '/', children: [] };
  }
}

/**
 * --- getAllNoteSlugs ---
 * Obtiene todas las rutas (`slugs`) de las notas existentes.
 * Esta función es crucial para `generateStaticParams` en Next.js,
 * que pre-renderiza una página por cada nota en el momento de la compilación.
 *
 * @returns {Promise<object[]>} Un array de objetos, cada uno con una propiedad `slug` (un array de strings).
 */
export async function getAllNoteSlugs() {
  const tree = await getNotesTree();
  const slugs = [];

  // Función interna recursiva para recorrer el árbol.
  function walk(nodes) {
    for (const n of nodes) {
      // Si es una carpeta, sigue explorando a sus hijos.
      if (n.children && n.children.length > 0) {
        walk(n.children);
      } else {
        // Si es un archivo, extrae su ruta (`path`).
        if (typeof n.path === 'string') {
          // Convierte el path (ej: "/js/variables") en un array de segmentos (ej: ["js", "variables"]).
          const parts = n.path.split('/').filter(Boolean);
          // Lo añade a la lista de slugs en el formato que `generateStaticParams` espera.
          slugs.push({ slug: parts });
        }
      }
    }
  }

  walk(tree.children || []);
  return slugs;
}

/**
 * --- readNoteBySlug ---
 * Lee el contenido de un archivo de nota específico basado en su `slug`.
 *
 * @param {string[]} slugParts - Un array de segmentos de ruta (ej: ["javascript", "variables"]).
 * @returns {Promise<string|null>} El contenido del archivo en formato string, o `null` si no se encuentra.
 */
export async function readNoteBySlug(slugParts) {
  // Construye la ruta completa al archivo .md.
  const filePath = path.join(NOTES_DIR, ...slugParts) + '.md';
  try {
    // Lee el archivo y devuelve su contenido.
    return await fs.readFile(filePath, 'utf8');
  } catch (e) {
    // Si el archivo no existe o hay un error, devuelve `null`.
    return null;
  }
}