import React, { useState,useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';

import "./ProductDetails.css";


const ProductDetails = () => {

  const ref=useRef(null);
  const params = useParams();
  const { applianceType, city, productname } = params;
  console.log(params, "params")
  const imageLogo = "https://www.rentomojo.com/public/images/icons/info-line-icon.svg";

  const handleSliderValue = (val) => {
    console.log(val, "event")
    console.log(ref.current,"ref current");
    
    if (val ==="3") {
        ref.current.value=0;
    } else if (val === "6") {
      ref.current.value=50;
    } else if (val ==="12") {
      ref.current.value=100;
    }
    
  }
  
  const handlefirst = (e) => {
    console.log(e.value, "valeue before");
    if (e.value > 25 && e.value <= 75) {
      e.value = 50;
    }else if(e.value<=25){
      e.value=0;
    }else if(e.value>75){
      e.value=100;
    }
    console.log(e.value, "valeue");

  }

  return (
    <div className="product-details-main" >
      <div className="middle-section">
        <div className="left-side">
          <img src="https://p.rmjo.in/moodShot/qpaqpi6f-1024x512.jpg" alt="topImage" />
        </div>
        
        <div className="right-side">
          <div>{productname}</div>
          <div id="how_long">
            How long do you want to rent this for ? (months)
            <img src={imageLogo} alt="log" />
          </div>
          
          <div id="slider_product">

            <input type="range" ref={ref} onChange={(e)=>handlefirst(e.target)} min="1" max="100" className="slider" id="myrange" />

            <div className="slider-bottom" >
              <div className="slider-months">
                <div>| &nbsp; &nbsp; &nbsp; &nbsp;</div>
                <div onClick={() => handleSliderValue("3")} >3+</div>
              </div>
              <div className="slider-months">
                <div>| &nbsp; &nbsp; &nbsp; &nbsp;</div>
                <div onClick={() => handleSliderValue('6')}>6+</div>
              </div>
              <div className="slider-months">
                <div>| &nbsp; &nbsp; &nbsp; &nbsp;</div>
                <div onClick={() => handleSliderValue('12')}>12+</div>
              </div>
            </div>
          </div>
          <div>
            Months
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails