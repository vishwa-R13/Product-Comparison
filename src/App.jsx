import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './component/functional/Home'
import Product from '../src/component/functional/Product'
import Comparison from './component/functional/Comparison'
import Decision from './component/functional/Decision'
// import './App.css'
const App=()=>{
  return(
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/comparison' element={<Comparison/>} />
        <Route path='/decision' element={<Decision/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App
