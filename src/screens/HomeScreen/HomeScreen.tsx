import React from 'react'
import { useTitle } from 'react-use'

import { routes } from '../../routes'
import './HomeScreen.css'

const HomeScreen = () => {
  useTitle(routes.HOME.title)

  return (
    <div>
      <div>HomeScreen</div>
    </div>
  )
}

export default HomeScreen
