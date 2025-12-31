import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import MainLayout from './components/layout/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

      <Route path='/' element={<HomePage/>} />
      <Route path='/create' element={<CreatePage/>} />
      <Route path='/note/:id' element={<NoteDetailPage/>} />
      </Route>
    </Routes>
  )
}

export default App