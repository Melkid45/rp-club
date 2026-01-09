import React from 'react'
import Vector from '@/assets/images/user/setting-vector.svg';
const OperationsItem = ({type, name, summa, date, }) => {
    return (
        <div className='operations--item'>
            <img className='operations--item-vector' src={Vector} alt="" />
            <div className="operations--item-info">
                {name && (
                    <span className='medium-text'>{name}</span>
                )}
                {date && (
                    <p className='base-text'>{date}</p>
                )}
            </div>
            {summa && (
                <div className={`operations--item-summa bold-text ${type}`}>
                    {summa}
                </div>
            )}
        </div>
    )
}

export default OperationsItem
