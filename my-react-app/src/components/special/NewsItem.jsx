import React from 'react'
import ArticlePage from '../../pages/ArticlePage'
import { NavLink } from 'react-router-dom'

const NewsItem = ({ id, event, title, description, date, image }) => {

    return (
        <div className='news--item'>
            <div className="news--item-head">
                {image && (
                    <img src={image} alt="" />
                )}
                {event && (
                    <div className="event-name base-text">{event}</div>
                )}
            </div>
            <div className="news--item-info">
                {title && (
                    <h3 className='medium-text'>{title}</h3>
                )}
                {description && (
                    <p className='base-text'>{description}</p>
                )}
            </div>
            <div className="news--item-action">
                {date && (
                    <span className='base-text'>{date}</span>
                )}
                <NavLink className="base-text"
                    to={`/article/${id}`}
                    state={{ date, title, description, event, image }
                    }>
                    Перейти
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353516 0.353516L8.35352 8.35352M8.35352 8.35352V0.353516M8.35352 8.35352H0.353516" stroke="#C9022D" />
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export default NewsItem
