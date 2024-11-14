import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/projects' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' }
]

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-100 bg-background/75 bg-opacity-10 bg-clip-padding py-6 backdrop-blur-md backdrop-filter dark:border-black'>
      <nav className='flex items-center justify-between px-2'>
        <ul className='flex gap-4 sm:gap-8'>
          {navLinks.map((nav, id) => (
            <li key={id} className='link'>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <div className='flex'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
