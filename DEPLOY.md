# Deployment Guide — AI Safety Practice Quiz

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com) account (username: jontever)
- A [Vercel](https://vercel.com) account (free tier is sufficient)

---

## Step 1: Install Dependencies and Test Locally

Open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to confirm the app works.

To test a production build:

```bash
npm run build
npm run start
```

---

## Step 2: Push to GitHub

### Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Set the repository name (e.g., `ai-safety-quiz`)
3. Keep it **Public** (required for free Vercel hobby plan)
4. Do **not** initialize with a README (you already have one)
5. Click **Create repository**

### Push your code

From the project folder in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: AI Safety Practice Quiz"
git branch -M main
git remote add origin https://github.com/jontever/ai-safety-quiz.git
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Connect your GitHub repo

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your `ai-safety-quiz` repository
4. Leave all build settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

Vercel will build and deploy automatically. You'll get a free `.vercel.app` URL within ~1 minute.

---

## Step 4: Add Your Custom Domain (insynthesis.online)

### In Vercel

1. Open your project dashboard on Vercel
2. Go to **Settings → Domains**
3. Click **Add Domain**
4. Enter `insynthesis.online` and click **Add**
5. Also add `www.insynthesis.online` if you want the www redirect

Vercel will show you DNS records to add.

### In your domain registrar

Add the following DNS records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

> **Note:** DNS propagation can take a few minutes to a few hours.

After propagation, Vercel automatically provisions a free SSL certificate for your domain.

---

## Step 5: Verify

Visit [https://insynthesis.online](https://insynthesis.online) — your quiz app should be live with HTTPS.

---

## Ongoing Deployments

Every time you push to the `main` branch on GitHub, Vercel automatically redeploys:

```bash
git add .
git commit -m "Update questions"
git push
```

---

## Adding More Questions

Edit `data/questions.ts` to add questions. Each question follows this structure:

```typescript
{
  id: "M1-Q6",           // unique ID
  module: 1,             // 1–10
  moduleName: MODULE_NAMES[1],
  text: "Question text here?",
  options: [
    { letter: "A", text: "First option" },
    { letter: "B", text: "Second option" },
    { letter: "C", text: "Third option" },
    { letter: "D", text: "Fourth option" },
  ],
  correctAnswer: "B",    // the correct letter
  explanation: "Why B is correct...",
  justifications: {
    A: "Why A is wrong...",
    B: "Why B is correct...",
    C: "Why C is wrong...",
    D: "Why D is wrong...",
  },
}
```

The app currently has 5 questions per module (50 total). The actual exam format uses 6 per module (60 total). Add one more per module to fully match exam length.

---

## Project Structure

```
ai-safety-quiz/
├── app/
│   ├── layout.tsx        # HTML shell, metadata, fonts
│   ├── page.tsx          # Root page (renders QuizApp)
│   └── globals.css       # Tailwind base + custom components
├── components/
│   └── QuizApp.tsx       # Full quiz logic and UI (single client component)
├── data/
│   └── questions.ts      # All questions, answers, explanations
├── next.config.js        # Next.js config (static export)
├── tailwind.config.ts    # Tailwind config
├── package.json
└── DEPLOY.md             # This file
```

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel (free hobby plan)
- **No database required** — all questions are static data
