import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../Mohan-Pages-1/ProductDetails';
const MainRoute = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<landingpage/>}></Route> */}
            {/* use routes here */}
            <Route path="/:city/:applianceType/:productname" element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute
