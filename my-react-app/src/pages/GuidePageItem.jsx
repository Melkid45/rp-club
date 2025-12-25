import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import GuideItem from '@/assets/images/guide/guide-item.png';
import NavAccordion from '../components/special/NavAccordion';
import GuideBack from '@/assets/images/guide/guide-single-back.png';
export default function GuidePageItem() {
    const [activeSpan, setActiveSpan] = useState(null)
    const { state } = useLocation();
    const { title, description, date, event, image, user, check } = state || {};
    const handleSpanClick = (id) => {
        setActiveSpan(prev => (prev === id ? null : id)); // toggle
    };
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs--body base-text">
                        <Link to={"/news"}>Блог</Link>
                        <p>/</p>
                        <a href="">{user}</a>
                        <p>/</p>
                        <span>{title}</span>
                    </div>
                </div>
            </div>
            <div className="single--guide">
                <img className='single--guide-back' src={GuideBack} alt="" />
                <div className="container">
                    <div className="single--guide-body">
                        <div className="guide-body-category">
                            <h3 className='medium-text'>
                                Категории
                            </h3>
                            <div className="guide-category-list">
                                <NavAccordion
                                    id={1}
                                    title="Начало игры"
                                    isActive={activeSpan === 1}
                                    onClick={handleSpanClick}
                                />
                                <NavAccordion
                                    id={2}
                                    isActive={activeSpan === 2}
                                    onClick={handleSpanClick}
                                    title="Основы игры" />
                                <NavAccordion
                                    id={3}
                                    isActive={activeSpan === 3}
                                    onClick={handleSpanClick}
                                    title="Работы" />
                                <NavAccordion
                                    id={4}
                                    isActive={activeSpan === 4}
                                    onClick={handleSpanClick}
                                    title="Всё о досуге" />
                                <NavAccordion
                                    id={5}
                                    isActive={activeSpan === 5}
                                    onClick={handleSpanClick}
                                    title="Тематические события" />
                                <NavAccordion
                                    id={6}
                                    isActive={activeSpan === 6}
                                    onClick={handleSpanClick}
                                    title="Гос" />
                                <NavAccordion
                                    id={7}
                                    isActive={activeSpan === 7}
                                    onClick={handleSpanClick}
                                    title="Крайм" />
                                <NavAccordion
                                    id={8}
                                    isActive={activeSpan === 8}
                                    onClick={handleSpanClick}
                                    title="Семьи" />
                                <NavAccordion
                                    id={9}
                                    isActive={activeSpan === 9}
                                    onClick={handleSpanClick}
                                    title="Транспорт" />
                                <NavAccordion
                                    id={10}
                                    isActive={activeSpan === 10}
                                    onClick={handleSpanClick}
                                    title="Бизнесы" />
                                <NavAccordion
                                    id={11}
                                    isActive={activeSpan === 11}
                                    onClick={handleSpanClick}
                                    title="Сезонный пропуск" />
                            </div>
                        </div>
                        <div className="guide-body-frame">
                            <div className="guide-frame-head">
                                <div className="frame-head-info">
                                    <div className="tags">
                                        <span className='base-text popular'>Популярное</span>
                                        <span className='base-text pin'>Закреплено</span>
                                        <span className='base-text guide-cat'>Гайд</span>
                                    </div>
                                    <h1 className='bold-text'>{title}</h1>
                                </div>
                                <div className="frame-head-soft">
                                    <p className='base-text'>{date}</p>
                                    <p className='base-text'>{check} просмотров</p>
                                    <p className='base-text'>47 ответов</p>
                                </div>
                            </div>
                            <div className="guide-frame-main">
                                <div className="frame-main-info">
                                    <p className='base-text'>{description}</p>
                                    <img src={GuideItem} alt="" />
                                    <p className='base-text'>
                                        Настоятельно рекомендуется выполнять задания, предоставленные NPC, так как они позволят вам получить телефон и другие стартовые предметы, необходимые для нормальной жизни на сервере. Также за выполнение начальных квестов вы получите награды в виде кейсов.
                                        Для того чтобы получать ежечасные выплаты по безработице или зарплату в организации, вам необходимо получить банковскую карту. Вы можете сделать это в любом отделении банка.
                                    </p>
                                </div>
                                <div className="frame-main-share">
                                    <p className='base-text'>Вся информация, размещённая на сайте, носит исключительно ознакомительный характер и не является публичной офертой.</p>
                                    <a href="" className='base-text'>Поделиться</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
