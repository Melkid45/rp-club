import React from 'react'
import Vector from '@/assets/images/pass/vector.png';
import Price from '@/assets/images/shop/price.svg';
const VariablePassItem = ({ title, icon, description, price, date, status }) => {
    return (
        <div className='variable--item'>
            <img className='variable--item-vector' src={Vector} alt="" />
            {icon && (
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
            )}
            <div className="variable--item-text">
                {title && (
                    <h3 className='medium-text'>{title}</h3>
                )}
                {description && (
                    <p className='base-text'>
                        {description}
                    </p>
                )}
            </div>
            <div className="variable--item-action">
                {(price !== undefined && price !== null) && (
                    <div className="action--details">
                        <div className="price">
                            <span className='bold-text'>{price}</span>
                            <img src={Price} alt="" />
                        </div>
                        {date && (
                            <p>{date}</p>
                        )}
                    </div>
                )}
                {status && (
                    <button className='base-text'>Купить Premium</button>
                )}
                {!status && (
                    <button disabled className='base-text'>уже активен</button>
                )}
            </div>
        </div>
    )
}

export default VariablePassItem
