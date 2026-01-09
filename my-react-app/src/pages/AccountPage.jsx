import { useEffect, useRef, useState } from 'react';

import { Banknote, BriefcaseBusiness, Clock3, CreditCard, KeySquare, Landmark, Mail, Mars, PiggyBank } from 'lucide-react';
import Person from '@/assets/images/user/person.png';
import MainCar from '@/assets/images/user/car.png';
import MainHouse from '@/assets/images/user/house.png';
import FinanceItem from '../components/special/FinanceItem';
import CarItem from '../components/special/CarItem';

// Cars
import Car1 from '@/assets/images/user/cars/1.png';
import Car2 from '@/assets/images/user/cars/2.png';
import Car3 from '@/assets/images/user/cars/3.png';

// Houses
import Room from '@/assets/images/user/room.png';
import OperationsItem from '../components/special/OperationsItem';
import SettingsItem from '../components/special/SettingsItem';

// Background
import UserTop from '@/assets/images/user/user-top.png';
import UserBot from '@/assets/images/user/user-bottom.png';
import ModalOverlay from '../components/common/ModalOverlay';
import InputItem from '../components/common/FormHelper.jsx/InputItem';
import CheckboxItem from '../components/common/FormHelper.jsx/CheckboxItem';
export default function AccountPage() {
    const [isOpenPass, setIsOpenPass] = useState(false);
    const [isOpenMail, setIsOpenMail] = useState(false);
    const [isOpenNot, setisOpenNot] = useState(false);
    const mainItems = useRef();
    useEffect(() => {
        console.log(mainItems)
    }, [])
    return (

        <>
            <section className='user'>
                <img className='user--back-top' src={UserTop} alt="" />
                <img className='user--back-bot' src={UserBot} alt="" />
                <div className="container">
                    <div className="user--body">
                        <h2 className='extra-text'>
                            личный кабинет игрока
                        </h2>
                        <div className="user--body-frame">
                            <div className="user--frame-head">
                                <div className="user--head-dossier">
                                    <img src={Person} alt="" />
                                    <div className="user--dossier-status">
                                        <div className="vip">
                                            <div className="wrap base-text">
                                                VIP
                                            </div>
                                            <div className="info">
                                                <span className='base-text'>VIP-статус до:</span>
                                                <p className='bold-text'>25.01.26</p>
                                            </div>
                                        </div>
                                        <div className="level base-text">
                                            <span>Ур. 47</span>
                                        </div>
                                    </div>
                                    <div className="user--dossier-info">
                                        <a className='change--person medium-text' href="">
                                            изменить персонажа
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.53125 0.530334L13.5312 13.5303M13.5312 13.5303V0.530334M13.5312 13.5303H0.53125" stroke="#8A8F9A" stroke-width="1.5" />
                                            </svg>
                                        </a>
                                        <div className="info--person">
                                            <h3 className='medium-text'>Jevy_Laveiro</h3>
                                            <div className="experience">
                                                <svg width="29" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.7314 30.5361H21.3477C22.1323 30.5362 22.8548 30.7399 23.5156 31.1465C24.1559 31.5532 24.673 32.0883 25.0654 32.752C25.4578 33.4369 25.6543 34.1866 25.6543 35H24.7959L21.5645 34.9824H7.63574L3.3457 35C3.3457 34.1866 3.54218 33.4369 3.93457 32.752C4.32697 32.0884 4.85381 31.5532 5.51465 31.1465C6.15485 30.7398 6.8676 30.5362 7.65234 30.5361H12.2695V27.1885H16.7314V30.5361ZM22.7168 1.62402L21.9053 3.45117L13.7412 21.8281H23.1191C23.2534 21.8281 23.375 21.7886 23.4824 21.708C23.5898 21.6006 23.6426 21.479 23.6426 21.3447V10.4502H21.1924L23.5596 5.9873H23.6426V5.98633H29V21.5869C29 22.6077 28.7445 23.5476 28.2344 24.4072C27.7242 25.2399 27.0398 25.9115 26.1807 26.4219C25.3483 26.9323 24.4217 27.1875 23.4014 27.1875H5.59863C4.57826 27.1875 3.63856 26.9323 2.7793 26.4219C1.94691 25.9115 1.2758 25.24 0.765625 24.4072C0.255462 23.5476 1.15158e-05 22.6077 0 21.5869V5.98633H5.4375V5.9873H13.9424L11.7109 10.4502H5.40234L5.31641 21.3447C5.31641 21.479 5.35694 21.6006 5.4375 21.708C5.54482 21.7885 5.66568 21.8281 5.7998 21.8281H9.36426L18.25 1.82812L19.0615 0L22.7168 1.62402Z" fill="url(#paint0_linear_237_2121)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_237_2121" x1="14.5" y1="35" x2="14.5" y2="13.9912" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#C9022D" />
                                                            <stop offset="1" stop-color="#630116" stop-opacity="0.3" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <div className="experience--info">
                                                    <span className='base-text'>до след. уровня:</span>
                                                    <p className='bold-text'>2 233 EXP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="attribute--person">
                                            <div className="item">
                                                <div className="icon">
                                                    <Clock3 color='#fff' />
                                                </div>
                                                <div className="item--info">
                                                    <span className='medium-text'>123</span>
                                                    <p className='base-text'>Часов в игре</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon">
                                                    <BriefcaseBusiness color='#fff' />
                                                </div>
                                                <div className="item--info">
                                                    <span className='medium-text'>Нет данных</span>
                                                    <p className='base-text'>Работа</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon">
                                                    <Mars color='#fff' />
                                                </div>
                                                <div className="item--info">
                                                    <span className='medium-text'>Мужчина</span>
                                                    <p className='base-text'>Пол</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user--head-soft">
                                    <div className="item">
                                        <img src={MainHouse} alt="" />
                                        <h3 className='semi-text'>Основной дом</h3>
                                        <p className='base-text'>Апартаменты Eclipse Tower</p>
                                    </div>
                                    <div className="item">
                                        <img src={MainCar} alt="" />
                                        <h3 className='semi-text'>Основная машина</h3>
                                        <p className='base-text'>Grotti 812</p>
                                    </div>
                                    <div className="user--soft-finance">
                                        <h3 className='semi-text'>Финансы персонажа</h3>
                                        <div className="user--finance-frame">
                                            <FinanceItem
                                                icon={<Banknote color='#fff' />}
                                                title='$841,342'
                                                description='Наличные'
                                            />
                                            <FinanceItem
                                                icon={<Landmark color='#fff' />}
                                                title='$350,000'
                                                description='Депозит'
                                            />
                                            <FinanceItem
                                                icon={<CreditCard color='#fff' />}
                                                title='$2,841,342'
                                                description='Банковский счёт'
                                            />
                                            <FinanceItem
                                                icon={<PiggyBank color='#fff' />}
                                                title='$32,841,342'
                                                description='Всего заработано'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user--frame-main">
                                <div ref={mainItems} className="main--item" data-lenis-prevent="wheel">
                                    <h3 className='semi-text'>Транспорт</h3>
                                    <div className="main--item-cars">
                                        <CarItem
                                            image={Car1}
                                            name='Benefactor GLS'
                                            type='Джип'
                                            rarity='Эпическое'
                                        />
                                        <CarItem
                                            image={Car2}
                                            name='Grotti 812'
                                            type='Спорткар'
                                            rarity='Эпическое'
                                        />
                                        <CarItem
                                            image={Car3}
                                            name='Ubermacht 3-Series E30'
                                            type='Седан'
                                            rarity='неОбычное'
                                        />
                                    </div>
                                </div>
                                <div ref={mainItems} className="main--item">
                                    <h3 className='semi-text'>Недвижимость и бизнес</h3>
                                    <div className="main--item-cars houses">
                                        <CarItem
                                            image={Room}
                                            name='Eclipse Tower'
                                            type='Апартаменты'
                                        />
                                    </div>
                                </div>
                                <div ref={mainItems} className="main--item" data-lenis-prevent="wheel">
                                    <h3 className='semi-text'>Последние операции</h3>
                                    <div className="main--item-cars">
                                        <OperationsItem
                                            name='Покупка в магазине'
                                            date='Сегодня, 12:45'
                                            summa='-$841,342'
                                            type='spend'
                                        />
                                        <OperationsItem
                                            name='Перевод от Dexter_Morgan'
                                            date='Сегодня, 12:45'
                                            summa='+$841,342'
                                            type='recieved'
                                        />
                                        <OperationsItem
                                            name='Ремонт транспорта'
                                            date='Сегодня, 12:45'
                                            summa='-$8,342'
                                            type='spend'
                                        />
                                        <OperationsItem
                                            name='Покупка в магазине'
                                            date='Сегодня, 12:45'
                                            summa='-$841,342'
                                            type='spend'
                                        />
                                        <OperationsItem
                                            name='Перевод от Dexter_Morgan'
                                            date='Сегодня, 12:45'
                                            summa='+$841,342'
                                            type='recieved'
                                        />
                                        <OperationsItem
                                            name='Ремонт транспорта'
                                            date='Сегодня, 12:45'
                                            summa='-$8,342'
                                            type='spend'
                                        />
                                    </div>
                                </div>
                                <div ref={mainItems} className="main--item">
                                    <h3 className='semi-text'>Настройки</h3>
                                    <div className="main--item-cars">
                                        <SettingsItem
                                            name='Пароль'
                                            message='Пароль никогда не менялся'
                                            event={() => setIsOpenPass(true)}
                                        />
                                        <SettingsItem
                                            name='Email'
                                            message='v***********3@mail.ru'
                                            event={() => setIsOpenMail(true)}
                                        />
                                        <SettingsItem
                                            name='Telegram'
                                            message='Не привязано'
                                        />
                                        <SettingsItem
                                            name='Уведомления'
                                            message='Включено 2 уведомления'
                                            event={() => setisOpenNot(true)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalOverlay title='пароль' isOpen={isOpenPass} onClose={() => setIsOpenPass(false)}>
                <form className='change--password' action="">
                    <InputItem
                        placeholder='Введите старый пароль'
                        name='oldPassword'
                        icon={<KeySquare color='#5A5A6A' />}
                        type='password'
                    />
                    <InputItem
                        placeholder='Введите старый пароль'
                        name='newPassword'
                        icon={<KeySquare color='#5A5A6A' />}
                        type='password'
                    />
                    <InputItem
                        placeholder='Введите старый пароль'
                        name='repeatPassword'
                        icon={<KeySquare color='#5A5A6A' />}
                        type='password'
                    />
                    <button className='actient--button base-text'>
                        Применить настройки
                    </button>
                </form>
            </ModalOverlay>
            <ModalOverlay title='Email' isOpen={isOpenMail} onClose={() => setIsOpenMail(false)}>
                <form className='change--password' action="">
                    <InputItem
                        placeholder='Введите новую почту'
                        name='email'
                        icon={<Mail color='#5A5A6A' />}
                        type='mail'
                    />
                    <InputItem
                        placeholder='Введите старый пароль'
                        name='password'
                        icon={<KeySquare color='#5A5A6A' />}
                        type='password'
                    />
                    <button className='actient--button base-text'>
                        Применить настройки
                    </button>
                </form>
            </ModalOverlay>
            <ModalOverlay title='Уведомления' isOpen={isOpenNot} onClose={() => setisOpenNot(false)}>
                <form className='change--password not-form' action="">
                    <p className='base-text not--message'>Выберите уведомление, которые вы хотите получать</p>
                    <CheckboxItem>
                        подтверждение входа
                    </CheckboxItem>
                    <CheckboxItem>
                        вход в аккаунт
                    </CheckboxItem>
                    <button className='actient--button base-text'>
                        Применить настройки
                    </button>
                </form>
            </ModalOverlay>
        </>
    )
}
