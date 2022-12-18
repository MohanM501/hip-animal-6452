import React, { useState, useEffect, useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";

import "./single.css";
import WhyRent from './WhyRent';
import ProdDetails from './ProdDetails';


const single = ({data}) => {

  console.log(data)
  const ref = useRef(null);
  const params = useParams();
  const { applianceType, city, productname } = params;
  console.log(params, "params")
  const [monthlyrent, setMonthlyRent] = useState("459");
  const refundable_amount = 609;
  const [product,SetProduct]=useState(true);
  const [blue,setBlue]=useState("50");
  const navigate=useNavigate();



  const imageLogo = "https://www.rentomojo.com/public/images/icons/info-line-icon.svg";

  const handleSliderValue = (val) => {
    console.log(val, "event")
    console.log(ref.current, "ref current");

    if (val === "3") {
      ref.current.value = 0;
      setMonthlyRent("506");
      setBlue(0);
    } else if (val === "6") {
      ref.current.value = 50;
      setMonthlyRent("459");
      setBlue(50)
    } else if (val === "12") {
      ref.current.value = 100;
      setMonthlyRent("519");
      setBlue(100);
    }

  }

  const handlefirst = (e) => {
    // console.log(e.value, "valeue before");

    setBlue(e.value);
    if (e.value > 38 && e.value <= 63) {
      e.value = 50;
      setBlue(50);
      setMonthlyRent("459");
    } else if (e.value>=0 && e.value < 15) {
      e.value = 0;
      setBlue(0);
      setMonthlyRent("506");
    } else if (e.value > 85 && e.value <=100) {
      e.value = 100;
      setBlue(100);
      setMonthlyRent("519");
    }
    console.log(e.value, "valeue");

  }
  
  const handleProduct=(bool)=>{
        if(bool===false){
          SetProduct(false);
        }else{
          SetProduct(true);
        }
  }

  const GotoCart=()=>{
      console.log("goto");
      alert("Product has been added to the cart")
      navigate("/checkout/cart");
  }



  return (
    <div className="product-details-main" >
      <div className="middle-section">
        <div className="left-side">
          <img src="https://p.rmjo.in/moodShot/qpaqpi6f-1024x512.jpg" alt="topImage" />
          <div className='why_rent'>
            <div className={product?"show-border1":"hide-border"} onClick={()=>handleProduct(false)}>Why Rent from US</div>
            <div className={product?"hide-border":"show-border2"} onClick={()=>handleProduct(true)}>Product Details</div>
          </div>
          <div className={product?"hide-why":"show-why"}>
            <WhyRent/>
          </div>
          <div className={product?"show-prod":"hide-prod"}>
            <ProdDetails/>
          </div>
        </div>

        <div className="right-side">
          <div>{productname}</div>
          <div id="how_long">
            How long do you want to rent this for ? (months)
            <img src={imageLogo} alt="log" />
          </div>

          <div id="slider_product">

            <input type="range" ref={ref}  onChange={(e) => handlefirst(e.target)} min="1" max="100" className="slider" style={{background:`linear-gradient(90deg,lightblue ${blue}%,gray ${blue}%)`}} id="myrange" />

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

          <div className='month-refund'>
            <div className="monthly-rent">
              <h2 className='month-number'>₹{monthlyrent}<span id="mo">/mo</span></h2>
              <h2 className='month-img-div'>
                <h2 >Monthly Rent</h2>
                <img src="https://www.rentomojo.com/public/images/icons/info-line-icon.svg" className="month-img" alt="month" />
              </h2>
            </div>
            <div className="refundable-deposit">
              <h2 className='month-number'>₹{refundable_amount} </h2>
              <h2 className='month-img-div'>
                Refundable Deposit
                <img src="https://www.rentomojo.com/public/images/icons/info-line-icon.svg" className="month-img" alt="month" />
              </h2>
            </div>
          </div>

          <div className='month-below-parent'>
            <div className='month-below-div'>
              <div id="hide-this"></div>
              <div className='month-below'>
                <img src="https://www.rentomojo.com/public/images/icons/black-tick.svg" className="month-img" alt="small" />
                <h2>7 Days free trial</h2>
              </div>
              <div className='month-below'>
                <img src="https://www.rentomojo.com/public/images/icons/black-tick.svg" className="month-img" alt="small" />
                <h2>Free relocation</h2>
              </div>
              <div className='month-below'>
                <img src="https://www.rentomojo.com/public/images/icons/black-tick.svg" className="month-img" alt="small" />
                <h2>Free upgrades</h2>
              </div>
              <div className='month-below'>
                <h2 id="view-all">View All</h2>
              </div>

            </div>
          </div>
          <div className="Compare">
            <button>Compare All Tenures</button>
          </div>
          <div className="delivery-center">
            <div className="delivery" >
              <img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="delivery-log" />
              Delivery By 20th Dec 2022
            </div>

          </div>
          <div className="Book"  onClick={GotoCart}>
            <button>
              <img src="https://www.rentomojo.com/public/images/icons/cart-new.svg" alt="book-logo" />
              Book you plan
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default single