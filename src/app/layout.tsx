import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gateball',
  description: 'Gerenciador de campeonato Gateball',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-main-dominant font-assistant'>{children}</body>
    </html>
  )
}
