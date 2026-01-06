import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VisionBoard AI - Turn Your Vision Board Into a Clear Life Plan',
  description: 'Upload your vision board. We transform it into goals, timelines, and daily clarity. Track progress, reflect daily, and grow intentionally.',
  keywords: 'vision board, goal tracking, AI goals, personal development, life planning',
  authors: [{ name: 'VisionBoard AI' }],
  openGraph: {
    title: 'VisionBoard AI - Turn Your Vision Board Into a Clear Life Plan',
    description: 'Upload your vision board. We transform it into goals, timelines, and daily clarity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

