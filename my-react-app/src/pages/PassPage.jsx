import React from 'react'
import Title from '@/assets/images/pass/title.svg';
import Back from '@/assets/images/pass/pass-back.png';
import Pass from '@/assets/images/pass/ch-back.png';
// Items

import Item1 from '@/assets/images/pass/items/1.png';
import Item2 from '@/assets/images/pass/items/2.png';
import Item3 from '@/assets/images/pass/items/3.png';
import Item4 from '@/assets/images/pass/items/4.png';
import HeadTitle from '../components/common/HeadTitle';
import VariablePassItem from '../components/special/VariablePassItem';

//Icons

import Icon1 from '@/assets/images/pass/variable/1.svg';
import Icon2 from '@/assets/images/pass/variable/2.svg';
import Icon3 from '@/assets/images/pass/variable/3.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';

//Clothes
import ClothesItem from '../components/special/ClothesItem';
import Clothes from '@/assets/images/pass/clothes-img.png';
import AwardsItem from '../components/special/AwardsItem';

// Awards
import Awards1 from '@/assets/images/pass/awards/1.png';
import Awards2 from '@/assets/images/pass/awards/2.png';
import Awards3 from '@/assets/images/pass/awards/3.png';

// Posters

import Poster1 from '@/assets/images/pass/posters/1.png';
import Poster2 from '@/assets/images/pass/posters/2.png';
import Poster3 from '@/assets/images/pass/posters/3.png';
export default function PassPage() {
    return (
        <>
            <section className='battlepass'>
                <img className='battlepass--back' src={Back} alt="" />
                <div className="container">
                    <div className="battlepass--body">
                        <div className="battlepass--body-head">
                            <div className="body--head-title">
                                <div className="title">
                                    <h1 className='extra-text'>
                                        <span className='medium-text'>ЛЕТНИЕ</span>
                                        НОЧИ
                                    </h1>
                                    <img src={Title} alt="" />
                                </div>
                                <p className='base-text'>
                                    Горячий сезон с эксклюзивными наградами, уникальными заданиями и летней атмосферой. 100 уровней прогресса ждут тебя!
                                </p>
                            </div>
                            <button className='base-text'>
                                <span>Купить Premium Pass</span>
                            </button>
                        </div>
                        <div className="battlepass--body-items">
                            <div className="item">
                                <img src={Item1} alt="" />
                                <div className="item--text">
                                    <h3 className='medium-text'>Новые машины</h3>
                                    <p className='base-text'>Встречайте масштабное обновление
                                        с новыми локациями, транспортом и игровыми
                                        механиками. Более 50 новых фичей уже в игре.</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={Item2} alt="" />
                                <div className="item--text">
                                    <h3 className='medium-text'>Летняя одежда</h3>
                                    <p className='base-text'>Регистрация на главный турнир сезона открыта! Призовой фонд, эксклюзивные награды и море азарта ждут участников.</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={Item3} alt="" />
                                <div className="item--text">
                                    <h3 className='medium-text'>Новая система кастомизации</h3>
                                    <p className='base-text'>Представляем полностью переработанную
                                        систему персонализации персонажей
                                        с сотнями новых элементов.</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={Item4} alt="" />
                                <div className="item--text">
                                    <h3 className='medium-text'>Новые танцы</h3>
                                    <p className='base-text'>Представляем вашему вниманию наш проект, над которым мы работали с любовью.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pass'>
                <img className='pass--back' src={Pass} alt="" />
                <div className="container">
                    <div className="pass--body">
                        <div className="pass--body-variable">
                            <HeadTitle
                                soft="Выбери свой вариант"
                                title="СЕЗОННЫЕ ПРОПУСКА"
                            />
                            <div className="variable--frame">
                                <VariablePassItem
                                    icon={Icon1}
                                    title="Базовый пропуск"
                                    description="Бесплатный доступ к 30 уровням наград из сезоного пропуска, интересные еженедельные задания, базовые скины и предметы, а также игровая валюта."
                                    price={0}
                                    date="/ бесплатно"
                                />
                                <VariablePassItem
                                    icon={Icon2}
                                    title="Расширенный пропуск"
                                    description="Доступ к 100 уровням наград из сезоного пропуска, интересные еженедельные задания, премиальные скины и предметы, а также игровая валюта."
                                    price={1499}
                                    date="/ сезон"
                                    status={true}
                                />
                                <VariablePassItem
                                    icon={Icon3}
                                    title="Хочу все и сразу"
                                    description="Доступ ко всем 150 уровням наград из сезоного пропуска, интересные еженедельные задания, все премиальные скины и предметы, а также игровая валюта."
                                    price={3499}
                                    date="/ сезон"
                                    status={true}
                                />
                            </div>
                        </div>
                        <div className="pass--body-clothes">
                            <Splide options={{
                                type: 'loop',
                                perMove: 1,
                                perPage: 1,
                                pagination: false
                            }}>
                                <SplideSlide>
                                    <ClothesItem
                                        image={Clothes}
                                        rarity="Уникальное"
                                        level={50}
                                        id={1}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <ClothesItem
                                        image={Clothes}
                                        rarity="Уникальное"
                                        level={25}
                                        id={2}
                                    />
                                </SplideSlide>
                            </Splide>
                            <HeadTitle
                                soft="пополнение гардероба"
                                title="летняя одежда"
                                description="Лос-Сантос охватила волна жары, и самое время обновить гардероб! Вы автоматически получите эксклюзивный летний комплект одежды сразу после покупки пропуска. Те, у кого нет пропуска, смогут получить базовую футболку поло бесплатно по достижении 50-го уровня начиная с 15 июля."
                            />
                        </div>
                        <div className="pass--body-awards">
                            <HeadTitle title='Награды' />
                            <Splide options={{
                                type: 'loop',
                                perPage: 5,
                                perMove: 1,
                                gap: '32px',
                                autoplay: true,
                                interval: 5000,
                                pagination: false
                            }}>
                                <SplideSlide>
                                    <AwardsItem
                                        title="Бита"
                                        id={1}
                                        rarity="неОбычное"
                                        level={15}
                                        image={Awards1}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <AwardsItem
                                        title="Бомба-липучка"
                                        id={2}
                                        rarity="Редкое"
                                        level={35}
                                        image={Awards2}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <AwardsItem
                                        title="Коктейль «Кровавая Мэри»"
                                        id={3}
                                        rarity="Эпическое"
                                        level={60}
                                        image={Awards3}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <AwardsItem
                                        title="Бита"
                                        id={4}
                                        rarity="неОбычное"
                                        level={15}
                                        image={Awards1}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <AwardsItem
                                        title="Бомба-липучка"
                                        id={5}
                                        rarity="Редкое"
                                        level={35}
                                        image={Awards2}
                                    />
                                </SplideSlide>
                            </Splide>
                        </div>
                        <div className="pass--body-clothes different">
                            <Splide options={{
                                type: 'loop',
                                perMove: 1,
                                perPage: 1,
                                pagination: false
                            }}>
                                <SplideSlide>
                                    <ClothesItem
                                        image={Clothes}
                                        rarity="Уникальное"
                                        level={50}
                                        id={1}
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <ClothesItem
                                        image={Clothes}
                                        rarity="Уникальное"
                                        level={25}
                                        id={2}
                                    />
                                </SplideSlide>
                            </Splide>
                            <HeadTitle
                                soft="Полезное и вкусное"
                                title="Новые предметы"
                                description="Лос-Сантос охватила волна жары, и самое время обновить гардероб! Вы автоматически получите эксклюзивный летний комплект одежды сразу после покупки пропуска.
Те, у кого нет пропуска, смогут получить базовую футболку поло бесплатно по достижении 50-го уровня начиная с 15 июля."
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='posters'>
                <div className="posters--item">
                    <img src={Poster1} alt="" />
                    <HeadTitle
                        title="новые награды каждый вечер!"
                        soft="повышай свой уровень"
                        description="Выполните 7 ежедневных заданий подряд и разблокируйте секретный бонус недели. Владельцы пропуска получают +50% к наградам за каждое выполненное задание."
                    />
                </div>
                <div className="posters--item">
                    <img src={Poster2} alt="" />
                    <HeadTitle
                        title="Новые испытания каждый день"
                        soft="выполняй уже сегодня"
                        description="Забудьте о скучной рутине! Динамическая система заданий подстраивается под ваш стиль игры: любите гонки - ловите заезды на время, предпочитаете бизнес — получайте торговые челленджи."
                    />
                </div>
                <div className="posters--item">
                    <img src={Poster3} alt="" />
                    <HeadTitle
                        title="НЕ УПУСТИ это ЛЕТО!"
                        description='Сезон "Летние Ночи" продлится ограниченное время. Получи все эксклюзивные'
                    />
                    <div className="posters--item-buttons">
                        <button className='base-text'>
                            <span>Купить Premium Pass</span>
                        </button>
                        <button className='base-text'>
                            <span>Начать играть</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
