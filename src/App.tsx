import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useWindowDimensions from './Utilities/useWindowDimensions'
import Navbar from './Navbar/Navbar'
import HomeScreen from './screens/HomeScreen'
import LinkHubScreen from './screens/LinkHubScreen'

import { routes } from './routes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const { width } = useWindowDimensions()

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ p: width <= 600 ? 2 : 4 }}>
        <Toolbar />
        <Routes>
          <Route path={routes.HOME.path} element={<HomeScreen />} />
          <Route path={routes.LINK_HUB.path} element={<LinkHubScreen />} />
          <Route path="*" element={<Navigate to={routes.HOME.path} replace />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
