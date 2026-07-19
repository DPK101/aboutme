# aboutme

A React + TypeScript + Vite portfolio draft for a senior frontend engineer. The current version focuses on two surfaces:

- an About page with general portfolio copy
- a Sketches gallery landing page designed for portfolio showcase

## Stack

- React 18
- TypeScript
- Vite
- React Router

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run deploy`

## GitHub Pages

The project uses a relative Vite `base` and hash-based routing so it can deploy cleanly to GitHub Pages without additional server rewrites.

Deploy flow:

1. Run `npm run build`
2. Run `npm run deploy`

The deploy script publishes the `dist` directory via `gh-pages`.
