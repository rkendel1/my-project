import { ArrowUpRight, Link2, Mail, MapPin, Phone } from 'lucide-react'

const links = [
  { label: 'Email', value: 'randy@kendelconsulting.com', href: 'mailto:randy@kendelconsulting.com', icon: Mail },
  { label: 'Phone', value: '401-484-2831', href: 'tel:+14014842831', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/rkendel', href: 'https://linkedin.com/in/rkendel/', icon: Link2 },
  { label: 'Location', value: 'RI-based · worldwide remote', href: '#', icon: MapPin },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ contact</p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something worth running.
        </h2>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Have a project in the AI-assisted engineering space, or want to talk shop about
          developer tools and platform intelligence? Reach out.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => {
            const Icon = link.icon
            const isExternal = link.href.startsWith('http')
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary/60"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-primary" />
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="mt-1 font-mono text-sm text-foreground">{link.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
