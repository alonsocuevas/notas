'use client';

import { memo } from 'react';
import VirtualizedFileTree from './VirtualizedFileTree';
import { NoteTree } from '@/types/notes';

const Sidebar = memo(function Sidebar({ notesTree, closeSidebar }: { notesTree: NoteTree | null, closeSidebar: () => void }) {

  return (
    <div className="relative w-64 text-white p-4 h-screen overflow-y-auto">
      <div className="absolute inset-0 bg-dev-image bg-cover bg-center blur-sm -z-10" />
      <div className="relative z-10">
        <h2 className="text-lg font-semibold mb-4">Apuntes Técnicos</h2>

        <nav>
            {notesTree && <VirtualizedFileTree tree={notesTree} onFileClick={closeSidebar} />}
        </nav>
      </div>
    </div>
  );
});

export default Sidebar;
