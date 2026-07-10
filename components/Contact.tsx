import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-12 md:p-20 text-center shadow-[0_0_40px_rgba(139,92,246,0.1)]">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in discussing new projects, opportunities, and ideas.
            Feel free to reach out—I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:mtanwar363392@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              <Mail size={20} />
              <span>mtanwar363392@gmail.com</span>
            </a>
            <a
              href="tel:+919818686683"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full font-medium tracking-wide hover:bg-secondary transition-all duration-300"
            >
              <span>+91 9818686683</span>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mynk9818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-full hover:bg-secondary transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/nanak-tanwar-111434197"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-full hover:bg-secondary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
