import Logo from '@/assets/images/logo.svg';
import { Navigate, NavLink } from 'react-router-dom';
import Mir from '@/assets/images/pay/1.svg';
import Visa from '@/assets/images/pay/2.svg';
import Master from '@/assets/images/pay/3.svg';
import SBP from '@/assets/images/pay/4.svg';
import tg from '@/assets/images/social/Telegram.svg';
import Discord from '@/assets/images/social/Discord.svg';
import you from '@/assets/images/social/YouTube.svg';
import vk from '@/assets/images/social/Vk.svg';
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer--head">
        <div className="footer--head-main">
          <div className="wrapper">
            <img src={Logo} alt="" />
            <a className='base-text' href="mailto:help@rpclub.ru">help@rpclub.ru</a>
          </div>
          <p className='base-text'>CLUB RP is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.</p>
        </div>
        <div className="footer--head-soft">
          <div className="head--soft-navigation">
            <nav>
              <span className='medium-text'>Навигация</span>
              <ul>
                <NavLink className="base-text">Главная</NavLink>
                <NavLink className="base-text">О проекте</NavLink>
                <NavLink className="base-text">Блог</NavLink>
                <NavLink className="base-text">WIKI</NavLink>
              </ul>
            </nav>
            <nav>
              <span className='medium-text'>Игроку</span>
              <ul>
                <NavLink className="base-text">Форум</NavLink>
                <NavLink className="base-text">Магазин предметов</NavLink>
                <NavLink className="base-text">Пополнить счет</NavLink>
                <NavLink className="base-text">Авторизироваться</NavLink>
              </ul>
            </nav>
          </div>
          <div className="head--soft-social">
            <div className="social-pay">
              <div className="item">
                <img src={Mir} alt="" />
              </div>
              <div className="item">
                <img src={Visa} alt="" />
              </div>
              <div className="item">
                <img src={Master} alt="" />
              </div>
              <div className="item">
                <img src={SBP} alt="" />
              </div>
            </div>
            <div className="social-icon">
              <div className="item">
                <img src={vk} alt="" />
              </div>
              <div className="item">
                <img src={you} alt="" />
              </div>
              <div className="item">
                <img src={Discord} alt="" />
              </div>
              <div className="item">
                <img src={tg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--bot">
        <p className='base-text'>© 2025 CLUB RP.  Все права защищены.</p>
        <div className="footer--bot-links">
          <NavLink className="base-text">Правила оплаты</NavLink>
          <NavLink className="base-text">Пользовательское соглашение</NavLink>
          <NavLink className="base-text">Условия использования</NavLink>
        </div>
      </div>
    </footer>
  )
}
