import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Onebox from '../pages/Onebox'
import Login from '../pages/Login'
import Inbox from '../pages/Inbox'

function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<Onebox/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
    </Routes>
  )
}

export default AppRoute
