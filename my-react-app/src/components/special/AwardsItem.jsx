import React from 'react'
import { Link } from 'react-router-dom'

const AwardsItem = ({ title, level, rarity, image, id }) => {
    const rearityClass = thisRarity();
    function thisRarity() {
        switch (rarity) {
            case 'Обычное':
                return 'common';
            case 'неОбычное':
                return 'uncommon';
            case 'Редкое':
                return 'rare';
            case 'Эпическое':
                return 'epic';
            case 'Легендарное':
                return 'legendary';
            case 'Уникальное':
                return 'unique';
            default:
                return '';
        }
    }
    return (
        <Link to={`/shop/${id}`} className={`awards--item shop--item ${thisRarity()}`}>
            <div className="awards--item-head">
                <img src={image} alt="" />
                <span className={`rarity base-text ${thisRarity()}`}>
                    {rarity}
                </span>
            </div>
            <div className="awards--item-text">
                {title && (
                    <h3 className='medium-text'>{title}</h3>
                )}
                {level && (
                    <p className='base-text'>{level} уровень</p>
                )}
            </div>
        </Link>
    )
}

export default AwardsItem
