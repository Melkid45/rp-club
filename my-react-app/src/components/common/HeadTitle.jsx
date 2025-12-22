import React from 'react'

const HeadTitle = ({children, title, soft, description, className}) => {
  return (
    <div className="head--title">
        {soft && (<h3 className='head--title-soft base-text'>{soft}</h3>)}
        <div className="head--title-wrap">
            {title && <h2 className='title-text'>{title}</h2>}
            {description && <p className='base-text'>{description}</p>}
        </div>
    </div>
  )
}

export default HeadTitle
