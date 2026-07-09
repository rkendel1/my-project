const focusAreas = [
  {
    k: 'platform_intelligence',
    v: 'Systems that understand codebases and software — turning raw repositories into architecture, insight, and action.',
  },
  {
    k: 'workflow_automation',
    v: 'Removing the friction between intent and execution so teams and users can move at the speed of thought.',
  },
  {
    k: 'structured_decisions',
    v: 'AI-assisted planning that transforms fuzzy concepts into concrete, executable strategy.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">/ about</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A product leader who builds and ships.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Product leader and builder with 10+ years building and scaling 0→1 products across AI,
            cloud platforms, and high-stakes regulated environments. I drive product vision, roadmap,
            and execution for tools used by millions, with a metrics-obsessed approach to growth,
            funnel optimization, and user success.
          </p>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Hands-on with emerging AI, repo-native execution fabrics, and deterministic runtime
            systems. Known for rapid iteration, decisive pivots, and obsessive user research across
            diverse audiences — passionate about empowering people, increasing access, and building
            technology that strengthens civic participation.
          </p>

          <dl className="divide-y divide-border border-y border-border font-mono text-sm">
            {focusAreas.map((area) => (
              <div key={area.k} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-primary">{area.k}</dt>
                <dd className="text-muted-foreground">{area.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
