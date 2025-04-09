import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("/seller");
  const {showUserLogin} = useAppContext();
  return (
    <div>
      <Toaster />
      {isSellerPath ? null : <Navbar /> }
      {showUserLogin ? <Login/> : null}
      <div className={`${isSellerPath ? " " : "px-16 md:px-16 lg:px-24 xl:px-20"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/products/:category/:id" element={<ProductDetails />} />
      </Routes>
      </div>
      {!isSellerPath && <Footer /> }
    </div>
  )
}

export default App