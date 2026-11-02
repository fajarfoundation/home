# Fajar Foundation website

Plain HTML, CSS and JS. No build step is needed to host it: GitHub Pages serves the files as they are.

## Still to fill in
- **Documents section**: removed for now. When the Certificate of Incorporation and annual reports are ready, add a "Documents" section back to the Transparency page in `build.py`.
- When 12A, 80G or CSR-1 registrations come through, add them to the Transparency page's legal details.

## Editing
Page content, the shared header and footer, and the CIN and contact details live in `build.py`.
Edit there, run `python build.py`, and every HTML file regenerates. Editing the `.html` files directly gets overwritten on the next build.
Styles are in `assets/css/style.css`, small scripts in `assets/js/main.js`.

## Images
The site uses the web-sized files: `logo-horizontal.png`, `pinwheel.png`, `favicon.png`, `hero1.jpg` and `team/alim.jpg`, `kartik.jpg`, `nitin.jpg`.
The original large source images are kept locally and not committed (see `.gitignore`).

## Deploy on GitHub Pages
1. Push this folder to the repo root on the `main` branch.
2. Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`.
3. For a custom domain, add a `CNAME` file containing the domain and point DNS to GitHub Pages.
