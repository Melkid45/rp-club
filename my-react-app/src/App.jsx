import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import HomePage from "./pages/HomePage";
import Layout from '@/components/layout/Layout';
import '@/styles/global.scss';
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import GuidePage from "./pages/GuidePage";
import WikiPage from "./pages/WikiPage";
import GuidePageItem from "./pages/GuidePageItem";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import TodayShop from "./pages/TodayShop";
import PaymentPage from "./pages/PaymentPage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import ForumPage from "./pages/ForumPage";
import PassPage from "./pages/PassPage";
import AccountPage from './pages/AccountPage';

// Компонент для сброса скролла - используем хук useLenis
function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Получаем экземпляр Lenis через хук

  useEffect(() => {
    // Основной сброс скролла
    window.scrollTo(0, 0);
    
    // Если есть экземпляр Lenis, используем его
    if (lenis) {
      lenis.stop && lenis.stop();
      lenis.scrollTo(0, { immediate: true });
      lenis.start && lenis.start();
      
      // Также сбрасываем внутреннее состояние
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: true });
      }, 50);
    }
    
    // Сброс GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      // Ждем немного перед обновлением
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    
    // Дополнительные гарантии
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
  }, [pathname, lenis]); // Добавляем lenis в зависимости

  return null;
}

function App() {
  // Настройки Lenis
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    // Важная настройка для сброса
    autoRaf: true,
    syncTouch: true,
  };

  return (
    <>
      <ReactLenis root options={lenisOptions}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/wiki" element={<WikiPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/today" element={<TodayShop />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/battle-pass" element={<PassPage />} />
              <Route path="/auth/login" element={<LogInPage />} />
              <Route path="/shop/:id" element={<ProductPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/guide/:id" element={<GuidePageItem />} />
            </Route>
          </Routes>
        </Router>
      </ReactLenis>
    </>
  );
}

export default App;