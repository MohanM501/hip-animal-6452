// import {useEffect,useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Center, Grid, GridItem, Image, Input,Text, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Stack  } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import logo from "../assets/logo.png"

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../Redux/City/action";


const Navbar = () => {
const dispatch=useDispatch()
const data =useSelector((state)=>
    state.City.City
)
const location =useLocation()
console.log(data)
useEffect(()=>{
    if(location.search||data.length===0){
      dispatch(State)

    }
})

 
  return (
   <box >
    <Center boxShadow='md'  p="10px"  display="Flex"  gap='12' bgColor="" className='nav'  h="60px">
    <Link to='/'> <Image sizes='92*36' htmlHeight={36} htmlWidth={92}
    // boxSize={}
    src={logo}
    alt='logo'/></Link>
 


 <Popover placement='top-start' >
  <PopoverTrigger >
    <Button>Click me</Button>
  </PopoverTrigger>
  <PopoverContent w="1000px" m="center">
  <Input  mt="40px" w="99%" m="center" textAlign="center" type='text' placeholder=''  outline="none" border="1px solid black" borderRadius='10px' />
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody >
          <Grid templateColumns='repeat(8,1fr)' h="300px" border="1px solid black" textAlign="center"  >
            
              {data && data.length>0 && data.map((el)=>{
                return (<Box>
                    <Image src={el.image}/>
                      <Text> {el.name}</Text>
                </Box>)
              })}
           
          </Grid>
    </PopoverBody>
  </PopoverContent>
</Popover>


<Stack spacing={4}  w="500px"  flexDir="row" _focus={{ outline:"none", border:"none"}} justfy="center" gap="5px" align="center" border="1px solid black" borderRadius="16px">
    
    <Input type='text' placeholder=''  outline="none" border="none" />
  
  <Button  background="none" outline="none"   onClick ={()=>alert("click")}  mt="10px"> <i class="fa-sharp fa-solid fa-magnifying-glass" /></Button>
  </Stack>

 
    
    {/* <Dropdown/> */}
     {/* <InputRightElement  onClick={()=>alert("click")}
      pointerEvents='none'
      children={<i class="fa-sharp fa-solid fa-magnifying-glass"></i>}
    /> */}
    <Link to='/cart'><strong>Cart</strong></Link>
    <Link to='/login'><Button  color='black'>LOGIN|SIGNUP</Button></Link>
      </Center>
   </box>
          
     );
};

          


export default Navbar;