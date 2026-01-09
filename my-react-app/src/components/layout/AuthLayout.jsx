import React from 'react'
import HeadTitle from '../common/HeadTitle'
import { NavLink, Outlet } from 'react-router-dom'
import Auth from '@/assets/images/auth/auth--back.png'
export default function AuthLayout({description, soft, children}) {
    return (
        <section className='auth'>
            <img className='auth--back' src={Auth} alt="" />
            <div className="container">
                <div className="auth--body">
                    <HeadTitle
                        soft={soft}
                        description={description}
                        className='auth--title'
                        title={
                            <>
                                <NavLink to='/auth/register'>Регистрация</NavLink>
                                <span>/</span>
                                <NavLink to='/auth/login'>Вход</NavLink>
                            </>
                        }
                    />
                    {children}
                </div>
            </div>
        </section>
    )
}
