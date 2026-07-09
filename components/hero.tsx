import Image from 'next/image'
import { ArrowUpRight, Cpu, Terminal, Workflow } from 'lucide-react'

const capabilities = [
  { icon: Terminal, label: 'AI Tooling' },
  { icon: Workflow, label: 'Automation' },
  { icon: Cpu, label: 'Platform Intel' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 30% 30%, black, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          available for new work
        </div>

        <h1 className="mt-8 text-balance font-mono text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Randy
          <br />
          Kendel
        </h1>

        <p className="mt-8 font-mono text-sm text-foreground sm:text-base">
          Builder <span className="text-muted-foreground">·</span> Doer <span className="text-muted-foreground">·</span> Leader
        </p>

        <p className="mt-5 max-w-xl text-pretty font-mono text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m open to interesting projects and initiatives where failure isn&apos;t an option —
          including hands-on project and program management.
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-primary sm:text-sm">
          <span className="text-muted-foreground">{'>'}</span>
          <span>Technical Product Leadership</span>
          <span className="text-muted-foreground">|</span>
          <span>Identity Platforms</span>
          <span className="text-muted-foreground">|</span>
          <span>Data Products</span>
          <span className="text-muted-foreground">|</span>
          <span>AI-Powered Experiences</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            view work
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:bg-secondary"
          >
            get in touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
          {capabilities.map((cap) => (
            <div key={cap.label} className="flex items-center gap-2.5">
              <cap.icon className="size-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {cap.label}
              </span>
            </div>
          ))}
        </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="relative mx-auto aspect-square w-56 sm:w-72 lg:w-full lg:max-w-xs">
            <div className="relative size-full overflow-hidden rounded-full border-2 border-primary/60 bg-secondary/40 ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
              <Image
                src="/images/randy-avatar.jpeg"
                alt="Randy Kendel"
                fill
                priority
                sizes="(max-width: 1024px) 288px, 320px"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              <span>Randy Kendel</span>
              <span className="text-primary">/ builder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
