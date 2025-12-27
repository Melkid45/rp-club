import Logo from '@/assets/images/logo.svg';
import { Navigate, NavLink } from 'react-router-dom';
import ActientButton from '../common/ActientButton';
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="/" className="header--logo">
            <img src={Logo} alt="" />
          </a>
          <nav className='header--menu'>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              О проекте
            </NavLink>
            <NavLink
              to="/battle-pass"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              Сезонный пропуск
            </NavLink>
            <NavLink
              to="/shop"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              магазин предметов
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.332031 0.373718L4.83203 4.37372L9.33203 0.373718" stroke="#8A8A9A" />
              </svg>
            </NavLink>
            <NavLink
              to="/forum"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              Форум
            </NavLink>
            <NavLink
              to="/wiki"
              end
              className={({ isActive }) =>
                isActive ? "medium-text current" : "medium-text"
              }
            >
              WIKI
            </NavLink>
          </nav>
          <div className="header--action">
            <div className="switch--language">
              <div className="switch--language-main">
                <span className='language medium-text'>Ru</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.332031 0.373718L4.83203 4.37372L9.33203 0.373718" stroke="white" />
                </svg>
              </div>
            </div>
            <div className="header--action-buttons">
              <ActientButton
                path="/payment"
              >
                Пополнить счет
              </ActientButton>
              <NavLink className="base-text" to="/auth">
                Войти
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
