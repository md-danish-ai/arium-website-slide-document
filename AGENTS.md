<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Arium Project Architectural & Coding Rules

Every agent, developer, and automated assistant working on this repository MUST strictly abide by the following rules:

## 1. Path Alias Import Rules (MANDATORY)

- ❌ **DO NOT USE** `@/components/...` (e.g. `import { Badge } from "@/components/ui/badge"` is strictly prohibited).
- ✅ **ALWAYS USE** `@components/...` (e.g. `import { Badge } from "@components/ui/badge"`).

### Official Alias Mappings (configured in `tsconfig.json`):
| Alias | Target Directory | Example Usage |
| :--- | :--- | :--- |
| `@components/*` | `./components/*` | `import { Badge } from "@components/ui/badge";` (MANDATORY: Never use `@/components/...`) |
| `@ui/*` | `./components/ui/*` | `import { Button } from "@ui/button";` |
| `@lib/*` | `./lib/*` | `import { cn } from "@lib/utils";` |
| `@data/*` | `./data/*` | `import { PAGE_WIDGETS } from "@data/page.widget";` |
| `@/types/*` | `./types/*` | `import { ChildWidget } from "@/types/widget.types";` |
| `@public/*` | `./public/*` | Static assets resolution |

---

## 2. Component Organization & Placement Rules

- **Zero Route-Colocated Component Folders**: Route folders inside `app/` (such as `app/start/`) must contain only route files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`). Never create `components/` inside `app/start/` or other app subfolders.
- **Categorization by Purpose inside `components/`**:
  - `components/navigation/`: All navigation, headers, footers, sidebars, step dots, and arrow controls (e.g. `StartHeader.tsx`, `PageSidebar.tsx`).
  - `components/presentation/`: All slide cards, preview frames, code inspectors, schematics, and blueprint cards (e.g. `WebsitePreviewCard.tsx`, `WidgetBlueprintCard.tsx`, `WidgetCodeCard.tsx`, `WidgetDescription.tsx`).
  - `components/ui/`: Atomic Shadcn UI primitives (`badge.tsx`, `button.tsx`, `card.tsx`, `dialog.tsx`, `tabs.tsx`, `tooltip.tsx`).
  - `components/slides/`: Dedicated slide presentation screens.

---

## 3. Reusable Component Rules

- **`WebsitePreviewCard`**:
  - Must remain completely generic and reusable (`@components/presentation/WebsitePreviewCard.tsx`).
  - Supports multiple variants: `variant="browser" | "blueprint" | "media"`.
  - Can accept domain objects (`widget`, `page`) or generic overrides (`title`, `headline`, `description`, `imageSrc`, `url`, `badgeText`).
  - Built-in Radix Dialog Lightbox with Desktop, Tablet, and Mobile viewport switching.

---

## 4. Brand Design Tokens & Styling

- Midnight Palette: Canvas `#162047`, Lighter Cards `#1c2a55`, Lightest Borders `#243365`.
- Accent Palette: Cyan Teal `#00e8d9`, Secondary Purple `#d2c7ff`, Amber `#ffffca`, Peach `#ffdac8`.
- Typography: Headings & Body in `ulmGrotesk` / sans-serif, Code in monospace font (`JetBrains Mono` / `Geist Mono`).
