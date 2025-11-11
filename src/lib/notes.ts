import fs from 'fs/promises'; // Importar la versión de promesas de fs
import path from 'path';
import { cache } from 'react';

export type { NoteTree } from '@/types/notes';
import { NoteTree } from '@/types/notes';

const notesDirectory = path.join(process.cwd(), 'notes');

export const getNotesTree = cache(async (): Promise<NoteTree | null> => { // Hacer la función asíncrona y tipar el retorno
  try {
    await fs.access(notesDirectory); // Usar fs.promises.access para verificar existencia
  } catch (error) {
    console.error("Notes directory not found:", notesDirectory);
    return null;
  }



  const buildTree = async (currentPath: string): Promise<NoteTree> => { // Hacer la función asíncrona
    const name = path.basename(currentPath) || '';
    const relativePath = path.relative(notesDirectory, currentPath);
    const stats = await fs.stat(currentPath);

    const item: NoteTree = {
      name: name,
      path: relativePath ? `/${relativePath.replace(/\\/g, '/')}` : '/',
    };
    console.log("Building tree item:", { name, relativePath, item });

    if (stats.isDirectory()) {
      const childrenNames = await fs.readdir(currentPath); // Usar await fs.promises.readdir
      const childrenPromises = childrenNames.map(child => buildTree(path.join(currentPath, child)));
      const children = (await Promise.all(childrenPromises)) // Esperar todas las promesas de los hijos
        .sort((a, b) => {
          const aIsDirectory = !!a.children;
          const bIsDirectory = !!b.children;
          if (aIsDirectory && !bIsDirectory) return -1;
          if (!aIsDirectory && bIsDirectory) return 1;
          return a.name.localeCompare(b.name);
        });
      
      if (children.length > 0) {
        item.children = children;
      }
    }
    return item;
  };

  const rootChildrenNames = await fs.readdir(notesDirectory); // Usar await fs.promises.readdir
  const rootChildrenPromises = rootChildrenNames.map(child => buildTree(path.join(notesDirectory, child)));
  const rootChildren = (await Promise.all(rootChildrenPromises)) // Esperar todas las promesas de los hijos raíz
    .sort((a, b) => {
      const aIsDirectory = !!a.children;
      const bIsDirectory = !!b.children;
      if (aIsDirectory && !bIsDirectory) return -1;
      if (!aIsDirectory && bIsDirectory) return 1;
      return a.name.localeCompare(b.name);
    });



  return {
    name: '', // Nombre vacío para que no se muestre en la UI
    path: '/',
    children: rootChildren,
  };
});

export async function getAllNoteSlugs() { // También hacer esta función asíncrona
  const getAllFiles = async (dirPath: string, arrayOfFiles: string[] = []): Promise<string[]> => { // Hacer la función asíncrona
    const files = await fs.readdir(dirPath); // Usar await fs.promises.readdir

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = await fs.stat(filePath); // Usar await fs.promises.stat
      if (stats.isDirectory()) {
        arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    }

    return arrayOfFiles;
  };

  const allFiles = await getAllFiles(notesDirectory);

  return allFiles
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const relativeFilePath = path.relative(notesDirectory, file);
      const slug = relativeFilePath.split(path.sep);
      return { slug };
    });
}