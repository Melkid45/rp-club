import Home from '@/assets/images/home/home.png';
import Possible from '@/assets/images/home/possible/possible-back.png';
import ActientButton from '../components/common/ActientButton'
import HeadTitle from '../components/common/HeadTitle';
import PossibleItem from '../components/special/PossibleItem';
import Icon1 from '@/assets/images/home/possible/icons/icon1.svg';
import Icon2 from '@/assets/images/home/possible/icons/icon2.svg';
import Icon3 from '@/assets/images/home/possible/icons/icon3.svg';
import Icon4 from '@/assets/images/home/possible/icons/icon4.svg';
import PreviewVideo from '@/assets/images/home/possible/possible-video.png';
import Learn from '@/assets/images/home/learn/learn-back.png';
import LearnImage from '@/assets/images/home/learn/learn-img.png';
import News from '@/assets/images/home/news/news-back.png';
import NewsItem from '@/components/special/NewsItem';
import News1 from '@/assets/images/home/news/item/1.png';
import News2 from '@/assets/images/home/news/item/2.png';
import News3 from '@/assets/images/home/news/item/3.png';
import News4 from '@/assets/images/home/news/item/4.png';
import FaqItem from '../components/special/FaqItem';
export default function HomePage() {
    return (
        <>
            <section className="hero--block">
                <img className='hero--block-background' src={Home} alt="" />
                <div className="container">
                    <div className="hero--block-body">
                        <div className="hero--online base-text">
                            <div className="indicator"></div>
                            <p className='base-text'>игроков Онлайн:</p>
                            <span className='online base-text'>2 321</span>
                        </div>
                        <div className="hero--attr">
                            <div className="item">
                                <h3 className='bold-text'>10K+</h3>
                                <p className='base-text'>игроков всего</p>
                            </div>
                            <div className="item">
                                <h3 className='bold-text'>24/7</h3>
                                <p className='base-text'>Поддержка</p>
                            </div>
                            <div className="item">
                                <h3 className='bold-text'>99.9%</h3>
                                <p className='base-text'>Uptime</p>
                            </div>
                        </div>
                        <ActientButton
                            path="/play"
                        >
                            Начать играть
                        </ActientButton>
                    </div>
                </div>
            </section>
            <section className='possible'>
                <img className='possible--background' src={Possible} alt="" />
                <div className="container">
                    <div className="possible--body">
                        <HeadTitle
                            soft="Возможности"
                            title="Чем мы выделяемся"
                            description="Мы создали проект, где каждая деталь продумана для твоего максимального погружения в игровой мир."
                        >
                        </HeadTitle>
                        <div className="possible--body-wrap">
                            <div className="possible--wrap-items">
                                <PossibleItem
                                    title="Уникальный геймплей"
                                    description="Оригинальные игровые механики
и постоянные обновления делают каждую сессию неповторимой."
                                    icon={Icon1}
                                ></PossibleItem>
                                <PossibleItem
                                    title="Производительность"
                                    description="Оптимизированные серверы обеспечивают
стабильную работу без лагов.
Играй комфортно в любое время суток."
                                    icon={Icon2}
                                ></PossibleItem>
                                <PossibleItem
                                    title="Активное сообщество"
                                    description="Форум и внутриигровые события объединяют тысячи игроков.
Стань частью большой семьи CLUB."
                                    icon={Icon3}
                                ></PossibleItem>
                                <PossibleItem
                                    title="Кастомизация"
                                    description="Уникальные скины, транспорт и аксессуары.
Выделяйся среди других и создавай свой
неповторимый стиль."
                                    icon={Icon4}
                                ></PossibleItem>
                            </div>
                            <div className="possible--wrap-video">
                                <img src={PreviewVideo} alt="" />
                                <div className="video-helper">
                                    <button className="play">
                                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 9.93042L0 19.8608V-9.28342e-06L17 9.93042Z" fill="white" />
                                        </svg>
                                    </button>
                                    <p className='base-text'>ЗАПУСТЬ ВИДЕО</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='learn'>
                <img className='learn--back' src={Learn} alt="" />
                <div className="container">
                    <div className="learn--body">
                        <HeadTitle
                            soft="Обучение"
                            title="Как начать играть?"
                            description="Всего два простых шага и ты готов к игре!"
                        ></HeadTitle>
                        <div className="learn--body-wrap">
                            <img className='wrap--image' src={LearnImage} alt="" />
                            <div className="wrap--information">
                                <div className="item">
                                    <h3 className='medium-text'>1. Купи и установи Grand Theft Auto V</h3>
                                    <p className='base-text'>Если у вас еще нет лицензионной версии</p>
                                </div>
                                <div className="item">
                                    <h3 className='medium-text'>2. Зарегистрируйся в <span>CLUB</span></h3>
                                    <p className='base-text'>Создание аккаунта поможет зайти на сервер</p>
                                    <ActientButton>
                                        Зарегистрироваться
                                    </ActientButton>
                                </div>
                                <div className="item">
                                    <h3 className='medium-text'>3. Скачать RageMP</h3>
                                    <p className='base-text'>Самый быстрый способ начать играть</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='news'>
                <img className='news--back' src={News} alt="" />
                <div className="container">
                    <div className="news--body">
                        <HeadTitle
                            title="Последние обновления"
                            soft="Новости"
                            description="Следи за развитием проекта и будь в курсе всех важных событий."
                        >

                        </HeadTitle>
                        <div className="news--body-frame">
                            <NewsItem
                                event="Обновление"
                                title="Глобальное обновление v2.5"
                                description="Встречайте масштабное обновление
с новыми локациями, транспортом и игровыми
механиками. Более 50 новых фичей уже в игре."
                                image={News1}
                                date="15 июня 2026"
                                link="/1"
                            ></NewsItem>
                            <NewsItem
                                event="Событие"
                                title="Зимний турнир CLUB"
                                description="Регистрация на главный турнир сезона открыта! Призовой фонд, эксклюзивные награды и море азарта ждут участников."
                                date="10 января 2026"
                                link="/2"
                                image={News2}
                            ></NewsItem>
                            <NewsItem
                                event="Анонс"
                                title="Новая система кастомизации"
                                description="Представляем полностью переработанную
систему персонализации персонажей
с сотнями новых элементов."
                                date="5 января 2026"
                                link="/3"
                                image={News3}
                            ></NewsItem>
                            <NewsItem
                                event="Обновление"
                                title="Мы открылись!"
                                description="Представляем вашему вниманию наш проект, над которым мы работали с любовью."
                                date="5 января 2026"
                                link="/4"
                                image={News4}
                            ></NewsItem>
                        </div>
                    </div>
                </div>
            </section>
            <section className='faq'>
                <div className="container">
                    <div className="faq--body">
                        <HeadTitle
                        title="ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ"
                        soft="FAQ"
                        ></HeadTitle>
                        <div className="faq--body-frame">
                            <FaqItem
                            title="Что такое CLUB RP?"
                            description="Это масштабный проект на платформе GTA V, где тысячи игроков могут взаимодействовать друг с другом в режиме реального времени."
                            ></FaqItem>
                            <FaqItem
                            title="Что такое Role Play?"
                            description="Role Play — это стиль игры, в котором участники создают собственных персонажей, придумывают для них историю
и поведение, а затем играют строго в рамках выбранной роли."
                            ></FaqItem>
                            <FaqItem
                            title="Как начать играть на CLUB RP?"
                            description="Чтобы начать игру, потребуется установить лицензионную
GTA V Legacy, а затем скачать и запустить RAGE Launcher."
                            ></FaqItem>
                            <FaqItem
                            title="Что такое RAGE Launcher?"
                            description="RAGE Launcher — это официальный инструмент для подключения к серверам. Он обеспечивает безопасный вход в игру, автоматически исправляет ошибки и загружает все нужные файлы."
                            ></FaqItem>
                            <FaqItem
                            title="Чем можно заняться на CLUB?"
                            description="Игрокам доступны десятки разнообразных профессий, активное взаимодействие с другими пользователями, частые обновления контента и тематические сезонные события."
                            ></FaqItem>
                            <FaqItem
                            title="Где посмотреть правила?"
                            description="Все правила сервера, а также разделы с жалобами и дополнительной информацией находятся на официальном форуме проекта."
                            ></FaqItem>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
