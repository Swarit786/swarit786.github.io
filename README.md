# Swarit Tiwari — Portfolio

A bilingual (English / German) engineering portfolio. Single-page, fully static
(HTML · CSS · vanilla JS), responsive for desktop and mobile, "Technical Blueprint"
dark theme. No build step, no dependencies.

## Run locally

```bash
cd portfolio
python3 -m http.server 8099
# open http://localhost:8099
```

(Any static server works — it's just files.)

## Deploy to a dedicated repo (recommended: clean URL `swarit786.github.io`)

1. On GitHub, create a **new public repository** named exactly **`swarit786.github.io`**.
2. Copy the **contents of this `portfolio/` folder** (not the folder itself) into the
   root of that new repo — so `index.html` sits at the repo root.
3. Commit & push to the `main` branch.
4. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `/ (root)` → Save.
5. After ~1 minute the site is live at **https://swarit786.github.io**.

### Alternative: serve straight from this repo
Settings → Pages → Branch `main` → folder `/portfolio` (if offered), or move the files
to the repo root. URL would be `https://swarit786.github.io/<repo-name>/`.

## Editing content

All text and data live in **`assets/js/i18n.js`** — every entry has an `en` and `de` value:

| What | Where |
|------|-------|
| Headings, hero, about, labels | `ui.en` / `ui.de` |
| Skill categories & chips | `skills` |
| Project cards (title, role, description, tags, image, repo) | `projects` |
| Experience & education timeline | `timeline` |
| Contact links | `contact` |

- Project images live in `assets/img/` (referenced by the `img` field of each
  project in `i18n.js`). The site is fully self-contained — no external assets.
- Theme colours are CSS variables at the top of `assets/css/styles.css`.
- The default language follows the browser, then remembers the visitor's last choice.

## Structure

```
portfolio/
├── index.html
├── .nojekyll
└── assets/
    ├── css/styles.css
    ├── js/i18n.js      ← all content (EN + DE)
    ├── js/main.js      ← rendering + interactions
    └── img/            ← project images
```
