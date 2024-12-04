import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className='app-container'>
      <div className='px-4 sm:px-10 lg:px-[6vw] '>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
