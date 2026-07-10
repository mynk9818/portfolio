'use client'

import { Mail } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24 border-b border-border">
      <div className="max-w-3xl">
        <p className="text-sm tracking-widest text-accent uppercase font-medium mb-6">Flutter Developer</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-600 to-accent dark:from-white dark:via-purple-200 dark:to-accent drop-shadow-sm">
          Crafting exceptional mobile experiences
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          <em>Full-stack developer</em> specializing in Flutter, React Native, and modern web frameworks.
          Expertise in building scalable cross-platform applications with GetX, Bloc, Next, and Nuxt.
          Over 2 years of professional experience delivering production-ready solutions serving millions of users.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 group"
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </button>
          <a
            href="https://github.com/mynk9818"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border rounded-full font-medium tracking-wide hover:bg-secondary transition-all duration-300"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
