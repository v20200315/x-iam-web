# x-iam-web

Web frontend for **x-iam**. It is a [Vite](https://vite.dev/) app written in vanilla JavaScript, with [Tabler](https://tabler.io/) as the UI toolkit.

The public home page is `index.html`. Page behavior lives in `src/js/main.js`.

## Stack

- Vite 8
- Vanilla JavaScript (ES modules)
- Tabler (`@tabler/core`)
- Prettier

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:5173`). Saving a file reloads the page.

## Scripts

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Vite dev server              |
| `npm run build`        | Build static files into `dist/`        |
| `npm run preview`      | Serve the production build locally     |
| `npm run format`       | Format the project with Prettier       |
| `npm run format:check` | Check formatting without writing files |

Formatting rules are in `.prettierrc.json`. Files listed in `.prettierignore` are skipped.

## Project layout

```
index.html          Public home page
public/favicon.svg  Site icon
src/js/main.js      Page scripts
src/css/app.css     Application styles
.prettierrc.json    Prettier options
.prettierignore     Files Prettier skips
```
