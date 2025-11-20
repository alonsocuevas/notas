import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { getAllNoteSlugs, readNoteBySlug } from '@/lib/notes';
import { createElement } from 'react';

// --- Página de Nota Dinámica ---
// Esta es una página dinámica de Next.js que renderiza una nota específica.
// La ruta `[...slug]` captura todos los segmentos de la URL después de `/notes/`.
// Por ejemplo, `/notes/js/variables` resulta en `slug` = `['js', 'variables']`.

/**
 * --- generateStaticParams ---
 * Esta función especial de Next.js se ejecuta en el momento de la compilación (build time).
 * Obtiene todas las rutas (`slugs`) de las notas y le dice a Next.js que genere
 * una página HTML estática para cada una. Esto mejora el rendimiento y el SEO.
 *
 * @returns {Promise<object[]>} Un array de objetos `params`, donde cada uno tiene una propiedad `slug`.
 */
export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();
  // Mapea los slugs al formato que Next.js espera: [{ slug: ['js', 'variables'] }, ...]
  return slugs.map(s => ({ slug: s.slug }));
}

/**
 * --- Componente NotePage ---
 * Este es el componente de React que renderiza el contenido de la nota.
 * Es un Server Component, lo que significa que se ejecuta en el servidor.
 *
 * @param {object} props - Las propiedades pasadas por Next.js.
 * @param {object} props.params - Contiene los parámetros dinámicos de la ruta.
 * @param {string[]} props.params.slug - El array de segmentos de la URL.
 */
export default async function NotePage({ params }) {
  const { slug } = params || {};

  // Si no hay slug (por ejemplo, en la página de inicio), muestra un mensaje.
  if (!slug) {
    return <div className="text-center">Selecciona una nota del menú para empezar.</div>;
  }

  // Lee el contenido del archivo Markdown correspondiente al slug.
  const content = await readNoteBySlug(slug);

  // Si la nota no se encuentra, muestra un mensaje de error.
  if (!content) {
    return <div className="text-center">Nota no encontrada.</div>;
  }

  // --- Renderizado del Contenido ---
  return (
    // `<article>` es semánticamente correcto para contenido principal como un post o una nota.
    // `prose` y `prose-invert` son clases de Tailwind Typography para estilizar el Markdown automáticamente.
    <article className="prose prose-invert max-w-none text-orange-400">
      <ReactMarkdown
        // --- Plugins de Remark y Rehype ---
        // `remarkGfm`: Añade soporte para tablas, listas de tareas, etc. (GitHub Flavored Markdown).
        remarkPlugins={[remarkGfm]}
        // `rehypeHighlight`: Resalta la sintaxis del código. Se le pasan los lenguajes a soportar.
        // `rehypeRaw`: Permite renderizar HTML que esté dentro del Markdown (necesario para los spans de colores).
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        
        // --- Componentes Personalizados ---
        // `components` permite sobreescribir cómo se renderizan ciertos elementos de Markdown.
        components={{
          // Personaliza el renderizado del elemento `<blockquote>`.
          blockquote({ node, children, ...props }) {
            // --- Lógica para "Callouts" (Avisos) ---
            // Esta lógica inspecciona el contenido del `blockquote` para ver si empieza con un emoji específico.
            // Si es así, le añade una clase CSS para darle un estilo especial.

            let text = '';
            // Intenta extraer el texto del primer hijo del `blockquote`.
            // La estructura del `node` puede ser compleja, por eso hay varias comprobaciones.
            if (Array.isArray(children) && children.length > 0) {
              const firstChild = children[0];
              if (typeof firstChild === 'string') {
                text = firstChild;
              } else if (
                typeof firstChild === 'object' &&
                firstChild !== null &&
                'props' in firstChild &&
                'children' in firstChild.props
              ) {
                const grandChildren = firstChild.props.children;
                if (typeof grandChildren === 'string') {
                  text = grandChildren;
                } else if (Array.isArray(grandChildren) && grandChildren.length > 0 && typeof grandChildren[0] === 'string') {
                  text = grandChildren[0];
                }
              }
            } else if (typeof children === 'string') {
              text = children;
            }

            text = text.trim();

            // Asigna una clase CSS basada en el emoji inicial.
            let className = '';
            if (text.startsWith('ℹ️')) className = 'info-callout';
            else if (text.startsWith('⚠️')) className = 'warning-callout';
            else if (text.startsWith('🔥')) className = 'danger-callout';

            // Crea y devuelve el elemento `<blockquote>` con la clase CSS (si aplica).
            return createElement('blockquote', { className, ...props }, children);
          },
        }}
      >
        {/* El contenido del archivo Markdown se pasa aquí para ser procesado. */}
        {content}
      </ReactMarkdown>
    </article>
  );
}