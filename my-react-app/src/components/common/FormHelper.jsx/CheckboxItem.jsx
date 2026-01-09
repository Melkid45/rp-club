import React, { Children, forwardRef } from 'react'

const CheckboxItem = forwardRef(({ children, name, error, ...props }, ref) => {
    return (
        <div className={`checkbox--item ${error ? 'error' : ''}`}>
            <input
                type="checkbox"
                ref={ref}
                {...props}
                name={name}
            />
            <span className='active--span'></span>
            <p className='base-text'>{children}</p>
        </div>
    )
}
)
export default CheckboxItem
