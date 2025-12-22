import HeadTitle from '../components/common/HeadTitle';
import NewsItem from '@/components/special/NewsItem';
import News1 from '@/assets/images/home/news/item/1.png';
import News2 from '@/assets/images/home/news/item/2.png';
import News3 from '@/assets/images/home/news/item/3.png';
import News4 from '@/assets/images/home/news/item/4.png';
import NewsSt from '@/assets/images/news/news-back-st.png';
import NewsEd from '@/assets/images/news/news-back-ed.png';
export default function NewsPage() {
    return (
        <section className='news news--page'>
            <img className='news--back-start' src={NewsSt} alt="" />
            <img className='news--back-end' src={NewsEd} alt="" />
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
                            id={1}
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
                            id={2}
                            event="Событие"
                            title="Зимний турнир CLUB"
                            description="Регистрация на главный турнир сезона открыта! Призовой фонд, эксклюзивные награды и море азарта ждут участников."
                            date="10 января 2026"
                            link="/2"
                            image={News2}
                        ></NewsItem>
                        <NewsItem
                            id={3}
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
                            id={4}
                            event="Обновление"
                            title="Мы открылись!"
                            description="Представляем вашему вниманию наш проект, над которым мы работали с любовью."
                            date="5 января 2026"
                            link="/4"
                            image={News4}
                        ></NewsItem>
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
                    <div className="news--body-pagination">
                        <div className="pagination-info">
                            <span className='medium-text'>Найдено 12 статей</span>
                            <p className='base-text'>Страница 1 из 1</p>
                        </div>
                        <div className="pagination-frame">
                            <button className='prev base-text'>Назад</button>
                            <span className="current-page">
                                1
                            </span>
                            <button className='next base-text'>Вперед</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
