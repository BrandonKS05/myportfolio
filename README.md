# Personal Portfolio

A modern, dark-themed portfolio built with Next.js (App Router) and Tailwind CSS. Features an animated gradient background, glassmorphism cards, and a responsive project grid.

## Install dependencies

From the project root:

```bash
cd portfolio
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. **Push your code to GitHub** (if you haven’t already):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
   - Click **Add New** → **Project**.
   - Import your GitHub repository.
   - Leave the default settings (framework: Next.js) and click **Deploy**.
   - Vercel will build and deploy; you’ll get a URL when it’s done.

3. **Optional – deploy via CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Follow the prompts to link the project and deploy.

## Customization

- **Profile:** Edit the sidebar in `app/page.tsx` (name, username, bio, social links).
- **Projects:** Update the `projects` array in `app/page.tsx` with your own projects.
- **Avatar:** Replace `public/avatar.svg` with your own image (e.g. `avatar.jpg` or `avatar.png`) and update the `Image` `src` in `app/page.tsx`.
- **Colors / animation:** Adjust the gradient and timing in `app/globals.css` (`.gradient-bg` and `@keyframes gradientShift`).
