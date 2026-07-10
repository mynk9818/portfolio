'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/50 backdrop-blur-xl shadow-sm shadow-accent/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center">
              <span className="font-serif font-bold text-accent-foreground text-sm">N</span>
            </div>
            <span className="font-serif font-semibold text-lg tracking-tight">Nanak Tanwar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 border-t border-border pt-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
