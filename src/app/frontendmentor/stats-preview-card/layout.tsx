import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stats preview card component React',
  description:
    'This is a great small challenge to help get you used to building to a design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}