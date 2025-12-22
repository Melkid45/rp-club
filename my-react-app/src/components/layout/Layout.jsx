import { Outlet, Link, useLocation } from 'react-router-dom'
import Header from '../particles/Header'
import Footer from '../particles/Footer'

const Layout = () => {
    const location = useLocation()

    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout