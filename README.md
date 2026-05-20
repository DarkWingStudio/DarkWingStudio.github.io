# DarkWing Studio — Portfolio

![Live](https://img.shields.io/badge/Live-darkwingstudio.github.io-7b2fff?style=for-the-badge&logo=github)
![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-f0f0f0?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3ecf8e?style=for-the-badge)

Personal portfolio for **Rohit Kumar (DarkWing Studio)** — frontend and full-stack developer.  
Built with vanilla HTML, CSS, and JavaScript. No frameworks. No build step. JSON-driven architecture maintained directly from mobile and desktop.

**Live:** [darkwingstudio.github.io](https://darkwingstudio.github.io)

---

## Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, grid, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Data | JSON files (no database, no CMS) |
| Icons | Font Awesome 7, SimpleIcons CDN |
| Fonts | Bebas Neue, Share Tech Mono (Google Fonts) |
| Hosting | GitHub Pages |

No React. No Vue. No Tailwind. No build pipeline.

---

## Architecture

All content is driven by JSON files in the `/data` directory. The HTML shell loads data at runtime via `fetch()`. The header and footer are injected by `js/partials.js` — no repeated markup across pages.

```
data/
  meta.json         → global profile, socials, status, current project
  projects.json     → project cards and featured project
  experience.json   → work experience entries with bullet points
  skills.json       → skill groups (Frontend / Backend / Creative)
  blog.json         → blog post index
  posts/            → individual post content as JSON
```

To add a project: edit `data/projects.json`.  
To add a blog post: create `data/posts/<id>.json` and add an entry to `data/blog.json`.  
To update the current project or status: edit `data/meta.json`.

---

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Projects | `projects.html` |
| About | `about.html` |
| Experience | `experience.html` |
| Blog | `blog.html` |
| Blog Post | `blog-post.html` |
| Contact | `contact.html` |
| Privacy Policy | `privacy.html` |
| Terms of Service | `terms.html` |
| 404 | `404.html` |

---

## Visual System

- **Dark cinematic aesthetic** — `#111215` background, `#7b2fff` purple accent
- **CRT scanline overlay** — pure CSS `body::after`, zero performance cost
- **PFP glow ring** — CSS `box-shadow` pulse animation on About page
- **Particle background** — canvas-based, 28 purple particles, respects `prefers-reduced-motion`
- **Page transitions** — fade + translate on navigation
- **Card tilt effect** — pointer-driven perspective rotation on project cards
- **Scroll reveal** — IntersectionObserver on `[data-scroll]` elements

---

## Running Locally

```bash
git clone https://github.com/DarkWingStudio/darkwingstudio.github.io.git
cd darkwingstudio.github.io
```

Open `index.html` in a browser. For accurate JSON fetching, use a local server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Author

**Rohit Kumar — DarkWing Studio**

| Platform | Link |
|---|---|
| GitHub | [github.com/DarkWingStudio](https://github.com/DarkWingStudio) |
| Instagram | [instagram.com/DarkWing.in](https://instagram.com/DarkWing.in) |
| X | [x.com/darkwingstudio](https://x.com/darkwingstudio) |
| Pinterest | [pinterest.com/DarkWingstudio](https://pinterest.com/DarkWingstudio) |
| Email | darkwingdomain@gmail.com |

---

## License

MIT License — see [LICENSE.md](LICENSE.md) for details.