import DefaultLink from '../components/common/DefaultLink'
import HeadTitle from '../components/common/HeadTitle'
import SearchBlock from '../components/common/SearchBlock'
import ShopItem from '../components/special/ShopItem'
import Item1 from '@/assets/images/shop/base/1.png';
import Item2 from '@/assets/images/shop/base/2.png';
import Item3 from '@/assets/images/shop/base/3.png';
export default function ShopPage() {
    return (
        <section className='shop'>
            <div className="container">
                <div className="shop--body">
                    <HeadTitle
                        title="Мужская одежда"
                        description="Полная энциклопедия игрового мира CLUB.
Гайды, механики, фракции и всё, что нужно знать для игры."
                        soft="Стиль - это все"
                    />
                    <div className="shop--body-frame">
                        <div className="shop--frame-head">
                            <div className="categories">
                                <DefaultLink link="/shop" className="current">Все</DefaultLink>
                                <DefaultLink link="/shop" >Вверх</DefaultLink>
                                <DefaultLink link="/shop" >низ</DefaultLink>
                                <DefaultLink link="/shop" >майки</DefaultLink>
                                <DefaultLink link="/shop" >обувь</DefaultLink>
                                <DefaultLink link="/shop" >часы</DefaultLink>
                                <DefaultLink link="/shop" >маски</DefaultLink>
                                <DefaultLink link="/shop" >аксессуары</DefaultLink>
                                <DefaultLink link="/shop" >головные уборы</DefaultLink>
                                <DefaultLink link="/shop" >рюкзаки</DefaultLink>
                                <DefaultLink link="/shop" >очки</DefaultLink>
                                <DefaultLink link="/shop" >Перчатки</DefaultLink>
                            </div>
                            <SearchBlock placeholder="Поиск по магазину..." where="shop" />
                        </div>
                        <div className="shop--frame-items">
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                            <ShopItem
                                id={1}
                                title='Коричневая поло Vespucci'
                                image={Item1}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={2}
                                title='Синее поло Vespucci'
                                image={Item2}
                                rarity='Уникальное'
                                price={2499}
                            />
                            <ShopItem
                                id={3}
                                title='Светлая куртка с капюшоном'
                                image={Item3}
                                rarity='Уникальное'
                                type="Эксклюзив"
                            />
                        </div>
                        <div className="shop--frame-pagination">
                            <div className="pagination-info">
                                <span className='medium-text'>Найдено 1 183 одежды</span>
                                <p className='base-text'>Страница 1 из 13</p>
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
            </div>
        </section>
    )
}
