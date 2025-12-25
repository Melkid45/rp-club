import HeadTitle from "../components/common/HeadTitle";
import Cat1 from '@/assets/images/wiki/cat/1.svg';
import Cat2 from '@/assets/images/wiki/cat/2.svg';
import Cat3 from '@/assets/images/wiki/cat/3.svg';
import Cat4 from '@/assets/images/wiki/cat/4.svg';
import Cat5 from '@/assets/images/wiki/cat/5.svg';
import Cat6 from '@/assets/images/wiki/cat/6.svg';
import WikiCat from "../components/special/WikiCat";
import WikiLink from "../components/special/WikiLink";
import GuideItem from "../components/special/GuideItem";
import WikiSt from '@/assets/images/wiki/wiki-back-st.png';
import WikiEd from '@/assets/images/wiki/wiki-back-ed.png';
import { Link } from "react-router-dom";
import SearchBlock from "../components/common/SearchBlock";
export default function WikiPage() {
    return (
        <section className='wiki'>
            <img className="wiki--back-st" src={WikiSt} alt="" />
            <img className="wiki--back-ed" src={WikiEd} alt="" />
            <div className="container">
                <div className="wiki--body">
                    <HeadTitle
                        title="Wiki"
                        description="Полная энциклопедия игрового мира CLUB.
Гайды, механики, фракции и всё, что нужно знать для игры."
                        soft="База знаний"
                    />
                    <div className="wiki--body-frame">
                        <div className="frame--navigation">
                            <div className="frame--navigation-head">
                                <div className="frame--navigation-head-categories">
                                    <WikiCat
                                        icon={Cat1}
                                        title="Недвижимость"
                                        count="120"
                                    />
                                    <WikiCat
                                        icon={Cat2}
                                        title="Работы"
                                        count="120"
                                    />
                                    <WikiCat
                                        icon={Cat3}
                                        title="Экономика"
                                        count="120"
                                    />
                                    <WikiCat
                                        icon={Cat4}
                                        title="Транспорт"
                                        count="120"
                                    />
                                    <WikiCat
                                        icon={Cat5}
                                        title="Оружие"
                                        count="120"
                                    />
                                    <WikiCat
                                        icon={Cat6}
                                        title="Roleplay"
                                        count="120"
                                    />
                                </div>
                                <SearchBlock placeholder="Поиск" where="wiki"/>
                            </div>
                            <div className="frame--navigation-links">
                                <h2 className="semi-text">Быстрые ссылки</h2>
                                <div className="links-list">
                                    <WikiLink
                                        title="Недвижимость"
                                    />
                                    <WikiLink
                                        title="Транспорт"
                                    />
                                    <WikiLink
                                        title="Команды чата"
                                    />
                                    <WikiLink
                                        title="Карта мира"
                                    />
                                    <WikiLink
                                        title="Мужская одежда"
                                    />
                                    <WikiLink
                                        title="Женская одежда"
                                    />
                                    <WikiLink
                                        title="Телефонные номера"
                                    />
                                    <WikiLink
                                        title="FAQ"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frame--guide">
                            <div className="frame--guide-head">
                                <h2 className="semi-text">Гайды для новичков</h2>
                                <Link className="base-text" to="/guide">
                                    ВСЕ Гайды
                                </Link>
                            </div>
                            <div className="guide--list">
                                <GuideItem
                                    user="Новичок"
                                    time="≈ 18 "
                                    title="Первые шаги в CLUB"
                                    description="Полный гайд по началу игры: регистрация, создание персонажа, первые деньги и базовые механики."
                                    check="️ 15.2K"
                                />
                                <GuideItem
                                    user="Новичок"
                                    time="≈ 18 "
                                    title="Первые шаги в CLUB"
                                    description="Лучшие способы заработка для новых игроков: работы, бизнесы и легальные схемы."
                                    check="️ 15.2K"
                                />
                                <GuideItem
                                    user="Средний"
                                    time="≈ 18 "
                                    title="Основы Roleplay"
                                    description="Как правильно отыгрывать персонажа: IC/OOC, powergaming,
metagaming и другие термины."
                                    check="️ 15.2K"
                                />
                                <GuideItem
                                    user="Средний"
                                    time="≈ 18 "
                                    title="Вступление во фракцию"
                                    description="Гайд по поступлению в государственные и криминальные
организации."
                                    check="️ 15.2K"
                                />
                                <GuideItem
                                    user="продвинутый"
                                    time="≈ 18 "
                                    title="Управление бизнесом"
                                    description="Покупка, настройка и оптимизация бизнеса для максимального
дохода."
                                    check="️ 15.2K"
                                />
                                <GuideItem
                                    user="продвинутый"
                                    time="≈ 18 "
                                    title="Криминальная деятельность"
                                    description="Ограбления, наркотики, оружие — всё о теневой стороне Los
Santos."
                                    check="️ 15.2K"
                                />
                            </div>
                        </div>
                        <div className="frame--factions">
                            <h2 className="semi-text">Фракции</h2>
                            <div className="factions--list">
                                <WikiLink
                                    title="LSPD"
                                    description="Полицейский департамент Лос-Сантоса. Борьба с преступностью."
                                />
                                <WikiLink
                                    title="Медик"
                                    description="Экстренная медицинская служба. Спасение жизней и мед. помощь."
                                />
                                <WikiLink
                                    title="Гос"
                                    description="Правительство штата. Законодательная власть и управление городом."
                                />
                                <WikiLink
                                    title="Мафия"
                                    description="Организованная преступность, бизнес и влияние."
                                />
                                <WikiLink
                                    title="Банда"
                                    description="Уличные банды. Территории, войны и криминальный бизнес."
                                />
                                <WikiLink
                                    title="Механик"
                                    description="Автомастерские города. Ремонт, тюнинг и продажа транспорта."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
