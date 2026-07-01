# Security & Performance Fix Plan for ratchanan-site

## Instructions for Qwen 3.6 AI Agent

This document is a self-contained step-by-step implementation guide. Each step includes the exact file path, the exact code to change, and verification commands. Follow steps in order — each assumes the previous step succeeded.

**Project:** CRA + TypeScript + React 19 + MUI 7. Static personal site, 2 screens, 15 source files.
**Package manager:** Yarn Berry (yarn.lock v5 format).
**Style rules:** No semicolons, single quotes, trailing commas, 120 print width.

---

## Step 1: Add Security Meta Tags to public/index.html

**File:** `public/index.html`

Replace the entire `<head>` section (lines 3-27) with the following. This adds CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and fixes the title.

```html
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Ratchanan Site" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-Frame-Options" content="DENY" />
    <meta name="referrer" content="no-referrer" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Ratchanan Site</title>
  </head>
```

Note: Remove the old CRA comments (`<!-- ... -->`) between tags — keep only the HTML tags shown above.

---

## Step 2: Fix package.json — Pin Versions, Remove Dead Deps, Update Versions

**File:** `package.json`

### Step 2a: Remove the deprecated Babel plugin

Delete this line (currently line 32):
```
"@babel/plugin-proposal-private-property-in-object": "~7.21.11",
```

### Step 2b: Update react-router-dom version

Change line (currently line 45):
```
"react-router-dom": "~7.0.0",
```
To:
```
"react-router-dom": "^7.5.0",
```

### Step 2c: Pin the two `latest` devDependencies

Change lines 52-53:
```
"babel-plugin-react-compiler": "latest",
"eslint-plugin-react-hooks": "latest",
```
To:
```
"babel-plugin-react-compiler": "^19.0.0",
"eslint-plugin-react-hooks": "^5.2.0",
```

### Step 2d: Remove react-use dependency (will be replaced in Step 10)

Change line (currently line 47):
```
"react-use": "~17.5.0",
```
To: (delete the line entirely)

The final `package.json` should look like this:

```json
{
  "name": "ratchanan-site",
  "version": "0.2.0",
  "homepage": ".",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "dependencies": {
    "@emotion/react": "~11.14.0",
    "@emotion/styled": "~11.14.0",
    "@fontsource/roboto": "~5.0.8",
    "@mui/icons-material": "~7.0.0",
    "@mui/material": "~7.0.0",
    "@testing-library/jest-dom": "~6.6.2",
    "@testing-library/react": "~16.3.0",
    "@testing-library/user-event": "~14.5.2",
    "@types/react": "19.2.3",
    "@types/react-dom": "19.2.3",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-router-dom": "^7.5.0",
    "react-scripts": "~5.0.1",
    "typescript": "~5.2.0",
    "web-vitals": "~4.2.4"
  },
  "devDependencies": {
    "babel-plugin-react-compiler": "^19.0.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "gh-pages": "^6.1.1"
  }
}
```

---

## Step 3: Move _redirects from src/ to public/

- **Delete** the file: `src/_redirects`
- **Create** the file: `public/_redirects` with this content:

```
/*    /index.html  200
```

CRA only copies files from `public/` into the build output. The old location `src/_redirects` was never included in builds.

---

## Step 4: Delete Dead Files and Dead Code

### Step 4a: Delete dead `babel.config.js`

Delete the entire file: `babel.config.js`

This file uses ESM `export const plugins = [...]` syntax, but the project lacks `"type": "module"` in package.json — making it syntactically invalid. Additionally, CRA ignores custom `babel.config.js` files; it uses its own internal Babel config. The React Compiler is NOT actually running.

### Step 4b: Delete unused `src/logo.svg`

Delete the file: `src/logo.svg`

This 2.6 KB SVG file is never imported anywhere in the source code. Confirmed: `grep -r "logo.svg" src/` returns no matches.

### Step 4c: Remove the unused SVG type declaration

**File:** `src/types/global.d.ts`

Replace the entire file content with nothing (empty file), since the only type declaration was for the now-deleted `logo.svg`. Keep the file itself — it may be useful later for custom type declarations.

Delete lines 1-4 (the entire content):
```ts
declare module '*.svg' {
  const content: any
  export default content
}
```

### Step 4d: Remove dead ABOUT route

**File:** `src/routes.ts`

Delete line 4:
```ts
ABOUT: { title: 'About', path: '/about' },
```

Also remove the trailing comma from line 3 so it becomes:
```ts
LINK_HUB: { title: 'Link Hub', path: '/link-hub' },
```

The final file should be:
```ts
export const routes = {
  HOME: { title: 'Ratchanan Site', path: '/' },
  LINK_HUB: { title: 'Link Hub', path: '/link-hub' },
}
```

### Step 4e: Delete broken App.test.js

Delete the file: `src/App.test.js`

This test checks for "learn react" text, which doesn't exist in the app. It always fails and tests nothing real.

---

## Step 5: Install Dependencies

Run this command:
```bash
yarn install
```

This regenerates `yarn.lock` with the version changes from Step 2 and removes the deleted packages.

**Verify:** `yarn build` should complete successfully with no errors.

---

## Step 6: Fix Lazy State Initialization in useWindowDimensions.ts

**File:** `src/Utilities/useWindowDimensions.ts`

Change line 12 from:
```ts
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
```
To:
```ts
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)
```

**Why:** `getWindowDimensions()` was called on every render even though React only uses the first value. Passing the function reference instead tells React to call it only once. Per Vercel rule `rerender-lazy-state-init`.

---

## Step 7: Add Resize Debounce in useWindowDimensions.ts

**File:** `src/Utilities/useWindowDimensions.ts`

Replace the `useEffect` block (lines 14-21):

OLD — lines 14-21:
```ts
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
```

NEW:
```ts
  useEffect(() => {
    let rafId: number | undefined

    function handleResize() {
      if (rafId !== undefined) return
      rafId = requestAnimationFrame(() => {
        rafId = undefined
        setWindowDimensions(getWindowDimensions())
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId !== undefined) cancelAnimationFrame(rafId)
    }
  }, [])
```

**Why:** Browser `resize` event fires at 60+ Hz. Without debouncing, three components each trigger React state updates on every fire. `requestAnimationFrame` throttles to at most one update per frame. Per Vercel rule `rerender-defer-reads`.

The final file should look like:
```ts
import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

  useEffect(() => {
    let rafId: number | undefined

    function handleResize() {
      if (rafId !== undefined) return
      rafId = requestAnimationFrame(() => {
        rafId = undefined
        setWindowDimensions(getWindowDimensions())
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId !== undefined) cancelAnimationFrame(rafId)
    }
  }, [])

  return windowDimensions
}
```

---

## Step 8: Fix Navbar.tsx — Remove Duplicate CssBaseline, Stabilize Container, Named Imports

**File:** `src/Navbar/Navbar.tsx`

### Step 8a: Use named React imports

Change line 1 from:
```ts
import * as React from 'react'
```
To:
```ts
import React, { useState, useMemo } from 'react'
```

### Step 8b: Remove CssBaseline import

Delete line 5:
```ts
import CssBaseline from '@mui/material/CssBaseline'
```

### Step 8c: Change React.useState to useState

Change line 53 from:
```ts
const [mobileOpen, setMobileOpen] = React.useState(false)
```
To:
```ts
const [mobileOpen, setMobileOpen] = useState(false)
```

### Step 8d: Wrap container function in useMemo

Change line 77 from:
```ts
const container = window !== undefined ? () => window().document.body : undefined
```
To:
```ts
const container = useMemo(
  () => (window !== undefined ? () => window().document.body : undefined),
  [window],
)
```

### Step 8e: Remove duplicate CssBaseline element

Delete line 81:
```ts
<CssBaseline />
```

**Why:** CssBaseline is already rendered in App.tsx line 25. Rendering it twice creates duplicate CSS reset rules in the DOM. The container arrow function was recreated every render, causing the Drawer to see a new `container` prop unnecessarily.

**Verify:** `yarn build` should succeed. The app should render without errors.

---

## Step 9: Fix App.tsx — Code Splitting, Deferred Fonts, Stabilize sx Prop

**File:** `src/App.tsx`

Replace the ENTIRE file content with the following:

```ts
import React, { Suspense, useEffect, useMemo } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useWindowDimensions from './Utilities/useWindowDimensions'
import Navbar from './Navbar/Navbar'

import { routes } from './routes'

const HomeScreen = React.lazy(() => import('./screens/HomeScreen'))
const LinkHubScreen = React.lazy(() => import('./screens/LinkHubScreen'))

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const { width } = useWindowDimensions()

  useEffect(() => {
    // Defer non-critical font weights to after initial render
    import('@fontsource/roboto/300.css')
    import('@fontsource/roboto/500.css')
    import('@fontsource/roboto/700.css')
  }, [])

  const padding = width <= 600 ? 2 : 4
  const boxSx = useMemo(() => ({ p: padding }), [padding])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box sx={boxSx}>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={routes.HOME.path} element={<HomeScreen />} />
            <Route path={routes.LINK_HUB.path} element={<LinkHubScreen />} />
            <Route path="*" element={<Navigate to={routes.HOME.path} replace />} />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>
  )
}

export default App
```

