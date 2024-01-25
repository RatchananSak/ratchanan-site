import React from 'react'
import { useTitle } from 'react-use'
import Typography from '@mui/material/Typography'
import useWindowDimensions from '../../Utilities/useWindowDimensions'

import { routes } from '../../routes'

const HomeScreen = () => {
  useTitle(routes.HOME.title)
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
