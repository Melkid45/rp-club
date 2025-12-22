import React from 'react'
import { NavLink } from 'react-router-dom'

const ActientButton = ({children, path, className}) => {
  return (
    <NavLink className={`base-text actient--button ${className}`} to={path}>
        <span>{children}</span>
    </NavLink>
  )
}

export default ActientButton
