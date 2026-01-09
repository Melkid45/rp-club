import React from 'react'
import thisRarity from '@/utils/rarity';
import Vector from '@/assets/images/user/cars-vector.svg';
const CarItem = ({ image, name, type, rarity }) => {

    return (
        <div className='car--item'>
            <img className='car--item-vector' src={Vector} alt="" />
            {image && (
                <img src={image} alt="" />
            )}
            <div className="car--item-info">
                <div className="car--info-main">
                    {name && (
                        <span className='medium-text'>{name}</span>
                    )}
                    {type && (
                        <p className='base-text'>{type}</p>
                    )}
                </div>
                {rarity && (
                    <div className={`rarity base-text ${thisRarity(rarity)}`}>
                        {rarity}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CarItem
{ }