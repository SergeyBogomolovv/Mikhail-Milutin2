import React from 'react'
import Header from './header/header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <div className='flex flex-col h-[100svh]'>
      <Header />

      <div className='flex-grow'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
