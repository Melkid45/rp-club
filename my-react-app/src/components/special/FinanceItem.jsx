import React from 'react'
import VectorFinance from '@/assets/images/user/vector--finance.svg';
const FinanceItem = ({ icon, title, description }) => {
    return (
        <div className="finance--item">
            <img className='finance--item-vector' src={VectorFinance} alt="" />
            {icon && (
                <div className="icon">
                    {icon}
                </div>
            )}
            <div className="finance--item-text">
                {title && (
                    <span className='bold-text'>{title}</span>
                )}
                {description && (
                    <p className='base-text'>{description}</p>
                )}
            </div>
        </div>
    )
}

export default FinanceItem
