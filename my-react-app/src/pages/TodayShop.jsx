import React from 'react'
import HeadTitle from '../components/common/HeadTitle'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

import '@splidejs/react-splide/css';
import ShopItem from '../components/special/ShopItem';
// Splide images
import Splide1 from '@/assets/images/shop/splide/1.png';
import Splide2 from '@/assets/images/shop/splide/2.png';
import Splide3 from '@/assets/images/shop/splide/3.png';
import Splide4 from '@/assets/images/shop/splide/4.png';
// Recommend images
import Rec1 from '@/assets/images/shop/rec/1.png';
import Rec2 from '@/assets/images/shop/rec/2.png';
import Rec3 from '@/assets/images/shop/rec/3.png';
import Rec4 from '@/assets/images/shop/rec/4.png';
import Rec5 from '@/assets/images/shop/rec/5.png';
// Clothes images (same as recommend for demo)
import Clot1 from '@/assets/images/shop/clothes/1.png';
import Clot2 from '@/assets/images/shop/clothes/2.png';
import Clot3 from '@/assets/images/shop/clothes/3.png';
import Clot4 from '@/assets/images/shop/clothes/4.png';
import Clot5 from '@/assets/images/shop/clothes/5.png';
import Clot6 from '@/assets/images/shop/clothes/6.png';
import Clot7 from '@/assets/images/shop/clothes/7.png';
import Banner from '@/assets/images/shop/clothes/banner-clothes.png';
//Cars images (same as splide for demo)
import Car1 from '@/assets/images/shop/cars/1.png';
import Car2 from '@/assets/images/shop/cars/2.png';
import Car3 from '@/assets/images/shop/cars/3.png';
import Car4 from '@/assets/images/shop/cars/4.png';
import Car5 from '@/assets/images/shop/cars/5.png';
import Car6 from '@/assets/images/shop/cars/6.png';
import Car7 from '@/assets/images/shop/cars/7.png';
import Car8 from '@/assets/images/shop/cars/8.png';

export default function TodayShop() {
    return (
        <section className='today'>
            <div className="container">
                <div className="today--body">
                    <HeadTitle
                        title="СЕГОДНЯ В МАГАЗИНЕ"
                        description="Эксклюзивные предметы, обновляемые каждый день.
Не упусти горячие предложения!"
                        soft="Магазин предметов"
                    />
                    <div className="today--body-frame">
                        <Splide aria-label="shop-splide"
                            options={{
                                perPage: 4,
                                gap: '20px',
                                pagination: false,
                                perMove: 1,
                                type: 'loop',
                            }}>
                            <SplideSlide>
                                <ShopItem
                                    id={1}
                                    title="Grotti 812"
                                    image={Splide1}
                                    rarity="Эпическое"
                                    price={2499}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <ShopItem
                                    id={2}
                                    title="Светло-синие джинсы"
                                    image={Splide2}
                                    rarity="Эпическое"
                                    price={2499}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <ShopItem
                                    id={3}
                                    title="Бриллиантовый рюкзак"
                                    image={Splide3}
                                    rarity="Легендарное"
                                    price={2499}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <ShopItem
                                    id={4}
                                    title="Белые кроссовки"
                                    image={Splide4}
                                    rarity="Эпическое"
                                    price={2499}
                                />
                            </SplideSlide>
                        </Splide>
                        <div className="today--frame-recomendation">
                            <h2 className='semi-text'>Рекомендуем</h2>
                            <div className="frame-recomendation-grid">
                                <ShopItem
                                    id={5}
                                    title='Жёлтый корсет с рукавами'
                                    image={Rec1}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={6}
                                    title='Hammer EV 4x4'
                                    image={Rec2}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={7}
                                    title='Крылья демона'
                                    image={Rec3}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={8}
                                    title='Оранжевый свитер Stone Land'
                                    image={Rec4}
                                    rarity='Уникальное'
                                    price={2499}
                                    sale={23}
                                />
                                <ShopItem
                                    id={9}
                                    title='Рюкзак LA коричневый'
                                    image={Rec5}
                                    rarity='Легендарное'
                                    price={2499}
                                    sale={23}
                                />
                            </div>
                        </div>
                        <div className="today--frame-clothes">
                            <h2 className='semi-text'>Одежда</h2>
                            <div className="frame--clothes-grid">
                                <ShopItem
                                    id={10}
                                    title='Синий топ с принтом рук'
                                    image={Clot1}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={11}
                                    title='Темно-синие брюки Loro Piano'
                                    image={Clot2}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={12}
                                    title='Часы Rolex Dayjust'
                                    image={Clot3}
                                    rarity='Легендарное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={13}
                                    title='Белая футболка Margiela'
                                    image={Clot4}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <Link className="grid--clothes-banner">
                                    <img src={Banner} alt="" />
                                    <p className='base-text'>Новая коллекция </p>
                                    <span className='bold-text'>Vespucci</span>
                                </Link>
                                <ShopItem
                                    id={14}
                                    title='Коричневая поло Vespucci'
                                    image={Clot5}
                                    rarity='Уникальное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={15}
                                    title='Синее поло Vespucci'
                                    image={Clot6}
                                    rarity='Уникальное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={16}
                                    title='Белое поло Vespucci'
                                    image={Clot7}
                                    rarity='Уникальное'
                                    price={2499}
                                />
                            </div>
                        </div>
                        <div className="today--frame-cars">
                            <h2 className='semi-text'>Транспорт</h2>
                            <div className="frame--cars-grid">
                                <ShopItem
                                    id={17}
                                    title='Italy GTO Stinger TT'
                                    image={Car1}
                                    rarity='Легендарное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={18}
                                    title='Phantasm Limo'
                                    image={Car2}
                                    rarity='Легендарное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={19}
                                    title='Hijak Khamelion'
                                    image={Car3}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={20}
                                    title='Benefactor G63'
                                    image={Car4}
                                    sale={43}
                                    rarity='Уникальное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={21}
                                    title='Ubermacht 3-Series E30'
                                    image={Car5}
                                    rarity='неОбычное'
                                    price={2499}
                                />
                                <ShopItem
                                    id={22}
                                    title='Rune 2107'
                                    image={Car6}
                                    rarity='Редкое'
                                    price={2499}
                                />

                                <ShopItem
                                    id={23}
                                    title='Pfister Mauer'
                                    image={Car7}
                                    rarity='Эпическое'
                                    price={2499}
                                />
                                <ShopItem
                                    id={24}
                                    title='Ubermacht M8 Gran Coupe'
                                    image={Car8}
                                    rarity='Легендарное'
                                    price={2499}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
