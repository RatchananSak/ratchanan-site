# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal React single-page app (Create React App, TypeScript) with two screens: Home and Link Hub. The Link Hub screen renders a list of hardcoded domains × URL paths as clickable links grouped in MUI accordions.

## Commands

```bash
yarn start          # Dev server (react-scripts)
yarn build          # Production build
yarn test           # Run tests (react-scripts test --watchAll=false to run once)
yarn deploy         # Deploy build/ to gh-pages
```

## Architecture

- **Routing**: HashRouter (`/#/` and `/#/link-hub`). All routes defined in [src/routes.ts](src/routes.ts). Unknown paths redirect to `/`.
- **Styling**: MUI v7 with a hardcoded dark theme (`createTheme({ palette: { mode: 'dark' } })`). Responsive padding via `useWindowDimensions` (2× vs 4× MUI spacing at ≤600px breakpoint).
- **Navbar**: Responsive — MUI `AppBar` with `Drawer` on mobile (`xs`), horizontal `Button` links on `sm+`. Items are duplicated in two arrays (`drawerItems` / `navItems`); add new pages to both.
- **Screen pattern**: Each screen lives under `src/screens/<Name>/` with a barrel export (`index.ts`). Screens use `react-use`'s `useTitle` to set the document title from route config.

## Key Conventions

- No semicolons (Prettier: `semi: false`), single quotes, trailing commas, print width 120.
- React Compiler (`babel-plugin-react-compiler`) is enabled — no need for manual `useCallback`/`useMemo` in new code, though existing usage is fine.
- TypeScript custom type declarations go in [src/types/global.d.ts](src/types/global.d.ts).
