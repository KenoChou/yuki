# Yuki File Organizer

Yuki is now structured as a React renderer running inside an Electron desktop shell.

## Scripts

- `npm run dev` starts Vite and opens the Electron app in development mode.
- `npm run dev:renderer` starts only the React/Vite renderer.
- `npm run build` builds the renderer into `dist/renderer` for Electron production loading.
- `npm start` opens Electron against the built renderer.
- `npm run lint` runs ESLint across the project.

## Project layout

```text
electron/main.cjs      Electron main process and window lifecycle
src/main.jsx           React application, routes, pages, and navigation
src/styles.css         Tailwind entrypoint plus Yuki custom styles
index.html             Vite renderer HTML entrypoint
```
