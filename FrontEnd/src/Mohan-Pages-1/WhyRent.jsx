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

  const headingForRelocate = [
    "Relocate for free when you move",
    "Furniture as good as new",
    "Easy returns, no questions asked",
    "Free maintenance and annual cleaning",
    "Keep upgrading to newer designs"
  ]

  const paraForRelocate = [
    "Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our eight operational cities!",
    "Quality matters to you, and us! That's why our team does a thorough quality-check for every product, so it reaches you in a condition as good as new.",
    "If you don't like the product you receive on delivery, you can return it right away. We'll initiate the refund of your deposit within 24 hours.",
    "We offer maintenance for your product after 12 months and annual cleaning—free of cost, so you can sit back and relax.",
    "Bored of the same product and style? Just upgrade after 12 months to try another design and enjoy the change!"
  ]

  const Question = [
    "What is RMI ? How is it different from monthly rentals I pay to Rentomojo ?",
    "Why should I rent for 24 months?",
    "Will I be charged any fee if I return the product before my minimum tenure ends?",
    "Why are rentals changing with tenure ?",
    "Is relocation really free ?"
  ]

  const Answer = [
    `RMI is a short form for Rentomojo Monthly Installments which are the lease payments that you give monthly for usage of the product for a stipulated time frame. It depends on factors like market value of the product, tenure of service and interest charged.
      Monthly Rentals are different from RMI as it also incorporates over the top expenses like insurance, maintenance costs etc over and above RMI costs per month.
      Monthly Rental = RMI + Insurance costs / month + Maintenance Costs / Month`,
    `24 months is the most preferred tenure due to the following reasons : possibility of shifting is high as an avg consumer today shifts once in 2 years. Rentomojo saves you from this burden by providing you free relocation within your city or any of the major metro cities. Not just that! you get options to upgrade or expand your rental collection anytime at the touch of a button as well as an option to cancel your subscription anytime as per your changing life priorities.`,
    `We do charge a small early closure fee, which is generally a multiple of your monthly rent as per your plan. To know more about the early closure charges associated with your plan, check out the Compare all tenures button.`,
    `its unfair to charge the same price across tenures as consumers end up paying a lot more than whats fair in cases of longer tenures. so to make it fair for someone who is committing longer, we reduce rentals with tenure similarly to how EMI reduces with tenure.`,
    `Intercity relocation and Intracity relocation comes free with our service. We help you relocate to any cities we are present in.`
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
        relocateImages.length > 0 && relocateImages.map((item, index) => {
          return (
            <div key={index} className='relocate'>
              <div className="relocate-img">
                <img src={item} alt="relocate-images" />
              </div>
              <div className='relocate-para'>
                <div>{headingForRelocate[index]}</div>
                <div>{paraForRelocate[index]}</div>
              </div>
            </div>
          )
        })
      }
      <div id="qanda">Questions and Answers</div>
      <div id="question_border_red"></div>
      <div className='QandA-container'>

        {
          Question.length > 0 && Question.map((item, index) => {
            return (
              <div key={index}>
                <div className='Question'>{item}</div>
                <div className='Answer'>{Answer[index]}</div>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default WhyRent