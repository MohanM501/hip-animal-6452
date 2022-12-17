import React,{useEffect,useState} from 'react';
import OrderSummary from './components-page2-Mohan/OrderSummary';
import ProductCart from './components-page2-Mohan/ProductCart';
import styles from "./MainCart.module.css";
const { parent,container, left_cart, right_cart } = styles

const MainCart = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setLoading(false);
    },[])

    if(loading){
        return <h2>....Loading.....</h2>
    }

    return (
        <div className={parent}>
            <div className={container}>
                <div className={left_cart}>
                        <OrderSummary/>
                </div>
                <div className={right_cart}>
                        <ProductCart/>
                </div>
            </div>

        </div>
    )
}

export default MainCart