import React from 'react';
import "./WhyRent.css";

const WhyRent = () => {

  const relocateImages = [
    "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.svg",
    "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/1.png",
    "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png",
    "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png",
    "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png",
  ]

  const headingForRelocate=[
    "Relocate for free when you move",
    "Furniture as good as new",
    "Easy returns, no questions asked",
    "Free maintenance and annual cleaning",
    "Keep upgrading to newer designs"
  ]

  const paraForRelocate=[
    "Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our eight operational cities!",
    "Quality matters to you, and us! That's why our team does a thorough quality-check for every product, so it reaches you in a condition as good as new.",
    "If you don't like the product you receive on delivery, you can return it right away. We'll initiate the refund of your deposit within 24 hours.",
    "We offer maintenance for your product after 12 months and annual cleaning—free of cost, so you can sit back and relax.",
    "Bored of the same product and style? Just upgrade after 12 months to try another design and enjoy the change!"
  ]

  return (
    <div className="why-rent-parent">
      <div className="why-rent-first">
        <div className='why-rent-first-heading' >
          <div >Relocate for free when you move</div>
          <div >Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our 8 operational cities!</div>
        </div>
        <img src="https://www.rentomojo.com/public/images/product/app-benefits/product.png" alt="why-rent" />
      </div>

      {
        relocateImages.length>0 && relocateImages.map((item,index)=>{
              return (
                <div className='relocate'>
                    <div className="relocate-img">
                      <img  src={item} alt="relocate-images"/>
                    </div>
                    <div className='relocate-para'>
                          <div>{headingForRelocate[index]}</div>
                          <div>{paraForRelocate[index]}</div>
                    </div>
                </div>
              )
        })
      }
    </div>
  )
}

export default WhyRent