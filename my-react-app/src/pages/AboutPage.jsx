import HeadTitle from '../components/common/HeadTitle';
import Item1 from '@/assets/images/about/items/1.png';
import Item2 from '@/assets/images/about/items/2.png';
import Item3 from '@/assets/images/about/items/3.png';
import Item4 from '@/assets/images/about/items/4.png';
import History from '@/assets/images/about/history-back.png';
import Steps from '@/assets/images/about/about-back.png';
import Values from '@/assets/images/about/values-back.png';
import PossibleItem from '../components/special/PossibleItem';
import Icon1 from '@/assets/images/home/possible/icons/icon1.svg';
import Icon2 from '@/assets/images/home/possible/icons/icon2.svg';
import Icon3 from '@/assets/images/home/possible/icons/icon3.svg';
import Icon4 from '@/assets/images/home/possible/icons/icon4.svg';
import ActientButton from '../components/common/ActientButton';
import { NavLink } from 'react-router-dom';
export default function AboutPage() {
    return (
        <>
            <section className='our--history'>
                <img className='our--history-back' src={History} alt="" />
                <div className="container">
                    <div className="our--history-body">
                        <HeadTitle
                            hasBack={true}
                            title="НАША ИСТОРИЯ"
                            description="Узнайте, как создавался CLUB — от идеи до крупнейшего игрового сообщества"
                            soft="О проекте"
                        ></HeadTitle>
                        <div className="history-body-frame">
                            <div className="item text-item">
                                <h3 className='medium-text'>Как всё начиналось</h3>
                                <p className='base-text'>CLUB начинался как небольшой проект группы энтузиастов, объединённых общей страстью
                                    к качественному геймплею и уникальной атмосфере.
                                    В 2025 году мы запустили первый сервер
                                    с несколькими десятками игроков.</p>
                            </div>
                            <div className="item">
                                <img src={Item1} alt="" />
                            </div>
                            <div className="item">
                                <img src={Item2} alt="" />
                            </div>
                            <div className="item">
                                <img src={Item3} alt="" />
                                <div className="action">
                                    <button className='play'>
                                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 9.93042L0 19.8608V-9.28342e-06L17 9.93042Z" fill="white" />
                                        </svg>
                                    </button>
                                    <p className='base-text'>ЗАПУСТЬ ВИДЕО</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={Item4} alt="" />
                            </div>
                            <div className="item text-item">
                                <h3 className='medium-text'>Сегодня CLUB</h3>
                                <p className='base-text'>Сегодня CLUB — это не просто игровой проект.
                                    Это целая экосистема с активными пользователями, развитой экономикой, уникальными механиками
                                    и сплочённым сообществом.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='steps'>
                <img className='steps--back' src={Steps} alt="" />
                <div className="container">
                    <div className="steps--body">
                        <HeadTitle
                            title="путь развития"
                            soft="история"
                        ></HeadTitle>
                        <div className="steps--body-frame">
                            <div className="frame--start">
                                <div className="item">
                                    <h3 className='bold-text'>ЯНВАРЬ 2026</h3>
                                    <span className='medium-text'>Масштабирование</span>
                                    <p className='base-text'>Запуск второго сервера, внедрение уникальной экономической системы <br /> и первые крупные игровые события. Аудитория выросла до 1000 игроков.</p>
                                </div>
                                <div className="item">
                                    <h3 className='bold-text'>СЕГОДНЯ</h3>
                                    <span className='medium-text'>Идем к Tier-1 проектам</span>
                                    <p className='base-text'>Запуск глобального обновления 3.0, новые локации, расширенная <br /> кастомизация и амбициозные планы на будущее. История продолжается.</p>
                                </div>
                            </div>
                            <div className="frame--steps">
                                <svg className='frame--steps-line' width="2" height="686" viewBox="0 0 2 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="686" fill="url(#paint0_linear_2_855)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2_855" x1="1" y1="0" x2="1" y2="686" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C9022D" />
                                            <stop offset="1" stop-color="#12121A" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="frame--steps-circles">
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                            </div>
                            <div className="frame--end">
                                <div className="item">
                                    <h3 className='bold-text'>ДЕКАБРЬ 2025</h3>
                                    <span className='medium-text'>Запуск проекта</span>
                                    <p className='base-text'>Первый сервер CLUB начал работу с базовым функционалом. <br />
                                        Небольшое сообщество из 50 энтузиастов стало фундаментом для будущего развития.</p>
                                </div>
                                <div className="item">
                                    <h3 className='bold-text'>ФЕВРАЛЬ 2025</h3>
                                    <span className='medium-text'>Новая эра</span>
                                    <p className='base-text'>Полностью переработанный движок, система кланов, сезонные пропуска <br />
                                        и профессиональная модерация. CLUB становится одним из крупнейших проектов.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='values'>
                <img className='values--back' src={Values} alt="" />
                <div className="container">
                    <div className="values--body">
                        <HeadTitle
                            title="Наши ценности"
                            soft="Философия"
                        ></HeadTitle>
                        <div className="values--body-frame">
                            <PossibleItem
                                title="Качество во всём"
                                description="Мы не гонимся за количеством.
Каждая функция, каждое обновление проходит тщательное тестирование перед релизом."
                                icon={Icon1}
                            ></PossibleItem>
                            <PossibleItem
                                title="Сообщество прежде всего"
                                description="Игроки — сердце проекта. Мы слушаем обратную связь, учитываем пожелания
и строим CLUB вместе с вами."
                                icon={Icon2}
                            ></PossibleItem>
                            <PossibleItem
                                title="Честная игра"
                                description="Никаких pay-to-win механик. Донат даёт только косметические преимущества.
Успех зависит от навыков, а не от кошелька."
                                icon={Icon3}
                            ></PossibleItem>
                            <PossibleItem
                                title="Уникальность"
                                description="Мы не копируем других. Собственные механики, авторский контент и неповторимая атмосфера — наш фирменный знак."
                                icon={Icon4}
                            ></PossibleItem>
                        </div>
                    </div>
                </div>
            </section>
            <section className='part'>
                <div className="container">
                    <div className="part--body">
                        <HeadTitle
                            title='СТАНЬ ЧАСТЬЮ ИСТОРИИ'
                            description='Присоединяйся к тысячам игроков, которые уже выбрали CLUB своим вторым домом. Твоя история начинается здесь.'
                        />
                        <div className="part--body-action">
                            <ActientButton path='/auth/register'>
                                Зарегистрироваться
                            </ActientButton>
                            <ActientButton path='/forum'>
                                Перейти на форум
                            </ActientButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
