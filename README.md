# Aronne Zanichelli — Portfolio "Creator" (EN/IT)

Static bilingual portfolio + CV. English is the default, Italian is applied client-side.
No build step, no framework — HTML, CSS, and vanilla JS (i18n, theme, scrollspy, video filters).

## Structure

```text
.
├── index.html        # cover: hero, proof strip, project index, method teaser, timeline, skills, contact
├── projects.html     # six long-form dossiers (anchors: #eu4-assistant … #labelbike)
├── method.html       # the AI-augmented workflow: spec → plan → test → audit, with links to real artifacts
├── cv.html           # single source for the CV — the PDF is printed from this page
├── 404.html
├── editing.html      # video editing archive: filterable YouTube gallery (Labelbike)
├── featured.html     # redirect stub → projects.html
├── labelbike.html    # redirect stub → editing.html
├── style.css         # design tokens (dark primary / light warm paper) + components
├── script.js         # translations object + i18n / theme / scrollspy / filters / form logic
├── tools/og-card.html# source for assets/og-card.png (see OG card below)
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
  identity token: it must match verbatim in `<title>`, hero lead, OG meta, and `cv.html`.
- Design tokens (colors, type scale, spacing) live only in the two `:root` blocks of
  `style.css`. No hex values anywhere else.

## CV regeneration

`cv.html` is the single source for both languages (it embeds its own translations).
After editing it, regenerate the two PDFs and the two preview thumbnails
(from WSL, with the repo under `C:\Dev`; Pillow: `pip install --user Pillow`):

```bash
CHROME="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
"$CHROME" --headless --no-pdf-header-footer --virtual-time-budget=5000 \
  --print-to-pdf='C:\Dev\AronneZanichelli.github.io\assets\cv-en.pdf' \
  'file:///C:/Dev/AronneZanichelli.github.io/cv.html'          # + ?lang=it → cv-it.pdf
"$CHROME" --headless --hide-scrollbars --window-size=794,1123 --virtual-time-budget=5000 \
  --screenshot='C:\Dev\AronneZanichelli.github.io\assets\cv-en.png' \
  'file:///C:/Dev/AronneZanichelli.github.io/cv.html?preview=1' # + &lang=it → cv-it.png
python3 -c "from PIL import Image; [Image.open(f'assets/cv-{l}.png').save(f'assets/cv-{l}.webp',quality=80) for l in ('en','it')]"
rm assets/cv-en.png assets/cv-it.png   # only the .webp thumbnails are committed
```

Check before committing: each PDF is exactly **one A4 page** (with the photo),
and `assets/cv-{en,it}.{pdf,webp}` are all regenerated together.

## OG card regeneration

`assets/og-card.png` (1200×630) is a screenshot of `tools/og-card.html`.
After editing the source, regenerate with:

```bash
CHROME="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --virtual-time-budget=5000 \
  --screenshot='C:\Dev\AronneZanichelli.github.io\assets\og-card.png' \
  'file:///C:/Dev/AronneZanichelli.github.io/tools/og-card.html'
```

## Deploy

Push to `main` → GitHub Pages redeploys automatically (~1 minute). Never push to `main`
directly: branch + PR.
