# Sneha Pal — MERN Portfolio

A modern, creative portfolio website built with **React**, **Express**, **MongoDB** (optional), and **Tailwind CSS**. Features a beautiful pink/rose theme with light and dark mode.

## 📁 Project Structure

```
.
├── backend/           # Express API server
│   ├── index.js       # Main server with /api/projects and /api/contact
│   ├── package.json
│   ├── .env.example   # Environment variables template
│   └── README.md
├── frontend/          # Vite + React frontend
│   ├── src/
│   │   ├── components/    # Hero, About, Skills, Projects, Resume, Contact, Navbar, Footer
│   │   ├── context/       # ThemeContext for light/dark toggle
│   │   ├── assets/        # Images and SVG placeholders
│   │   ├── App.jsx        # Main app
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Tailwind + custom theme
│   ├── package.json
│   ├── vite.config.js     # Vite with API proxy
│   ├── tailwind.config.cjs # Pink theme config
│   └── README.md
└── README.md          # This file
```

## 🎨 Theme Colors

**Light Mode:**
- Primary: Soft Pink (#FFC0CB)
- Accent: Pink (#FF9EB5)
- Background: White (#FFFFFF)
- Text: Dark Gray (#111827)

**Dark Mode:**
- Primary: Charcoal (#111111)
- Accent: Rose Pink (#FF6F91)
- Text: Light Gray (#E6E6E6)

## 🚀 Quick Start

### Backend Setup

```powershell
cd backend
npm install
npm start
```

Runs at `http://localhost:5000`.

### Frontend Setup

```powershell
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`.

Both can run simultaneously. The frontend proxies API calls to the backend.

## ✨ Features

- ✅ **Responsive Design** — Mobile-first layout
- ✅ **Light/Dark Mode** — Theme toggle with localStorage persistence
- ✅ **Smooth Animations** — Hover effects and transitions
- ✅ **Contact Form** — Form submission to backend API
- ✅ **Project Cards** — Placeholder cards for your projects
- ✅ **Skills Grid** — Organized by category with icons
- ✅ **Resume Download** — Button to download your resume
- ✅ **Modern UI** — Clean, rounded components and gradients

## 📝 Customization

1. **Your Info:**
   - Update `Contact.jsx` with your email, GitHub, and LinkedIn URLs
   - Replace placeholders in `Footer.jsx`
   - Add your profile image to `/src/assets/`

2. **Projects:**
   - Edit `backend/index.js` to populate real project data
   - Or edit `Projects.jsx` to display your projects

3. **Resume:**
   - Replace the resume link in `Resume.jsx` with a real PDF file

4. **Colors:**
   - Modify `tailwind.config.cjs` to change theme colors
   - Update CSS variables in `src/index.css`

## 🔧 Technologies

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Styling:** Tailwind CSS with custom theme
- **Tools:** Git, npm

## 📱 Sections

1. **Hero** — Big intro with CTA buttons
2. **About Me** — Bio and profile info
3. **Skills** — Categorized skills with icons
4. **Projects** — 4+ project cards (edit placeholders)
5. **Resume** — Download button
6. **Contact** — Contact info + contact form
7. **Footer** — Links and copyright

## 🌐 Deployment

**Frontend:**
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy to Vercel, Netlify, or GitHub Pages

**Backend:**
- Deploy to Heroku, Railway, or a VPS
- Set `PORT` environment variable
- (Optional) Connect to MongoDB with `MONGO_URI`

## 📚 Next Steps

- [ ] Add your project details to `backend/index.js`
- [ ] Update contact information across components
- [ ] Replace profile image placeholder
- [ ] Add your resume PDF
- [ ] Deploy backend and frontend
- [ ] (Optional) Connect to MongoDB for dynamic projects

---

Built with ❤️ — Happy coding! 🚀
