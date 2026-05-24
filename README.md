# Chiranjeevi — Portfolio (React + JavaScript)

A clean, modern personal portfolio built with **React + Vite**, plain **JavaScript**, **HTML5**, and hand-crafted **CSS** (no Tailwind, no UI libraries).

## 🚀 Quick start

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the build locally
```

## 📂 Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx     # React entry
    ├── App.jsx      # Single-page portfolio
    └── styles.css   # Full design system (dark theme, glassmorphism)
```

## ✨ Features

- Fully responsive
- Dark theme with mint/violet gradient accents
- Glassmorphism nav with scroll-spy active link
- Animated hero, project cards with hover blobs
- Inline SVG icons (no icon library)
- Sections: About · Skills · Projects · Education · Contact

## ✏️ Customising

All colors live as CSS variables at the top of `src/styles.css` — change `--primary`, `--accent`, fonts, etc. in one place.

Content (name, projects, links) lives in `src/App.jsx`.
