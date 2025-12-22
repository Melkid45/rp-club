import React from 'react'
import HeadTitle from '../components/common/HeadTitle'
import GuideItem from '../components/special/GuideItem'
import GuideSt from '@/assets/images/guide/guide-back-st.png';
import GuideEd from '@/assets/images/guide/guide-back-ed.png';
export default function GuidePage() {
    return (
        <section className='guide'>
            <img className='guide--back-st' src={GuideSt} alt="" />
            <img className='guide--back-ed' src={GuideEd} alt="" />
            <div className="container">
                <div className="guide--body">
                    <HeadTitle
                        title="Гайды"
                        description="Полная энциклопедия игрового мира CLUB.
Гайды, механики, фракции и всё, что нужно знать для игры."
                        soft="База знаний"
                    ></HeadTitle>
                    <div className="guide--body-frame">
                        <GuideItem
                            title="Первые шаги в CLUB"
                            description="Полный гайд по началу игры: регистрация, создание персонажа, первые деньги и базовые механики."
                            user="Новичок"
                            time="≈ 12"
                            check="️15.2K"
                        />
                        <GuideItem
                            title="Первые шаги в CLUB"
                            description="Полный гайд по началу игры: регистрация, создание персонажа, первые деньги и базовые механики."
                            user="Новичок"
                            time="≈ 12"
                            check="️15.2K"
                        />

                        <GuideItem
                            title="Вступление во фракцию"
                            description="Гайд по поступлению в государственные и криминальные организации."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Управление бизнесом"
                            description="Покупка, настройка и оптимизация бизнеса для максимального дохода."
                            user="продвинутый"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Основы Roleplay"
                            description="Как правильно отыгрывать персонажа: IC/OOC, powergaming, metagaming и другие термины."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Вступление во фракцию"
                            description="Гайд по поступлению в государственные и криминальные организации."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Первые шаги в CLUB"
                            description="Полный гайд по началу игры: регистрация, создание персонажа, первые деньги и базовые механики."
                            user="Новичок"
                            time="≈ 12"
                            check="️15.2K"
                        />
                        <GuideItem
                            title="Первые шаги в CLUB"
                            description="Полный гайд по началу игры: регистрация, создание персонажа, первые деньги и базовые механики."
                            user="Новичок"
                            time="≈ 12"
                            check="️15.2K"
                        />

                        <GuideItem
                            title="Вступление во фракцию"
                            description="Гайд по поступлению в государственные и криминальные организации."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Управление бизнесом"
                            description="Покупка, настройка и оптимизация бизнеса для максимального дохода."
                            user="продвинутый"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Основы Roleplay"
                            description="Как правильно отыгрывать персонажа: IC/OOC, powergaming, metagaming и другие термины."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                        <GuideItem
                            title="Вступление во фракцию"
                            description="Гайд по поступлению в государственные и криминальные организации."
                            user="Средний"
                            time="≈ 12 мин чтения"
                            check="15.2K"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
