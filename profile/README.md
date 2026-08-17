<div align="center">

# open-templates

**Reusable starter templates with sensible defaults — docs, automation, and pairing where it matters.**

[Browse all repositories](https://github.com/orgs/open-templates/repositories) · [Contributing](https://github.com/open-templates/.github/blob/main/CONTRIBUTING.md) · [Code of Conduct](https://github.com/open-templates/.github/blob/main/CODE_OF_CONDUCT.md)

</div>

---

## How to use

1. Pick a **standalone** template below, or a **fullstack pack** (frontend + one backend).
2. Open the repository and click **Use this template** (or clone and customize).
3. Follow each repo’s `README.md` and `INSTRUCTIONS.md` for setup.

> More templates will be added over time. Watch this org for new packs and stacks.

---

## Standalone templates

Use on their own — no paired repository required.

### Repository templates

Blank GitHub repository shells — community docs, Dependabot, CODEOWNERS, and issue/PR scaffolding. No application code until you add it.

| Template | Summary |
|----------|---------|
| [**github-repo-template**](https://github.com/open-templates/github-repo-template) | Stack-agnostic repo template: markdown docs with cross-links, Dependabot, dependabot-signature workflow, CODEOWNERS, issue & PR templates |

### Package templates

Publishable libraries with TypeScript, tests, linting, and CI/CD for npm and GitHub Packages.

| Template | Summary |
|----------|---------|
| [**npm-package-template**](https://github.com/open-templates/npm-package-template) | Production-ready TypeScript npm package — dual ESM/CJS builds (tsup), Vitest, ESLint flat config, automated publish workflows, CodeQL |

### Fullstack templates

Single-repo apps with API + UI in one deployable unit.

| Template | Summary |
|----------|---------|
| [**cf-hono-react-file-uploader-template**](https://github.com/open-templates/cf-hono-react-file-uploader-template) | Cloudflare Worker + Hono API + React SPA — file upload, metadata, ephemeral previews (no persistence) |

---

## Fullstack packs

Frontend + backend templates wired to the same auth and API contracts — clone both repos and ship. **Pick any frontend and any backend stack** in a pack; the API contract is the same.

### Supabase Auth Pack

| Role | Template | Stack | Summary |
|------|----------|-------|---------|
| Frontend | [**react-supabase-auth-template**](https://github.com/open-templates/react-supabase-auth-template) | React | React 19 + Vite + Supabase Auth — OAuth, protected routes, `/health` + `/me` |
| Frontend | [**vue-supabase-auth-template**](https://github.com/open-templates/vue-supabase-auth-template) | Vue | Vue 3 + Vite + vue-router + Supabase Auth — same contract |
| Frontend | [**svelte-supabase-auth-template**](https://github.com/open-templates/svelte-supabase-auth-template) | Svelte | Svelte 5 + Vite + Supabase Auth — same contract |
| Frontend | [**astro-supabase-auth-template**](https://github.com/open-templates/astro-supabase-auth-template) | Astro | Astro 7 + Vue SPA + Supabase Auth — same contract |
| Backend | [**cf-hono-supabase-api-template**](https://github.com/open-templates/cf-hono-supabase-api-template) | Hono (TS) | Cloudflare Worker + Hono + Supabase — `GET /health`, JWT `GET /me` |
| Backend | [**cf-fastapi-supabase-api-template**](https://github.com/open-templates/cf-fastapi-supabase-api-template) | FastAPI (Python) | Cloudflare Python Worker + FastAPI + Pydantic — same API contract |
| Backend | [**cf-rust-supabase-api-template**](https://github.com/open-templates/cf-rust-supabase-api-template) | Rust | Cloudflare Worker + workers-rs — same API contract |
| Backend | [**vm-php-supabase-api-template**](https://github.com/open-templates/vm-php-supabase-api-template) | PHP (Docker) | Nginx + PHP-FPM on VM — same API contract; Terraform (Oracle) + cloud-init |

### AI Chat Pack

| Role | Template | Stack | Summary |
|------|----------|-------|---------|
| Frontend | [**react-supabase-auth-ai-chat-template**](https://github.com/open-templates/react-supabase-auth-ai-chat-template) | React | Supabase Auth SPA + AI chat — threads, markdown, multi-turn `POST /chat` |
| Frontend | [**vue-supabase-auth-ai-chat-template**](https://github.com/open-templates/vue-supabase-auth-ai-chat-template) | Vue | Vue SPA + threads + markdown — same API |
| Frontend | [**svelte-supabase-auth-ai-chat-template**](https://github.com/open-templates/svelte-supabase-auth-ai-chat-template) | Svelte | Svelte SPA + threads + markdown — same API |
| Frontend | [**astro-supabase-auth-ai-chat-template**](https://github.com/open-templates/astro-supabase-auth-ai-chat-template) | Astro | Astro 7 + Vue chat SPA — same API |
| Backend | [**cf-hono-supabase-gemini-api-template**](https://github.com/open-templates/cf-hono-supabase-gemini-api-template) | Hono (TS) | Hono + Supabase + Gemini — `/health`, `/me`, `/chat` |
| Backend | [**cf-fastapi-supabase-gemini-api-template**](https://github.com/open-templates/cf-fastapi-supabase-gemini-api-template) | FastAPI (Python) | FastAPI + Gemini via httpx — same API contract |
| Backend | [**cf-rust-supabase-gemini-api-template**](https://github.com/open-templates/cf-rust-supabase-gemini-api-template) | Rust | workers-rs + Gemini REST — same API contract |

---

## Template map

```text
open-templates/
├── Standalone
│   ├── github-repo-template
│   ├── npm-package-template
│   └── cf-hono-react-file-uploader-template   # fullstack CF (Hono + React)
└── Fullstack Packs
    ├── Supabase Auth Pack
    │   ├── frontend (pick one)
    │   │   ├── react-supabase-auth-template
    │   │   ├── vue-supabase-auth-template
    │   │   ├── svelte-supabase-auth-template
    │   │   └── astro-supabase-auth-template
    │   └── backend (pick one)
    │       ├── cf-hono-supabase-api-template
    │       ├── cf-fastapi-supabase-api-template
    │       └── cf-rust-supabase-api-template
    └── AI Chat Pack
        ├── frontend (pick one)
        │   ├── react-supabase-auth-ai-chat-template
        │   ├── vue-supabase-auth-ai-chat-template
        │   ├── svelte-supabase-auth-ai-chat-template
        │   └── astro-supabase-auth-ai-chat-template
        └── backend (pick one)
            ├── cf-hono-supabase-gemini-api-template
            ├── cf-fastapi-supabase-gemini-api-template
            └── cf-rust-supabase-gemini-api-template
```

---

<div align="center">

<sub>MIT · Maintained by <a href="https://github.com/open-templates">@open-templates</a></sub>

</div>
