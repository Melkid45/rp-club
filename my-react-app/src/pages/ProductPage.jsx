import { Link, useLocation, useParams } from "react-router-dom";
import Price from '@/assets/images/shop/price.svg';
import DefaultLink from '../components/common/DefaultLink';
import Product from '@/assets/images/shop/product-back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ShopItem from '../components/special/ShopItem';
// Splide images
import Splide1 from '@/assets/images/shop/splide/1.png';
import Splide2 from '@/assets/images/shop/splide/2.png';
import Splide3 from '@/assets/images/shop/splide/3.png';
import Splide4 from '@/assets/images/shop/splide/4.png';
export default function ProductPage() {
    const { state } = useLocation();

    const { title, description, image, price, id, sale, type, rarity, rearityClass } = state || {};

    return (
        <>
            <section className="product">
                <img className="product--back" src={Product} alt="" />
                <div className="container">
                    <div className="product--body">
                        <div className="product--body-main">
                            <div className={`main--wrap ${rearityClass}`}>
                                <img src={image} alt="" />
                            </div>
                            <div className="main--information">
                                <div className="main--information-tags">
                                    <span className={`base-text rarity-tag ${rearityClass}`}>{rarity}</span>
                                    {sale && (
                                        <span className="sale--tag">-{sale}%</span>
                                    )}
                                </div>
                                <div className="main--information-category base-text">
                                    <Link>Аксессуары</Link>
                                    <p>/</p>
                                    <Link>Рюкзак</Link>
                                </div>
                                <div className="main--information-product">
                                    <h1 className="bold-text">{title}</h1>
                                    <p className="base-text">Эксклюзивный рюкзак вместимостью 20 кг в стиле Louis Vuitton. Идеально подходит для ночных прогулок по улицам Лос-Сантоса. Уникальный дизайн, вдохновлённый футуристической эстетикой городов будущего.</p>
                                </div>
                                <div className="main--information-buy">
                                    <div className="buy--wrap">
                                        <div className="buy--price">
                                            <span className="extra-text">{price}</span>
                                            <img src={Price} alt="" />
                                        </div>
                                        <p className="base-text">Стоимость премета:</p>
                                    </div>
                                    <DefaultLink link={`/purchase/${id}`} className="buy--button base-text">Купить в игре</DefaultLink>
                                </div>
                            </div>
                        </div>
                        <div className="product--body-related">
                            <h2 className="semi-text">Похожие товары</h2>
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
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
