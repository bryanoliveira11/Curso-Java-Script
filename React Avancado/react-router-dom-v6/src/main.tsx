import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/about'
import { Menu } from './components/menu'
import { Posts } from './components/posts'
import { Redirect } from './components/redirect'
import { NotFound } from './components/notFound'
import { Post } from './components/post'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
        {/*<Route path='/posts/:id' element={<Posts/>}/>*/}
        <Route path='/posts' element={<Posts/>}>
          <Route path=':id' element={<Post/>}/>
        </Route>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
