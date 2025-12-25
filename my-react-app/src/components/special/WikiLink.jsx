import Vector from '@/assets/images/wiki/vector.svg';
import React from 'react';
import { Link } from 'react-router-dom';
const WikiLink = ({ title, description, link, className }) => {
    return (
        <Link to={link} className={`wiki-link--item ${className}`}>
            {title && (
                <h3 className='medium-text'>{title}</h3>
            )}
            {description && (
                <p className='base-text'>{description}</p>
            )}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.53125 0.530273L14.5312 14.5303M14.5312 14.5303V0.530273M14.5312 14.5303H0.53125" stroke="#5A5A6A" stroke-width="1.5" />
            </svg>
            <img className='item--vector' src={Vector} alt="" />
        </Link >
    )
}

export default WikiLink
