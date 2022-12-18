import React,{useState,useEffect} from 'react';
import { getLocalData,SaveData} from '../../Mohan-Pages-1/Utils-Cart/LocalStorageData';
import styles from "./ProductCart.module.css";
import { useDispatch } from 'react-redux';
import { user_post_local } from '../../Redux/MohanReduxLocal/action';
const { prod_container,prod_image_name,second_part,name_delete,rent_deposit,bottom_cart,count,Minus_Plus,cartNo} = styles;


const ProductCart = () => {

    // let products = [{
    //     img: "https://p.rmjo.in/productSquare/0a8lpvu1-500x500.jpg",
    //     name: "Mocha Centre Table",
    //     rent: 89,
    //     deposit: 149,
    //     count: 1
    // },
    // {
    //     img: "https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg",
    //     name: "Betty Dresser with Stool",
    //     rent: 489,
    //     deposit: 149,
    //     count: 1
    // }]
    const [products,setProducts]=useState([]);
    const dispatch=useDispatch();
   
    const product=getLocalData("cart_products")||[];
    
    const deleteSymbol = "https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg";

    useEffect(()=>{
        setProducts(product)
    },[])
    const handleDelete=(ind)=>{
            console.log(ind,"index_delte")
            let not_deleted=products.filter((item,index)=>{
                return index!==ind;
            })
            console.log(not_deleted,"not deleted")
            SaveData("cart_products",not_deleted);
            setProducts(not_deleted);
            dispatch(user_post_local(not_deleted))
    }

    const handleEdit=(ind,val)=>{
            console.log(ind,val,"editing ");
            let edited=products.map((item,index)=>{
                if(index!==ind){
                    return item;
                }else{
                    if(val===-1 && item.count===1){
                        return item;
                    }else{
                        item.count=item.count+val;
                        return item;
                    } 
                }
            })
            console.log(edited,"edited");
            SaveData("cart_products",edited);
            setProducts(edited);
            dispatch(user_post_local(edited))
    }
    
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
                                        <img src={deleteSymbol} onClick={()=>handleDelete(index)} alt="delete" />
                                    </div>
                                    <div className={rent_deposit}>
                                        <div>
                                            <div>Rent</div>
                                            <div>₹{item.rent*item.count}/mo</div>
                                        </div>
                                        <div>
                                            <div>Deposit</div>
                                            <div>₹{item.deposit*item.count}</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className={bottom_cart}>
                                <div className={count}>
                                    <div className={Minus_Plus} onClick={()=>handleEdit(index,-1)}>-</div>
                                    <div>{item.count}</div>
                                    <div className={Minus_Plus} onClick={()=>handleEdit(index,1)}>+</div>
                                </div>
                                <div>3 months</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={cartNo}>
                {products.length}
            </div>
        </div>
    )
}

export default ProductCart