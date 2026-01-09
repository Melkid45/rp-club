import React from 'react'
import { Link } from 'react-router-dom'
import Vector from '@/assets/images/forum/vector.png';
const ThemeItem = ({title, icon, description, count, answer, user, id}) => {

    return (
        <Link to={`/${id}`} className='theme--item'>
            <img className='theme--item-vector' src={Vector} alt="" />
            <div className="theme--item-info">
                {icon && (
                    <div className="icon">
                        {icon}
                    </div>
                )}
                <div className="info--text">
                    <h4 className='semi-text'>{title}</h4>
                    <p className='base-text'>{description}</p>
                </div>
            </div>
            <div className="theme--item-action">
                <div className="item--action-attr">
                    {count && (
                        <div className="item">
                            <span className='bold-text'>{count}</span>
                            <p className='base-text'>ТЕМ</p>
                        </div>
                    )}
                    <div className="line"></div>
                    {answer && (
                        <div className="item">
                            <span className='bold-text'>{answer}</span>
                            <p className='base-text'>Ответов</p>
                        </div>
                    )}
                </div>
                {user && (
                    <div className="item--action-user">
                        {user.avatar && (
                            <div className="avatar">
                                {user.avatar}
                            </div>
                        )}
                        <div className="user--info">
                            {user.title && (
                                <span className='base-text'>{user.title}</span>
                            )}
                            {user.role && (
                                <p className='base-text'><span>{user.role}</span>{user.date}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}

export default ThemeItem
