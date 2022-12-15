import React from 'react'
import { Routes, Route } from "react-router-dom";
import PhoneLogin from '../Pages/Login/Login';
import Package from '../Pages/Packages/PackageHome/Package';
import Furniture from '../Pages/Packages/Packagemiddle/Furniture';
// import Flutter from '../Components/Flutter';
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PhoneLogin/>}></Route>
            <Route path="/package" element={<Package/>}></Route>
            <Route path="/furniture" element={<Furniture/>}></Route>

            {/* use routes here */}
        </Routes>
    </div>
  )
}

export default MainRoute