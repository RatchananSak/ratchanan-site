import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes/routes'

const Navbar = () => {
  return (
    <div>
      <Link to={routes.HOME.path}>{routes.HOME.name}</Link>
      <Link to={routes.LINK_HUB.path}>{routes.LINK_HUB.name}</Link>
      {/* <Link to={routes.ABOUT.path}>{routes.ABOUT.name}</Link> */}
    </div>
  )
}

export default Navbar
