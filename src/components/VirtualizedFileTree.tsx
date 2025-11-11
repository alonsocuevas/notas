'use client';

import { memo } from 'react';
import { NoteTree } from '@/types/notes';
import FileTree from './FileTree'; // Import the non-virtualized FileTree

interface VirtualizedFileTreeProps {
  tree: NoteTree;
  onFileClick?: () => void;
}

// This component now acts as a simple wrapper for the FileTree,
// effectively disabling the virtualization logic.
const VirtualizedFileTree = memo(function VirtualizedFileTree({ tree, onFileClick }: VirtualizedFileTreeProps) {
  if (!tree) {
    return null;
  }

  return (
    <div className="h-full overflow-y-auto">
      <FileTree node={tree} onFileClick={onFileClick} />
    </div>
  );
});

export default VirtualizedFileTree;