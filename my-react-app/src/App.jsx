import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Layout from '@/components/layout/Layout';
import '@/styles/global.scss';
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import GuidePage from "./pages/GuidePage";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/guide" element={<GuidePage />}></Route>
          <Route path="/article/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
