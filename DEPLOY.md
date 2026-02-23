# Deploying to GitHub Pages

## Prerequisites

1. **Create a GitHub repository** (if you haven’t already) and push your code.
2. **Repo name and `base`**: The project is set up for a repo named `ambica-motors`.  
   - If your repo has a **different name**, update `base` in `vite.config.js`:
     ```js
     base: '/your-repo-name/',   // must start and end with /
     ```

---

## Option 1: CI/CD (GitHub Actions) — recommended

Every push to `main` or `master` automatically builds and deploys. You can also trigger a deploy manually.

### One-time setup

1. **Enable GitHub Pages** with the Actions source:
   - Repo → **Settings** → **Pages**
   - **Build and deployment** → **Source**: choose **GitHub Actions**

2. Push your code (including `.github/workflows/deploy-pages.yml`) to the `main` or `master` branch.

### What runs

- **On push** to `main` or `master`: workflow runs, builds the app, and deploys to GitHub Pages.
- **Manual run**: Repo → **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

### Site URL

- `https://<your-username>.github.io/ambica-motors/`  
  (or `https://<your-username>.github.io/<your-repo-name>/` if you changed `base`)

---

## Option 2: Manual deploy (`npm run deploy`)

Use this if you prefer not to use GitHub Actions.

1. **Install dependencies** (if needed):
   ```bash
   npm install
   ```

2. **Deploy** (builds and pushes the `dist` folder to the `gh-pages` branch):
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** in the repo:
   - Repo → **Settings** → **Pages**
   - **Source**: **Deploy from a branch**
   - **Branch**: `gh-pages` → `/ (root)` → **Save**

4. Site URL: `https://<your-username>.github.io/ambica-motors/`

---

## Notes

- The first deploy can take a few minutes to go live.
- Client-side routes (e.g. `/about-us`, `/contact-us`) work because `404.html` is set up to serve the app for all paths.
- **Repo root**: The workflow assumes the repo root is this project (e.g. `package.json` at root). If your repo root is a parent folder, set the default working directory or adjust the workflow paths.
