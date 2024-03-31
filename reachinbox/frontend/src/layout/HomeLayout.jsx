import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function HomeLayout({children}) {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='bg-black w-screen'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default HomeLayout
