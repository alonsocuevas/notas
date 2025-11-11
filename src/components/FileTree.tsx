'use client';

import { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { NoteTree } from '@/lib/notes';

interface FileTreeProps {
  node: NoteTree;
  onFileClick?: () => void;
}

const FileTree = memo(function FileTree({ node, onFileClick }: FileTreeProps) {
  if (!node || typeof node.name === 'undefined' || typeof node.path === 'undefined') {
    console.error("FileTree received an invalid node:", node);
    return null;
  }
  console.log("FileTree node:", node);
  const [isOpen, setIsOpen] = useState(false);

  const isDirectory = !!node.children;

  const handleToggle = useCallback(() => {
    if (isDirectory) {
      setIsOpen(!isOpen);
    }
  }, [isDirectory, isOpen]);

  // It's a directory
  if (node.name === '') {
    return (
      <ul className="pl-0">
        {node.children?.map(child => (
          <li key={child.path}>
            <FileTree node={child} onFileClick={onFileClick} />
          </li>
        ))}
      </ul>
    );
  }

  // It's a file
  if (!isDirectory) {
    return (
      <Link href={`/notes${node.path}`} passHref>
        <div
          className="cursor-pointer flex items-center py-1 text-synth-light hover:text-synth-pink [text-shadow:0_0_5px_var(--tw-shadow-color)] hover:shadow-synth-pink/50"
          onClick={onFileClick}
        >
          <span className="ml-2">{node.name.replace(/\.md$/, '')}</span>
        </div>
      </Link>
    );
  }

  // It's a directory with a name
  return (
    <div className="my-1">
      <div onClick={handleToggle} className="cursor-pointer flex items-center py-1 text-synth-light hover:text-synth-pink [text-shadow:0_0_5px_var(--tw-shadow-color)] hover:shadow-synth-pink/50">
        <span>{isOpen ? '▼' : '►'}</span>
        <span className="ml-2 font-semibold">{node.name}</span>
      </div>
      {isOpen && (
        <ul className="pl-4 border-l border-synth-purple/50">
          {node.children?.map(child => (
            <li key={child.path}>
              <FileTree node={child} onFileClick={onFileClick} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default FileTree;
