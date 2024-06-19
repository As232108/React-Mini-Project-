import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../ForRouterDom/Home'
import About from '../ForRouterDom/About'
import Contact from '../ForRouterDom/Contact'
import { Link } from 'react-router-dom'

const ReactRouter = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul style={{listStyle:'none', display:'flex', gap:'17px'}}>
            <li>
                <Link to='/Home'>Home </Link>
                </li>
            <li>
                <Link to='/About'>About</Link>
                </li>
            <li>
                <Link to='/Contact'>Contact</Link>
                </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Conatct' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter