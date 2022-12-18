import React from 'react';
import { DrawerExample } from './DrawerChakra';
import styles from "./OrderSummary.module.css";

const {orderSummary,firstline,payable,payableNow,payableMonthly,refundable,button_proceed}=styles;

const refundable_deposit=639;
const grandTotal=refundable_deposit+247;
const productRent=487;
const GST=88;

const handlePayment=()=>{
  // window.open("https://mercury-t2.phonepe.com/transact/v2?token=NTdiYjJmZmQxMThhYjc4NWNhZGJmYWFjYzNiM2I4YzIzNzRhYTY0ZTY2NzYwYTllMjc1NjBiNzUzNjU2ZGY2OTdhNzNjZTU2MGZhZGQ5OTNiOThiMWU2NzcwM2Q3NTZkYzVhNjFkNmUyNzoyMjc4Mjc0ZDQ4YWVhZDcwOTliZjVhZDEyNzJkNjE5OA")
}

const OrderSummary = () => {
  return (
    <div className={orderSummary}>
      <div className={firstline}>
        <img src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg" alt="summary"/>
        <div>Order Summary</div>
      </div>
      <div className={payable}>
        <div className={payableNow}>
            <div>Payable Now</div>
            <div className={refundable}>
              <div>Refundable Deposit</div>
              <div>₹ {refundable_deposit}</div>
            </div>
            <div className={refundable}>
              <div>Delivery Charges</div>
              <div>₹ 247</div>
            </div>

            <div>
                
                <DrawerExample/>
                
            </div>
        </div>
        <div className={payableMonthly}>
              <div>Monthy Payable</div>
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
                <div>₹ {productRent+GST}/mo</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary