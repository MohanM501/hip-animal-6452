import React, { useState,useEffect } from 'react';
import { getLocalData } from '../../Mohan-Pages-1/Utils-Cart/LocalStorageData';
import { DrawerExample } from './DrawerChakra';
import styles from "./OrderSummary.module.css";
import {useSelector} from "react-redux";

const { orderSummary, firstline, payable, payableNow, payableMonthly, refundable, button_proceed, pay_head } = styles;



const handlePayment = () => {
  // window.open("https://mercury-t2.phonepe.com/transact/v2?token=NTdiYjJmZmQxMThhYjc4NWNhZGJmYWFjYzNiM2I4YzIzNzRhYTY0ZTY2NzYwYTllMjc1NjBiNzUzNjU2ZGY2OTdhNzNjZTU2MGZhZGQ5OTNiOThiMWU2NzcwM2Q3NTZkYzVhNjFkNmUyNzoyMjc4Mjc0ZDQ4YWVhZDcwOTliZjVhZDEyNzJkNjE5OA")
}



const OrderSummary = () => {

  const [productRent,setProductRent]=useState(0);
  const [refundable_deposit,setRefundable_Deposit]=useState(0);
  const arr=useSelector((state)=>{
    console.log(state,"state");
    return state.MohanLocalReducer.array;
  })
console.log(arr,"arrayL")
  
const grandTotal = refundable_deposit + 247;

const GST = 88;

  // let arr = getLocalData("cart_products");

  useEffect(() => {
    var totalRent=0;
    var totalDeposit=0;
    arr.map((item)=>{
      totalRent=totalRent+(item.count*item.rent);
      totalDeposit=totalDeposit+(item.count*item.deposit);
      return item;
    })
    setRefundable_Deposit(totalDeposit);
    setProductRent(totalRent)
  }, [arr])

  return (
    <div className={orderSummary}>
      <div className={firstline}>
        <img src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg" alt="summary" />
        <div>Order Summary</div>
      </div>
      <div className={payable}>
        <div className={payableNow}>
          <div className={pay_head}>Payable Now</div>
          <div className={refundable}>
            <div>Refundable Deposit</div>
            <div>₹ {refundable_deposit}</div>
          </div>
          <div className={refundable}>
            <div>Delivery Charges</div>
            <div>₹ 247</div>
          </div>

          <div>

            <DrawerExample grandTotal={grandTotal}/>

          </div>
        </div>
        <div className={payableMonthly}>
          <div className={pay_head}>Monthy Payable</div>
          <div className={refundable}>
            <div>Products Rent</div>
            <div>₹ {productRent}/mo</div>
          </div>
          <div className={refundable}>
            <div>GST</div>
            <div>₹ {GST}/mo</div>
          </div>
          <div className={refundable}>
            <div>Totoal Monthly Rent</div>
            <div>₹ {productRent + GST}/mo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary