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