**Changes made and why:**
1. **React.lazy + Suspense** — Route-level code splitting. Each screen becomes a separate JS chunk loaded on demand. Per Vercel rule `bundle-dynamic-imports`.
2. **Deferred font loading** — Only 400 weight is loaded statically (in index.tsx, see Step 11). 300/500/700 are loaded dynamically after initial render. Per Vercel rule `bundle-defer-third-party`.
3. **Memoized sx prop** — `boxSx` is stable across renders unless `padding` changes. Prevents MUI from reprocessing the style object every render. Per Vercel rule `rerender-memo-with-default-value`.

---

## Step 10: Fix HomeScreen.tsx — Replace react-use with useEffect

**File:** `src/screens/HomeScreen/HomeScreen.tsx`

Replace the entire file content:

```ts
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import useWindowDimensions from '../../Utilities/useWindowDimensions'

import { routes } from '../../routes'

const HomeScreen = () => {
  useEffect(() => {
    document.title = routes.HOME.title
  }, [])

  const { width } = useWindowDimensions()

  return (
    <div>
      <Typography variant="h4" sx={{ mb: width <= 600 ? 2 : 4 }}>
        {'Home'}
      </Typography>
    </div>
  )
}

export default HomeScreen
```

**Changes:**
- Removed `import { useTitle } from 'react-use'`
- Added `import React, { useEffect } from 'react'`
- Replaced `useTitle(routes.HOME.title)` with `useEffect(() => { document.title = routes.HOME.title }, [])`

**Why:** The `react-use` library (~15-30KB gzipped) was imported for a single 3-line hook. This removes the dependency entirely. Per Vercel rule `bundle-barrel-imports`.

---

## Step 11: Fix LinkHubScreen.tsx — Replace react-use, Fix useCallback

**File:** `src/screens/LinkHubScreen/LinkHubScreen.tsx`

Replace the entire file content:

```ts
import React, { useEffect, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'

import useWindowDimensions from '../../Utilities/useWindowDimensions'
import { routes } from '../../routes'
import { DOMAINS, PATHS } from './constant'

// Pre-compute links array at module level to avoid re-computation on every render
const LINKS = DOMAINS.map((domain) => PATHS.map((path) => `${domain}${path}`))

// Pre-compute panel IDs to avoid string concatenation in render
const PANEL_IDS = DOMAINS.map((_, i) => `accordion${i}`)

const LinkHubScreen = () => {
  useEffect(() => {
    document.title = routes.LINK_HUB.title
  }, [])

  const { width } = useWindowDimensions()
  const [expanded, setExpanded] = React.useState<string | null>(null)

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, isExpanded: boolean, panel: string) => {
      setExpanded(isExpanded ? panel : null)
    },
    [],
  )

  return (
    <div>
      <Typography variant="h4" sx={{ mb: width <= 600 ? 2 : 4 }}>
        {routes.LINK_HUB.title}
      </Typography>
      {DOMAINS.map((domain, domainIndex) => (
        <Accordion
          key={PANEL_IDS[domainIndex]}
          expanded={expanded === PANEL_IDS[domainIndex]}
          onChange={(event, isExpanded) => handleChange(event, isExpanded, PANEL_IDS[domainIndex])}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ wordBreak: 'break-all' }}>
              {domain}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <LinkList links={LINKS[domainIndex]} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

const LinkList = React.memo(({ links }: { links: string[] }) => (
  <Paper variant="outlined">
    <List>
      {links.map((item) => (
        <ListItem key={item}>
          <Link href={`https://${item}`} target="_blank" rel="noreferrer" sx={{ wordBreak: 'break-all' }}>
            {`https://${item}`}
          </Link>
        </ListItem>
      ))}
    </List>
  </Paper>
))

LinkList.displayName = 'LinkList'

export default LinkHubScreen
```

**Changes and why:**
1. Removed `import { useTitle } from 'react-use'` — same as Step 10.
2. Replaced `useTitle(...)` with `useEffect(() => { document.title = ... }, [])`.
3. **Fixed the ineffective `useCallback`:** The old pattern `handleChange(panel)(event, isExpanded)` created a new inner function every call. The new pattern uses a direct callback `(event, isExpanded) => handleChange(event, isExpanded, panelId)` — the `useCallback` now actually prevents recreation.
4. Added `key` prop to `Accordion` — missing in the original code (React warns about missing keys in lists).
5. Pre-computed `PANEL_IDS` at module level to avoid `\`accordion${domainIndex}\`` string concatenation in render.

> **⚠️ IMPORTANT — MUI Accordion v7 API Check:** The `onChange` handler signature above assumes MUI Accordion v7 passes `(event, isExpanded)` as the first two arguments. If the implementation finds that MUI Accordion v7 uses a different signature (e.g., `(event, expanded)` or includes the panel ID natively), adjust `handleChange` accordingly. The key principle remains: pass the panel identifier as a third argument or derive it from the event target, but do NOT use the `useCallback(...)(panel)` closure factory pattern that recreates functions on every call.

