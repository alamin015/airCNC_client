import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet></Outlet>
        <Footer />
    </>
  )
}

export default MainLayout