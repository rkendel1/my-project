import type { LucideIcon } from 'lucide-react'
import { Combine, Cpu, Layers, Target, Workflow } from 'lucide-react'

export type ProductLink = {
  label: string
  href: string
}

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  href?: string
  links?: ProductLink[]
  icon: LucideIcon
  status: string
}

export const products: Product[] = [
  {
    id: 'trythissoftware',
    name: 'TryThisSoftware',
    tagline: 'A run button for the internet',
    description:
      'A run button for Git sites like GitHub that lets anyone install, analyze, and run a repository in a single click — no local setup required.',
    tags: ['Cloud Native', 'Rust', 'Next.js', 'Multi-Tenant', 'SaaS', 'B2B', 'B2C'],
    href: 'https://trythissoftware.com',
    icon: Workflow,
    status: 'Live',
  },
  {
    id: 'opscadence',
    name: 'OpsCadence',
    tagline: 'Messy inputs into governed actions',
    description:
      'OpsCadence ingests messy operational inputs from anywhere, understands what they mean, and turns them into governed actions across your CRM, ERP, and workflows — without engineering.',
    tags: ['Next.js', 'Multi-Tenant', 'B2B SaaS'],
    href: 'https://opscadence.com',
    icon: Combine,
    status: 'Product',
  },
  {
    id: 'stacklive',
    name: 'StackLive',
    tagline: 'The identity-first creator platform',
    description:
      'StackLive is the identity-first creator platform. Switch between personas, edit what each one sees, target sections to the right audience — then publish live. No code, no conditions, no complexity.',
    tags: ['SaaS', 'Multi-Tenant', 'Next.js', 'iOS App'],
    href: 'https://stacklive.dev',
    links: [
      { label: 'stacklive.dev', href: 'https://stacklive.dev' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/mini-app-central/id6757562001' },
    ],
    icon: Layers,
    status: 'Product',
  },
  {
    id: 'id8',
    name: 'ID8',
    tagline: 'Concepts into execution',
    description:
      'An AI-assisted planning platform that transforms raw concepts into structured business, product, and execution strategies.',
    tags: ['LLM'],
    href: 'https://id8.space',
    icon: Target,
    status: 'Product',
  },
  {
    id: 'populst',
    name: 'Populst',
    tagline: 'Civic engagement, structured',
    description:
      'A civic engagement platform enabling structured citizen participation through data-driven workflows.',
    tags: ['iOS App', 'Civic Tech', 'Data-Driven'],
    icon: Cpu,
    status: 'Retired',
  },
]
