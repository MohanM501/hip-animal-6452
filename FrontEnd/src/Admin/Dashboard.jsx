import React, { useState } from 'react'
import "./dashboard.css"
import { BsTagsFill ,BsLayers} from "react-icons/bs";
import { FaRupeeSign,FaUserAlt } from "react-icons/fa";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { GrLineChart,GrCompliance } from "react-icons/gr";
import Product from "./Product"
import Order from "./Order"
import Customer from "./Customer"
import Discount from "./Discount"
import logo from "./Assets/logo.jpeg"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Avatar,
    AvatarBadge
  } from '@chakra-ui/react'
import Report from './Report';
import {Link } from 'react-router-dom';


function Dashboard() {
    const [value,setValue]=useState("Products")
    let token=JSON.parse(sessionStorage.getItem("data"))

    const handleLogOut=()=>{
      sessionStorage.clear()
    }

  return (
    <>
    <div id="main_container">
      <div id="lhs">
        
        <div id="title_div">
          <div id="logo" alt="logo">
            <img src={logo} />
          </div>
          <h4>Easy Rent Admin</h4>
        </div>

        <div id="link_div">
          <div onClick={()=>setValue("Products")} id="products_div" className={`link_item ${value==="Products"&& "link_active"}`}>
            <BsTagsFill />
            <p>Products</p>
          </div>
          <div onClick={()=>setValue("Orders")} id="orders_div" className={`link_item ${value==="Orders" && "link_active"}`}>
            <FaRupeeSign/>
            <p>Orders</p>
          </div>
          <div onClick={()=>setValue("Customers")} id="customers_div" className={`link_item ${value==="Customers" && "link_active"}`}>
            <FaUserAlt/>
            <p>Customers</p>
          </div>
          <div onClick={()=>setValue("Discounts")} id="discounts_div" className={`link_item ${value==="Discounts" && "link_active"}`}>
            <TbShoppingCartDiscount/>
            <p>Discounts</p>
          </div>

          <hr id="hr"/>

          <p>Saved reports</p>

          <div onClick={()=>setValue("Reports")} id="discounts_div" className={`link_item ${value==="Reports" && "link_active"}`}>
            <GrLineChart/>
            <p>Reports</p>
          </div>
          <div id="discounts_div" className={`link_item`}>
            <BsLayers/>
            <p>Integrations</p>
          </div>
          <div id="discounts_div" className={`link_item`}>
            <GrCompliance/>
            <p>Year-end Sale</p>
          </div>
        </div>
      </div>


      <div id="rhs">
        <div id="navbar">
        <Menu>
            <MenuButton>
            <Stack ml="10px"  direction='row' spacing={4}>
          <Avatar size='sm'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </Stack>
            </MenuButton>
            <MenuList>
                <MenuItem>{token.name}</MenuItem>
                <MenuItem>{token.email}</MenuItem>
                <MenuItem onClick={handleLogOut}><Link to="/">Log Out</Link></MenuItem>
            </MenuList>
        </Menu>
        </div>
        <div id="rhs_body">
            {value==="Products"&&<Product />}

            {value==="Orders"&&<Order />}

            {value==="Customers"&&<Customer/>}

            {value==="Discounts"&&<Discount/>}

            {value==="Reports" && <Report/>}
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
