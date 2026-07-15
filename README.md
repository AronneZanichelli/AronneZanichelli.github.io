# Aronne Zanichelli — Portfolio "Engineering Notebook" (EN/IT)

Static bilingual portfolio + CV. English is the default, Italian is applied client-side.
No build step, no framework — HTML, CSS, and ~60 lines of vanilla JS logic.

## Structure

```text
.
├── index.html        # cover: hero, proof strip, project index, method teaser, timeline, skills, contact
├── projects.html     # six long-form dossiers (anchors: #eu4-assistant … #labelbike)
├── method.html       # the AI-augmented workflow: spec → plan → test → audit, with links to real artifacts
├── cv.html           # single source for the CV — the PDF is printed from this page
├── 404.html
├── featured.html     # redirect stub → projects.html
├── editing.html      # redirect stub → projects.html#labelbike
├── labelbike.html    # redirect stub → projects.html#labelbike
├── style.css         # design tokens (light primary / dark negative) + components
├── script.js         # translations object + i18n / theme / reveal / form logic
└── assets/           # profile.webp, favicon.svg, og-card.png, cv-en.pdf, cv-it.pdf, previews
```

## Local test

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` and check: EN/IT toggle, light/dark theme, contact form states, project anchors.

## Editing content

- All site text lives twice: static English in the HTML, and both languages in the
  `translations` object in `script.js`. **Both must be updated together.**
- The professional role string — `Junior Software Developer (AI-augmented)` — is an
  identity token: it must match verbatim in `<title>`, hero eyebrow, OG meta, and `cv.html`.
- Design tokens (colors, type scale, spacing) live only in the two `:root` blocks of
  `style.css`. No hex values anywhere else.

## CV regeneration

`cv.html` is the single source for both languages (it embeds its own translations).

1. Open `cv.html` (or `cv.html?lang=it`) in Chrome.
2. Print → Save as PDF, A4, margins "None", background graphics ON, headers/footers OFF.
3. Save as `assets/cv-en.pdf` / `assets/cv-it.pdf` (names are wired into the site).

Headless equivalent:

```bash
chrome --headless --print-to-pdf=assets/cv-en.pdf --no-pdf-header-footer cv.html
```

## Deploy

Push to `main` → GitHub Pages redeploys automatically (~1 minute). Never push to `main`
directly: branch + PR.
