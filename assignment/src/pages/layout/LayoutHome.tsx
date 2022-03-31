import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


type Props = {}

const LayoutHome = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <main className='py-5'>
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>
    </div>

  )
}

export default LayoutHome