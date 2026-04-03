import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WarehousePro Logistics',
  description: 'Reliable warehouse, lumper, and logistics support for warehouses, ports, and distribution centers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}