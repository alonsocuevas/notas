'use client';

import { useState, ReactNode, useCallback } from 'react';
import Sidebar from './Sidebar';
import { NoteTree } from '@/types/notes';
import IconChevronLeft from './icons/IconChevronLeft';
import IconChevronRight from './icons/IconChevronRight';

export default function AppContainer({ notesTree, children }: { notesTree: NoteTree | null, children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className="flex">
      <div className={`transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden flex-shrink-0`}>
        <Sidebar notesTree={notesTree} closeSidebar={closeSidebar} />
      </div>
      <main className="flex-1 p-8 pt-20 h-screen overflow-y-auto relative">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-6 left-4 z-10 bg-synth-purple p-2 rounded-full text-synth-cyan hover:bg-synth-pink hover:text-synth-black transition-all duration-200 shadow-lg hover:shadow-synth-pink/50"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <IconChevronLeft /> : <IconChevronRight />}
        </button>
        {children}
      </main>
    </div>
  );
}
