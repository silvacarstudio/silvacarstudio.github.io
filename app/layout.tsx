import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silva Car Studio — Detailing Premium',
  description: 'Detailing, protección cerámica y cuidado artesanal para vehículos premium en Madrid.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d0c',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
