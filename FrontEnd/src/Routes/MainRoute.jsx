import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../Mohan-Pages-1/ProductDetails';
import MainCart from '../Mohan-Pages-2-checkout-cart/MainCart';
const MainRoute = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<landingpage/>}></Route> */}
            {/* use routes here */}
            <Route path="/:city/:applianceType/:productname" element={<ProductDetails/>}/>
            <Route path="/checkout/cart" element={<MainCart/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute
