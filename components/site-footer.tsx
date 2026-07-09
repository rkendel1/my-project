export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <p>
          <span className="text-primary">{'>'}</span> Randy Kendel — AI-assisted engineering
        </p>
        <p>© {new Date().getFullYear()} randykendel.com</p>
      </div>
    </footer>
  )
}
