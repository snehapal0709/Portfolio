# Backend (Express)

This is a minimal Express backend for the portfolio. It exposes:

- `GET /api/projects` — returns placeholder project cards
- `POST /api/contact` — accepts contact form submissions (no email delivery configured)

Run locally (PowerShell):

```powershell
cd backend
npm install
npm run start
```

For development with auto-reload, install `nodemon` globally or run using `npx nodemon index.js`.
