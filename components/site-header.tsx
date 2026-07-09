const navItems = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-primary">{'>'}</span>
          <span className="font-medium tracking-tight">randykendel</span>
          <span className="text-muted-foreground">.com</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1 font-mono text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="text-primary/70">/</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
