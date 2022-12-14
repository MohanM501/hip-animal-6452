import React from 'react'
import { Routes, Route } from "react-router-dom";
import PhoneLogin from '../Pages/Login/Login';
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PhoneLogin/>}></Route>
            {/* use routes here */}
        </Routes>
    </div>
  )
}

export default MainRoute