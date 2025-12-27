import Price from '@/assets/images/shop/price.svg';
import Payment from '@/assets/images/pay/pay-back.png';
import HeadTitle from '../components/common/HeadTitle';
import InputItem from '../components/common/FormHelper.jsx/InputItem';
// Icons
import { UserRound, Mail, BanknoteIcon } from 'lucide-react'
import CheckboxItem from '../components/common/FormHelper.jsx/CheckboxItem';
import ModalOverlay from '../components/common/ModalOverlay';
import { useState } from 'react';

// Modal Method
import Method1 from '@/assets/images/pay/method/1.png';
import Method2 from '@/assets/images/pay/method/2.png';
import Method3 from '@/assets/images/pay/method/3.png';
import Method4 from '@/assets/images/pay/method/4.png';
import Method5 from '@/assets/images/pay/method/5.png';
import Method6 from '@/assets/images/pay/method/6.png';
import Method7 from '@/assets/images/pay/method/7.png';
import Method8 from '@/assets/images/pay/method/8.png';

const IconClub = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_937_3356)">
                <rect width="16" height="16" rx="3" fill="#5A5A6A" fill-opacity="0.5" />
                <path d="M6.005 9.5C5.777 9.5 5.567 9.443 5.375 9.329C5.189 9.215 5.039 9.065 4.925 8.879C4.811 8.687 4.754 8.477 4.754 8.249V4.271C4.754 4.043 4.811 3.836 4.925 3.65C5.039 3.458 5.189 3.305 5.375 3.191C5.567 3.077 5.777 3.02 6.005 3.02H11.216V4.217H6.257C6.161 4.217 6.083 4.244 6.023 4.298C5.969 4.352 5.942 4.43 5.942 4.532V7.988C5.942 8.084 5.969 8.162 6.023 8.222C6.083 8.276 6.161 8.303 6.257 8.303H11.216V9.5H6.005Z" fill="white" />
                <g filter="url(#filter0_d_937_3356)">
                    <rect x="4.25" y="11.25" width="7.5" height="0.75" fill="white" />
                </g>
            </g>
            <rect x="0.428571" y="0.428571" width="15.1429" height="15.1429" rx="2.42857" stroke="#4C4C59" stroke-width="0.857143" />
            <defs>
                <filter id="filter0_d_937_3356" x="-4.47209" y="2.52791" width="24.9442" height="18.1942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.36105" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.00784314 0 0 0 0 0.176471 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_937_3356" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_937_3356" result="shape" />
                </filter>
                <clipPath id="clip0_937_3356">
                    <rect width="16" height="16" rx="2.85714" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export default function PaymentPage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <section className='payment'>
                <img className='payment--back' src={Payment} alt="" />
                <div className="container">
                    <div className="payment--body">
                        <HeadTitle
                            title="Приобрести валюту"
                            soft="пополнение валюты"
                        />
                        <form className='payment--body-form' action="">
                            <div className="form--inputs">
                                <InputItem
                                    placeholder="Введите ваш ник из игры"
                                    type="text"
                                    name="login"
                                    icon={<UserRound color='#fff' />}
                                />
                                <InputItem
                                    placeholder="Введите почту для чека"
                                    type="mail"
                                    name="mail"
                                    icon={<Mail color='#fff' />}
                                />
                                <button type='button' className='input--item' onClick={() => setIsOpen(true)}>
                                    <div className="wrap">
                                        <BanknoteIcon color='#fff'/>
                                    </div>
                                    <span className='choose--method base-text'>Выберите способ оплаты</span>
                                </button>
                                <InputItem
                                    placeholder="Введите сумму"
                                    type="number"
                                    name="count"
                                    icon={<IconClub />}
                                />
                            </div>
                            <div className="form--summa">
                                <div className="form--summa-wrap">
                                    <div className="summa--wrap-count">
                                        <div className="base-count">
                                            <span className='extra-text'>1 499</span>
                                            <img src={Price} alt="" />
                                        </div>
                                        <p className='extra-text'>+</p>
                                        <div className="base-count">
                                            <span className='extra-text'>299</span>
                                            <img src={Price} alt="" />
                                        </div>
                                    </div>
                                    <p className='bonus base-text default-link current'>
                                        <span>Бонус</span>
                                    </p>
                                </div>
                                <div className="form--summa-price">
                                    <p className='base-text'>Обменный курс: 200 $ = 80 ₽ = 1</p>
                                    <img src={Price} alt="" />
                                </div>
                            </div>
                            <div className="form--checkbox">
                                <CheckboxItem name='public'>
                                    Продолжая, я соглашаюсь с условиями оферты
                                </CheckboxItem>
                                <CheckboxItem name='person-data'>
                                    Даю Согласие на обработку персональных данных, в порядке, на условиях и в объёме, указанном в Согласии, текст которого прочитан и Вам понятен.
                                </CheckboxItem>
                            </div>
                            <button type='submit' className='actient--button base-text puy--button'>
                                ПЕрейти к оплате
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <ModalOverlay title='Способы оплаты' isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className='modal--overlay-method'>
                    <div className="item">
                        <img src={Method1} alt="" />
                    </div>
                    <div className="item">
                        <img src={Method2} alt="" />
                    </div>
                    <div className="item">
                        <img src={Method3} alt="" />
                    </div>
                    <div className="item">
                        <img src={Method4} alt="" />
                    </div>
                    <div className="item">
                        <img src={Method5} alt="" />
                    </div>
                    <div className="item">
                        <img src={Method6} alt="" />
                        <span className='base-text'>BitCoin (BEP20)</span>
                    </div>
                    <div className="item">
                        <img src={Method7} alt="" />
                        <span className='base-text'>USDT Tether (TRC20)</span>
                    </div>
                    <div className="item">
                        <img src={Method8} alt="" />
                        <span className='base-text'>Ethereum (ERC20)</span>
                    </div>
                </div>
            </ModalOverlay>
        </>
    )
}
