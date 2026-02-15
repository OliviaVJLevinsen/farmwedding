# Wedding Website

Static site for GitHub Pages.

## Customize

1. Edit names/date/location in `index.html`.
2. Adjust colors/fonts in `styles.css`.
3. Update countdown date in `script.js`.

## Publish on GitHub Pages

From inside `wedding-website/`:

```bash
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub:

1. Open repo `Settings` -> `Pages`
2. Source: `Deploy from a branch`
3. Branch: `main` and folder `/ (root)`
4. Save

Your site will be available at:

`https://<your-username>.github.io/<repo-name>/`
