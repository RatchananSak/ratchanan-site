import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path={routes.HOME.path} element={<HomeScreen />} />
          <Route path={routes.LINK_HUB.path} element={<LinkHubScreen />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
