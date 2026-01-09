import React from 'react'
import Vector from '@/assets/images/user/setting-vector.svg';

const ArrowSvg = () => {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.53125 0.530334L11.5313 11.5303M11.5313 11.5303V0.530334M11.5313 11.5303H0.53125" stroke="#8A8F9A" stroke-width="1.5" />
        </svg>

    )
}
const SettingsItem = ({type, message, modalType, name, event}) => {
    return (
        <div className='settins--item'>
            <img className='settins--item-vector' src={Vector} alt="" />
            <div className="settins--item-info">
                {name && (
                    <span className='medium-text'>{name}</span>
                )}
                {message && (
                    <p className='base-text'>{message}</p>
                )}
            </div>
            <button onClick={event} className='settins--item-modal medium-text'>
                {name == 'Telegram' ? (
                    'привязать'
                ) : (
                    'изменить'
                )}
                <ArrowSvg/>
            </button>
        </div>
    )
}

export default SettingsItem;