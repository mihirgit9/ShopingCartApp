import React from 'react'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
        <p>Oops! Page Not Found.</p>
        <NavLink to={'/'}>Go to Home</NavLink>
    </div>
  )
}

export default NoPage