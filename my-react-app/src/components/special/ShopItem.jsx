import React, { useState } from 'react'
import Price from '@/assets/images/shop/price.svg';
import { Link } from 'react-router-dom';
const ShopItem = ({ title, description, image, rarity, price, type, id, sale }) => {
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
        <Link to={`/shop/${id}`}
                state={{ title, description, image, price,id,sale,type, rarity, rearityClass }} className='shop--item'>
            <div className="shop--item-head">
                <span className={`base-text ${thisRarity()}`}>{rarity}</span>
                <img src={image} alt="" />
                {sale && (
                    <span className='item--sale base-text'>-{sale}%</span>
                )}
            </div>
            <div className="shop--item-information">
                {title && (
                    <h3 className='medium-text'>{title}</h3>
                )}
                {type && (
                    <div className="item--type">
                        <span className='medium-text'>{type}</span>
                        <p className='base-text'>Сезонный пропуск <br />
                            «Летний пропуск 2026»</p>
                    </div>
                )}
                {price && (
                    <div className="item--price">
                        <span className='extra-text'>{price}</span>
                        <img src={Price} alt="" />
                    </div>
                )}
            </div>
        </Link>
    )
}

export default ShopItem
