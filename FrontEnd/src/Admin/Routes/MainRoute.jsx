import React from 'react'
import { Routes, Route } from "react-router-dom";
import PhoneLogin from '../Pages/Login/Login';
import Package from '../Pages/Packages/PackageHome/Package';
import Furniture from '../Pages/Packages/Packagemiddle/Furniture';
import ProductDetails from "../Mohan-Pages-1/ProductDetails"
import Dashboard from '../Admin/Dashboard';
// import Flutter from '../Components/Flutter';
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PhoneLogin/>}></Route>
            <Route path="/package" element={<Package/>}></Route>
            <Route path="/furniture" element={<Furniture/>}></Route>

            {/* use routes here */}
            <Route path="/:city/:applianceType/:productname" element={<ProductDetails/>}/>
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute
