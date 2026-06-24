# Piyush Gupta — Portfolio

A premium, animated portfolio built with **React (Vite)** on the frontend and **Express (Node.js)** on the backend for the contact form.

```
piyush-portfolio/
├── client/   → React + Vite frontend
└── server/   → Express backend (contact form email API)
```

## Quick start

### 1. Backend (server/)

```bash
cd server
cp .env.example .env
# edit .env: set GMAIL_USER and GMAIL_APP_PASSWORD (see below)
npm install
npm start          # or: node server.js
```

The API runs on `http://localhost:5000` by default.

**Setting up email sending (Gmail App Password):**
1. Enable 2-Step Verification on the Gmail account that will send mail.
2. Go to https://myaccount.google.com/apppasswords and generate a 16-character App Password.
3. Put that Gmail address in `GMAIL_USER` and the App Password in `GMAIL_APP_PASSWORD` in `server/.env`.
4. Without these set, the `/api/contact` endpoint still works but only logs the message to the console instead of emailing it — useful for local testing.

### 2. Frontend (client/)

```bash
cd client
cp .env.example .env   # only needed if your API isn't on localhost:5000
npm install
npm run dev
```

Visit `http://localhost:5173`.

### 3. Build for production

```bash
cd client
npm run build      # outputs static files to client/dist
```

Deploy `client/dist` to any static host (Vercel, Netlify, Render static site). Deploy `server/` to a Node host (Render, Railway, Fly.io) and point `VITE_API_URL` in the client's `.env` to that deployed backend URL before building.

## Before going live — things to swap in

1. **Resume PDF** — drop your real resume at `client/public/resume-piyush-gupta.pdf` (currently missing; download buttons will 404 until you add it).
2. **Profile photo** — replace `client/public/profile-photo-placeholder.svg` with a real photo. Easiest path: add `profile-photo.jpg` to `client/public/` and update the `src` in `client/src/sections/Hero.jsx` (search for `profile-photo-placeholder.svg`).
3. **Project links** — `client/src/data/portfolio.js` has `demo`/`github`/`caseStudy` URLs set to placeholders (`#`) for some projects. Update these to your live deployments.
4. **Testimonials** — the three testimonials in `client/src/data/portfolio.js` are placeholders, as requested in the brief. Replace with real ones when available.
5. **CORS** — in production, set `CLIENT_ORIGIN` in `server/.env` to your deployed frontend's exact URL.

## Editing content

Almost all text content (bio, skills, projects, experience, education, contact info) lives in one file: `client/src/data/portfolio.js`. Edit that file and the whole site updates — no need to touch component code for content changes.

## Tech stack

- **Frontend:** React 19, Vite, Framer Motion (animation), React Icons
- **Backend:** Express, Nodemailer (Gmail SMTP), express-rate-limit (spam protection)
- **Design:** Custom CSS with design tokens (no UI framework), dark/light theme via CSS variables, canvas-based particle background, JetBrains Mono / Space Grotesk / Inter typography
