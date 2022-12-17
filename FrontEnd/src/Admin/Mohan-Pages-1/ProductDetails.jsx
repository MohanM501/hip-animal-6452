import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import "./ProductDetails.css";


const ProductDetails = () => {
  const [value, setValue] = useState(0);
  const [valueTrue, setValueTrue] = useState(false);

  const params = useParams();
  const { applianceType, city, productname } = params;
  console.log(params, "params")
  const imageLogo = "https://www.rentomojo.com/public/images/icons/info-line-icon.svg";

  const handleSliderValue = (val) => {
    console.log(val, "event")
    if (val == "3") {
      setValue(3);
      setValueTrue(true);
    } else if (val == "12") {
      setValue(94);
      setValueTrue(true);
    } else if (val == "6") {
      setValue(50);
      setValueTrue(true);
    }
  }
  const handleTofalse = () => {
    setValueTrue(false);
    setValue(0)

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
          <div style={{ backgroundColor: "red" }}>

          </div>
          <div id="slider_product">
            <div className={valueTrue==true?"first-slid-hide":"first-slid-show"} >
              <input type="range" min="1" max="100" className="slider"  id="myrange" />
            </div>
            <div className={valueTrue===false?"first-slid-hide":"second-slid-show"}>
              <input type="range" onChange={handleTofalse} min="1" max="100" className="slider" value={valueTrue && value + ""} id="myrange" />
            </div>
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

        </div>
      </div>
    </div>
  )
}

export default ProductDetails