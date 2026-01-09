import React from 'react'
import Back from '@/assets/images/pass/clothes.png';
import { Link } from 'react-router-dom';
const ClothesItem = ({ rarity, level, image, id }) => {
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
        <Link to={`/shop/${id}`} state={{id, rarity, image, rearityClass }} className='clothes--item'>
            <img className='clothes--item-back' src={Back} alt="" />
            <img className='clothes--item-img' src={image} alt="" />
            <div className="clothes--item-head">
                <span className={`rarity base-text ${thisRarity()}`}>
                    {rarity}
                </span>
                <div className="level base-text">
                    награда за {level} Уровень
                </div>
            </div>
        </Link>
    )
}

export default ClothesItem
