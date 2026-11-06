import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center bg-midnight overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary-purple/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl space-y-6">
        <Badge
          variant="teal"
          className="px-4 py-1.5 text-xs font-mono tracking-wider uppercase"
        >
          Arium Technical Architecture &amp; Dynamic Widgets
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Arium Networks
          <span className="block text-teal mt-2 text-3xl md:text-5xl font-medium">
            Interactive Slide Deck Platform
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
          Standalone presentation engine for demonstrating the Strapi v5
          Headless CMS, 4-Layer Canonical Data Contract, and Next.js App Router
          dynamic widget registry.
        </p>

        {/* Status badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Badge variant="midnight" className="border-teal/30 text-teal">
            Next.js 16 + React 19
          </Badge>
          <Badge
            variant="midnight"
            className="border-secondary-purple/30 text-secondary-purple"
          >
            Tailwind CSS v4
          </Badge>
          <Badge variant="midnight" className="border-slate-700 text-slate-300">
            Shadcn UI Theme Ready
          </Badge>
          <Badge variant="midnight" className="border-teal/30 text-teal">
            Brand Tokens In Sync
          </Badge>
        </div>

        {/* Feature showcase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-8 text-left">
          <div className="p-5 rounded-xl bg-midnight-lighter border border-midnight-lightest hover:border-teal/40 transition-colors">
            <h3 className="text-teal font-medium text-sm mb-1.5 font-mono">
              01. Midnight Theme
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exact palette replication: #162047 canvas, #00e8d9 teal, pastel
              accents and UlmGrotesk typography.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-midnight-lighter border border-midnight-lightest hover:border-teal/40 transition-colors">
            <h3 className="text-teal font-medium text-sm mb-1.5 font-mono">
              02. Vector Illustrations
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              SVGs imported from main site: connection-globe, us-dot-map,
              das-illustration and small-cells.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-midnight-lighter border border-midnight-lightest hover:border-teal/40 transition-colors">
            <h3 className="text-teal font-medium text-sm mb-1.5 font-mono">
              03. 15 Slide Engine
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dual-column viewport, interactive tabs, syntax highlighted code
              windows, and touch/keyboard controls.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
