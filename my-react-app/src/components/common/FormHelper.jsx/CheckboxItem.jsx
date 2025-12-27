import React, { Children } from 'react'

const CheckboxItem = ({ children, name }) => {
    return (
        <div className='checkbox--item'>
            <input type="checkbox" name={name} />
            <span className='active--span'></span>
            <p className='base-text'>{children}</p>
        </div>
    )
}

export default CheckboxItem
