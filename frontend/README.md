# Sneha Pal — Frontend

Modern, responsive React + Tailwind portfolio with light/dark mode theme toggle.

## Setup (PowerShell)

```powershell
cd frontend
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`. 

The frontend expects the Express backend running at `http://localhost:5000` and proxies `/api/*` requests to it (see `vite.config.js`).

## Structure

- `src/context/ThemeContext.jsx` — theme toggle + localStorage persistence
- `src/components/*` — Hero, About, Skills, Projects, Resume, Contact, Footer, Navbar
- `src/index.css` — Tailwind + custom CSS variables for pink theme
- `tailwind.config.cjs` — custom color extensions
- `vite.config.js` — Vite config with API proxy

## Customization

Replace placeholder text `[project]` and links in `Projects.jsx` with your actual projects. Update contact info in `Contact.jsx` and `Footer.jsx` with your real email, GitHub, and LinkedIn URLs.
