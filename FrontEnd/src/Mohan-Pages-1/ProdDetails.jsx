import React, { useState } from 'react'
import "./ProdDetails.css";
const ProdDetails = () => {

  const [roundNo, setRoundNo] = useState(1);
  const round = new Array(5).fill("");
  const images = [
    "https://p.rmjo.in/productSquare/8ek5igur-500x500.jpg",
    "https://p.rmjo.in/productSquare/ttojaicc-500x500.jpg",
    "https://p.rmjo.in/productSquare/4ld8zxc3-500x500.jpg",
    "https://p.rmjo.in/productSquare/e3fta0hj-500x500.jpg",
    "https://p.rmjo.in/productSquare/sjucryq9-500x500.jpg",
    "https://p.rmjo.in/productSquare/nc3hv1ko-500x500.jpg",
  ]
  console.log(round, "round");
  const handleRoundNo = (ind) => {
    setRoundNo(ind);
  }
  const gt = ">";
  const nameOfProduct = "name of the product";
  const paragraph = "Say goodbye to clutter with Stowy 2-Door Wardrobe. The Stowy Wardrobe is your best buddy for all those unexpected visits from your folks and impromptu sleepovers. With varying shelf sizes and utilitarian drawers, Stowy wardrobe ensures that your bedroom will always stay uncluttered and organized—just the way you like it.";
  const size = `29"L x 19"B x 73"H`;
  const material = "engineering wood";
  const materialColor = "red";
  const features = ["Wood finish:Wenge", `material:${material}`, "4 Shelf+1 drawer", "Easy-access clothing rail+drawers", "Comes with a rounded mirror"];
  const monthlyRental = "509";
  const Deposit="629";



  return (
    <div className="prod-container">
      <img src="./Mohan-images/virusSafetyGreen.webp" alt="test"/>
      <div className="first-sect">
        <div>
          <img src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png" alt="some-log" />
        </div>
        <div>Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.</div>
        <div>Know more {gt}</div>
      </div>
      <div className="prod-heading">Product Details</div>
      <div className="border-below"></div>
      {/* images and details */}

      <div className='actual-prod'>
        <div className='slider-image'>
          <img src={images[roundNo - 1]} alt="all-img" />
          <div className='round-container'>

            {round.length > 0 && round.map((item, index) => {
              return (<div key={index} onClick={() => handleRoundNo(index + 1)} id={roundNo === index + 1 ? 'round' : ''}></div>)
            })}
          </div>
        </div>

        <div className='actual-right'>
          <h2>{nameOfProduct}</h2>
          <div id="gray-bottom-border"></div>
          <div id="paragraph">{paragraph}</div>
          <div className='info-box'>
            <div className="info-Fbox">
              <div>
                <h1>Sizes and Dimensions</h1>
                <ul id="ul_size"><li>{size} </li></ul>
              </div>
              <div >
                <h1 id="material-heading">Material & Color</h1>
                <div className='Material'>
                  <div style={{ width: "10px", height: "10px", backgroundColor: materialColor, borderRadius: "50%", alignSelf: "center" }}></div>
                  <div>{material}</div>
                </div>
              </div>
            </div>
            <div className="info-Fbox" >
              <div id="features">Features & Specs</div>
              <ul id="features-points">
                {features.length > 0 && features.map((item, ind) => {
                  return (<li key={ind} className="features-points">{item}</li>)
                })}
              </ul>
            </div>
          </div>
          <div className='monthly-deposit'>
            <div>Monthly Rental: <span>{"₹" + " " + monthlyRental}</span></div>
            <div>Deposit: <span>{"₹"+Deposit}</span> </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ProdDetails