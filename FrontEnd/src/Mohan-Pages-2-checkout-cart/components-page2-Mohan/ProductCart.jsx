import React from 'react';
import styles from "./ProductCart.module.css";
const { prod_container,prod_image_name,second_part,name_delete,rent_deposit,bottom_cart,count,Minus_Plus} = styles;


const ProductCart = () => {

    let products = [{
        img: "https://p.rmjo.in/productSquare/0a8lpvu1-500x500.jpg",
        name: "Mocha Centre Table",
        rent: 89,
        deposit: 149,
        count: 1
    },
    {
        img: "https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg",
        name: "Betty Dresser with Stool",
        rent: 489,
        deposit: 149,
        count: 1
    }]
    const deleteSymbol = "https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg";

    
    return (
        <div>
            {
                products.length > 0 && products.map((item, index) => {
                    return (
                        <div key={index} className={prod_container}>
                            <div className={prod_image_name}>
                                <img src={item.img} alt="prod_cart" />
                                <div className={second_part}>
                                    <div className={name_delete}>
                                        <div>{item.name}</div>
                                        <img src={deleteSymbol} alt="delete" />
                                    </div>
                                    <div className={rent_deposit}>
                                        <div>
                                            <div>Rent</div>
                                            <div>₹{item.rent}</div>
                                        </div>
                                        <div>
                                            <div>Deposit</div>
                                            <div>₹{item.deposit}</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className={bottom_cart}>
                                <div className={count}>
                                    <div className={Minus_Plus}>-</div>
                                    <div>{item.count}</div>
                                    <div className={Minus_Plus}>+</div>
                                </div>
                                <div>3 months</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductCart