import type { Metadata } from 'next'

import './globals.css'
import './neon-code-theme.css';
import Sidebar from '@/components/Sidebar'
import AppContainer from '@/components/AppContainer'
import { getNotesTree } from '@/lib/notes';

export const metadata: Metadata = {
  title: 'Notas',
  description: 'A simple markdown notes viewer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const notesTree = await getNotesTree();
  return (
    <html lang="en">
      <body className={`bg-synth-black text-synth-light`}>
        <AppContainer notesTree={notesTree}>
          {children}
        </AppContainer>
      </body>
    </html>
  )
}
