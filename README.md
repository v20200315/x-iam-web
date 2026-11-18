# x-iam-web

Web frontend for **x-iam**. It is a [Vite](https://vite.dev/) app written in vanilla JavaScript, with [Tabler](https://tabler.io/) available as the UI toolkit.

The current screen is the Vite starter page (`src/main.js`). Application screens still need to be built on top of that setup.

## Stack

- Vite 8
- Vanilla JavaScript (ES modules)
- Tabler (`@tabler/core`)

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

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build static files into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project layout

```
index.html          App entry HTML
public/             Static files served as-is
src/main.js         Page setup
src/counter.js      Sample click counter
src/style.css       Starter styles
src/assets/         Images imported from JavaScript
```