---

## Step 12: Fix index.tsx — Remove Static Font Imports

**File:** `src/index.tsx`

Replace the entire file content:

```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router } from 'react-router-dom'
import '@fontsource/roboto/400.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router basename="/">
    <App />
  </Router>,
)

reportWebVitals()
```

**Changes:**
- Kept only `@fontsource/roboto/400.css` (the base weight used by MUI components for body text)
- Removed imports for weights 300, 500, 700 — these are now loaded dynamically in App.tsx (Step 9)

**Why:** Reduces critical-path CSS. The 400 weight renders immediately in Roboto; 300/500/700 load after initial paint. Per Vercel rule `bundle-defer-third-party`.

---

## Step 13: Final Build and Verification

Run these commands in order:

```bash
yarn install
yarn build
yarn start
```

### Verification checklist:

1. **`yarn install`** — completes without errors, no warnings about deprecated packages
2. **`yarn build`** — exits with code 0, produces `build/` directory
3. **`yarn start`** — opens browser to http://localhost:3000
4. **Home screen** — renders "Home" heading, browser tab shows "Ratchanan Site"
5. **Link Hub screen** — navigate to `http://localhost:3000/#/link-hub`, accordions render, browser tab shows "Link Hub"
6. **Accordion behavior** — clicking an accordion expands it, clicking another collapses the first (single-expand mode works)
7. **Browser DevTools → Elements:**
   - `<meta http-equiv="Content-Security-Policy" ...>` is present in `<head>`
   - `<meta http-equiv="X-Content-Type-Options" content="nosniff">` is present
   - `<meta http-equiv="X-Frame-Options" content="DENY">` is present
   - `<meta name="referrer" content="no-referrer">` is present
   - `<title>Ratchanan Site</title>` is present
   - Only one `<style>` block for CssBaseline (no duplicate)
8. **Browser DevTools → Console:** No errors, no warnings (ignore web vitals message)
9. **Browser DevTools → Network:**
   - JS is split into chunks (main chunk + separate chunks for HomeScreen and LinkHubScreen)
   - Font weight 400 loads in initial requests; 300/500/700 load after page render
10. **Resize browser window** — responsive padding updates smoothly (no jank)
11. **`yarn deploy`** — deploys to gh-pages (optional, verify manually)

---

## Summary of All Changes

| # | File | Action |
|---|------|--------|
| 1 | `public/index.html` | Replace `<head>` — add CSP, security headers, fix title |
| 2a | `package.json` | Remove `@babel/plugin-proposal-private-property-in-object` |
| 2b | `package.json` | Update `react-router-dom` from `~7.0.0` to `^7.5.0` |
| 2c | `package.json` | Pin `babel-plugin-react-compiler` and `eslint-plugin-react-hooks` |
| 2d | `package.json` | Remove `react-use` dependency |
| 3 | Delete `src/_redirects` | Move to `public/_redirects` |
| 4a | Delete `babel.config.js` | Dead config file |
| 4b | Delete `src/logo.svg` | Unused CRA artifact |
| 4c | `src/types/global.d.ts` | Remove SVG type declaration |
| 4d | `src/routes.ts` | Remove dead ABOUT route |
| 4e | Delete `src/App.test.js` | Broken test (tests for nonexistent "learn react" text) |
| 5 | Run `yarn install` | Regenerate lockfile |
| 6 | `src/Utilities/useWindowDimensions.ts` | Fix lazy state init |
| 7 | `src/Utilities/useWindowDimensions.ts` | Add rAF resize debounce |
| 8 | `src/Navbar/Navbar.tsx` | Named imports, useMemo container, remove duplicate CssBaseline |
| 9 | `src/App.tsx` | React.lazy code splitting, deferred fonts, memoized sx |
| 10 | `src/screens/HomeScreen/HomeScreen.tsx` | Replace react-use useTitle with useEffect |
| 11 | `src/screens/LinkHubScreen/LinkHubScreen.tsx` | Replace react-use, fix useCallback, add Accordion key |
| 12 | `src/index.tsx` | Remove 3 static font imports, keep only 400 weight |
| 13 | Verify | `yarn install && yarn build && yarn start` |

## If Something Goes Wrong

- If `yarn install` fails after changing package.json, check the version pins in Step 2c. Run `yarn info <package> versions --json` to find the actual latest version.
- If `yarn build` produces TypeScript errors, make sure `import React` is present in every `.tsx` file (the `jsx: "react"` setting in tsconfig.json requires it).
- If the accordion onChange handler doesn't fire, check that the MUI Accordion v7 API matches the `(event, isExpanded)` signature used in Step 11.
- If fonts don't appear, check that `@fontsource/roboto` is still in package.json dependencies.
