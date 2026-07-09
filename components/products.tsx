import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { products } from '@/lib/products'

export function Products() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ work</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Products I&apos;ve created
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            {products.length.toString().padStart(2, '0')} shipped platforms
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon
            const hasMultiLinks = Boolean(product.links?.length)
            // Whole card is clickable only when there's a single destination.
            const isLink = Boolean(product.href) && !hasMultiLinks
            const Wrapper = isLink ? 'a' : 'div'
            return (
              <Wrapper
                key={product.id}
                {...(isLink
                  ? { href: product.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group relative flex flex-col bg-card p-7 transition-colors hover:bg-secondary/60"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {product.status}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
                  {isLink && (
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  )}
                </div>
                <p className="mt-1 font-mono text-sm text-primary/90">{product.tagline}</p>

                <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {hasMultiLinks && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-mono text-[11px] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        <ExternalLink className="size-3" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
