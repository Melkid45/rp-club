import React from 'react'
import { Link } from 'react-router-dom'

const WikiCat = ({title, icon, count, link}) => {
  return (
    <Link to='' className='wiki-category--item'>
        <div className="item--icon">
            <img src={icon} alt="" />
        </div>
        <div className="item--information">
            <h3 className="medium-text">{title}</h3>
            <span className="base-text">{count} статей</span>
        </div>
    </Link>
  )
}

export default WikiCat
