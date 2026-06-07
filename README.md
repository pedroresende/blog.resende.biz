# blog.resende.biz

Personal blog by [Pedro Resende](https://www.pedro.resende.biz), built with Nuxt and Nuxt Content.

## Tech Stack

- **Framework:** Nuxt 4
- **Content:** Nuxt Content v3 (markdown-based blog posts in Portuguese)
- **Styling:** Tailwind CSS v4
- **Modules:** Nuxt Image, nuxt-delay-hydration
- **Search:** Client-side search via `/api/search/posts` endpoint
- **Comments:** Disqus integration
- **Syntax Highlighting:** Prism.js
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Deployment:** Cloudflare Pages (with `_routes.json`)
- **Runtime:** Node.js 22
- **Package Manager:** pnpm

## Setup

```bash
pnpm install
```

## Development

Start the dev server at `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build for production:

```bash
pnpm build
```

Preview the build locally:

```bash
pnpm preview
```

### Deploy to Cloudflare Pages

```bash
pnpm build:cloudflare
```

## License

© Pedro Resende — All rights reserved.
