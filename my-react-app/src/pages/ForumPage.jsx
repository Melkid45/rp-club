import React from 'react'
import HeadTitle from '../components/common/HeadTitle'
import SearchBlock from '../components/common/SearchBlock'
import { CircleUserRound, ClockArrowUpIcon, MessageSquareMore, Send, User, UserRound } from 'lucide-react'
import ThemeItem from '../components/special/ThemeItem'
import UserItem from '../components/special/UserItem'
import { Link } from 'react-router-dom'
import SoftVector from '@/assets/images/forum/soft-vector.png';
import TopBackground from '@/assets/images/forum/top-back.png';
import BotBackground from '@/assets/images/forum/bot-back.png';
export default function ForumPage() {
    return (
        <section className='forum'>
            <img className='forum--top-back' src={TopBackground} alt="" />
            <img className='forum--bot-back' src={BotBackground} alt="" />
            <div className="container">
                <div className="forum--body">
                    <HeadTitle
                    hasBack={true}
                        title="ФОРУМ"
                        soft="СООБЩЕСТВО"
                        description="Общайтесь, делитесь опытом и будьте в курсе всех новостей проекта"
                    />
                    <div className="forum--body-frame">
                        <div className="forum--frame-head">
                            <div className="frame--head-all">
                                <div className="item">
                                    <div className="icon">
                                        <MessageSquareMore color='#fff' />
                                    </div>
                                    <div className="item--wrap">
                                        <span className='medium-text'>12,847</span>
                                        <p className='base-text'>Тем</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <Send color='#fff' />
                                    </div>
                                    <div className="item--wrap">
                                        <span className='medium-text'>156,392</span>
                                        <p className='base-text'>Сообщений</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <CircleUserRound color='#fff' />
                                    </div>
                                    <div className="item--wrap">
                                        <span className='medium-text'>847</span>
                                        <p className='base-text'>Онлайн</p>
                                    </div>
                                </div>
                            </div>
                            <SearchBlock
                                placeholder="Поиск по форуму..."
                                where="forum"
                            />
                        </div>
                        <div className="forum--frame-block">
                            <div className="frame--block-navigate">
                                <div className="block--navigate-item">
                                    <div className="block--navigate-head">
                                        <h3 className='semi-text'>ОФИЦИАЛЬНОЕ</h3>
                                        <p className='base-text'>Новости, правила и важные объявления</p>
                                    </div>
                                    <div className="block-navigate-items">
                                        <ThemeItem
                                            id={1}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={2}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={3}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="block--navigate-item">
                                    <div className="block--navigate-head">
                                        <h3 className='semi-text'>ОФИЦИАЛЬНОЕ</h3>
                                        <p className='base-text'>Новости, правила и важные объявления</p>
                                    </div>
                                    <div className="block-navigate-items">
                                        <ThemeItem
                                            id={4}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={5}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={6}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="block--navigate-item">
                                    <div className="block--navigate-head">
                                        <h3 className='semi-text'>ОФИЦИАЛЬНОЕ</h3>
                                        <p className='base-text'>Новости, правила и важные объявления</p>
                                    </div>
                                    <div className="block-navigate-items">
                                        <ThemeItem
                                            id={7}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={8}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={9}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="block--navigate-item">
                                    <div className="block--navigate-head">
                                        <h3 className='semi-text'>ОФИЦИАЛЬНОЕ</h3>
                                        <p className='base-text'>Новости, правила и важные объявления</p>
                                    </div>
                                    <div className="block-navigate-items">
                                        <ThemeItem
                                            id={10}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={11}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                        <ThemeItem
                                            id={12}
                                            title="Новости и объявления"
                                            icon={<ClockArrowUpIcon color='#fff' />}
                                            description="Официальные новости проекта и важные объявления"
                                            count={123}
                                            answer={50}
                                            user={
                                                {
                                                    avatar: <UserRound color='#fff' />,
                                                    title: 'Обновление v2.5.3 — З',
                                                    role: 'Admin',
                                                    date: ' • 2 часа назад'
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="forum--frame-soft">
                                <div className="frame--soft-action">
                                    <img className='vector' src={SoftVector} alt="" />
                                    <h3 className='semi-text'>ДЕЙСТВИЯ</h3>
                                    <button className='default-link'>
                                        <span>+ Создать тему</span>
                                    </button>
                                    <button className='default-link'>
                                        <span>Мои темы</span>
                                    </button>
                                </div>
                                <div className="frame--soft-online">
                                    <img className='vector' src={SoftVector} alt="" />
                                    <div className="head">
                                        <h3 className='semi-text'>Онлайн</h3>
                                        <div className="wrap">
                                            <div className="circle"></div>
                                            <span className='base-text'>2321</span>
                                        </div>
                                    </div>
                                    <div className="online--users">
                                        <UserItem
                                            user={
                                                {
                                                    id: 1,
                                                    avatar: <UserRound color='#fff' />,
                                                    name: 'Admin',
                                                    role: 'Admin',
                                                }
                                            }
                                        />
                                        <UserItem
                                            user={
                                                {
                                                    id: 1,
                                                    avatar: <UserRound color='#fff' />,
                                                    name: 'Moderator',
                                                    role: 'Moderator',
                                                }
                                            }
                                        />
                                        <UserItem
                                            user={
                                                {
                                                    id: 1,
                                                    avatar: <UserRound color='#fff' />,
                                                    name: 'Apollo_Pollo',
                                                    role: 'VIP',
                                                }
                                            }
                                        />
                                        <UserItem
                                            user={
                                                {
                                                    id: 1,
                                                    avatar: <UserRound color='#fff' />,
                                                    name: 'Vlad_Buffalo',
                                                }
                                            }
                                        />
                                        <p className="base-text">+2317 человек</p>
                                    </div>
                                </div>
                                <div className="forum--soft-theme">
                                    <img className='vector' src={SoftVector} alt="" />
                                    <h3 className='semi-text'>Последние темы</h3>
                                    <div className="themes">
                                        <Link className="item">
                                            <h4 className='base-text'>Обновление v2.5.3 — полный список изменений</h4>
                                            <div className="item--soft">
                                                <p className='base-text'>Комментариев: 52</p>
                                                <p className='base-text'>1.2k</p>
                                            </div>
                                        </Link>
                                        <Link className="item">
                                            <h4 className='base-text'>Набор в семью Морелло — требования</h4>
                                            <div className="item--soft">
                                                <p className='base-text'>Комментариев: 52</p>
                                                <p className='base-text'>1.2k</p>
                                            </div>
                                        </Link>
                                        <Link className="item">
                                            <h4 className='base-text'>Гайд: как заработать первый миллион</h4>
                                            <div className="item--soft">
                                                <p className='base-text'>Комментариев: 52</p>
                                                <p className='base-text'>1.2k</p>
                                            </div>
                                        </Link>
                                        <Link className="item">
                                            <h4 className='base-text'>Зимний турнир 2026 — призы и правила</h4>
                                            <div className="item--soft">
                                                <p className='base-text'>Комментариев: 52</p>
                                                <p className='base-text'>1.2k</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="forum--soft-top">
                                    <img className='vector' src={SoftVector} alt="" />
                                    <h3 className='semi-text'>Топ участников</h3>
                                    <div className="top--users">
                                        <div className="item">
                                            <span className='bold-text'>1</span>
                                            <UserItem
                                                user={
                                                    {
                                                        id: 1,
                                                        avatar: <UserRound color='#fff' />,
                                                        name: 'Admin',
                                                    }
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <span className='bold-text'>2</span>
                                            <UserItem
                                                user={
                                                    {
                                                        id: 2,
                                                        avatar: <UserRound color='#fff' />,
                                                        name: 'Moderator',
                                                    }
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <span className='bold-text'>3</span>
                                            <UserItem
                                                user={
                                                    {
                                                        id: 3,
                                                        avatar: <UserRound color='#fff' />,
                                                        name: 'Apollo_Pollo',
                                                    }
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <span className='bold-text'>4</span>
                                            <UserItem
                                                user={
                                                    {
                                                        id: 4,
                                                        avatar: <UserRound color='#fff' />,
                                                        name: 'Vlad_Buffalo',
                                                    }
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <span className='bold-text'>5</span>
                                            <UserItem
                                                user={
                                                    {
                                                        id: 5,
                                                        avatar: <UserRound color='#fff' />,
                                                        name: 'Ilya_Buffalo',
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
