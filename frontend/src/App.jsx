import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App