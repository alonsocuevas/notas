/** @type {import('next').NextConfig} */

// --- Configuración de Next.js ---
// Este archivo se utiliza para configurar el comportamiento de Next.js.

const nextConfig = {
  // --- Modo de Salida: Exportación Estática ---
  // `output: 'export'` le dice a Next.js que genere un sitio completamente estático
  // en la carpeta `out/` cuando se ejecuta el comando `npm run build`.
  // Esto significa que no se necesita un servidor de Node.js para producción.
  // El sitio puede ser alojado en cualquier servicio de hosting estático como GitHub Pages,
  // Vercel, Netlify, etc.
  output: 'export',

  // Aquí se podrían añadir otras configuraciones, como:
  // - `images`: para configurar el componente <Image> de Next.js.
  // - `reactStrictMode`: para activar el modo estricto de React.
  // - `webpack`: para personalizar la configuración de Webpack.
};

module.exports = nextConfig;