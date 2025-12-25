import React from 'react'
import { Link } from 'react-router-dom'

const NavAccordion = ({ title, links, id, isActive, onClick }) => {
    return (
        <nav className={`nav-accordion ${isActive ? 'active' : ''}`}>
            <span onClick={() => onClick(id)} className={`base-text`}>{title}</span>
            <ul>
                <Link className='base-text'>Первые шаги</Link>
                <Link className='base-text'>Автошкола</Link>
                <Link className='base-text'>Начальные квесты</Link>
                <Link className='base-text'>Телефон</Link>
                <Link className='base-text'>Меню взаимодействия</Link>
            </ul>
        </nav>
    )
}

export default NavAccordion
