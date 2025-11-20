'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function ClientSidebarWrapper({ notesTree }) {
  const pathname = usePathname();
  return <Sidebar notesTree={notesTree} currentPath={pathname} />;
}
