'use client'

import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute='class'
      disableTransitionOnChange
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  )
}

function ToastProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      className='mt-12'
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}
