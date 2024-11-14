'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      size='icon'
      variant='ghost'
      className='[&_svg]:size-5'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'light' ? (
        <MoonIcon className='size -4 text-indigo-500' />
      ) : (
        <SunIcon className='size -4 text-orange-300' />
      )}
      <span className='sr-only'>Theme Toggle</span>
    </Button>
  )
}
