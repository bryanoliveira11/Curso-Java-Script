import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/about'
import { Menu } from './components/menu'
import { Post } from './components/post'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/posts' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
