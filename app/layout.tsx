import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nanak Tanwar | Flutter Developer',
  description: 'Flutter developer specializing in GetX and Bloc. Building scalable cross-platform applications with real-time features and REST API integration.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased relative min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient background glows */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--glow-1)] blur-[120px]" />
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[var(--glow-2)] blur-[120px]" />
            <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[var(--glow-3)] blur-[120px]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
