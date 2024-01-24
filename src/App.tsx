import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { routes } from './routes/routes'
import HomeScreen from './screens/HomeScreen'
import LinkHubScreen from './screens/LinkHubScreen'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.HOME.path} element={<HomeScreen />} />
        <Route path={routes.LINK_HUB.path} element={<LinkHubScreen />} />
        {/* <Route path={routes.ABOUT.path} element={<AboutScreen />} /> */}
      </Routes>
    </>
  )
}

export default App
