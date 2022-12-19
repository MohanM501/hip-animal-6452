import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';
import { addtowishlist } from '../Redux/Package/action';
import imgpackage from "../assets/package.png"

const Wishlist = () => {

  // let arr=JSON.parse(localStorage.getItem("arr"))||[]
  // console.log("aar",arr)
  const [searchParams,setsearchParams]=useSearchParams(); 
const dispatch=useDispatch()
const [category,setcategory]=useState(searchParams.getAll("genre")||[])
  const wish =useSelector((state)=>state.Package.wishlist)
 console.log(wish)

 const handleFilter=(el)=>{
  const option=el
  let newcategory=[...category];
  if(newcategory.includes(option)){
    newcategory.splice(newcategory.indexOf(option),1)
  }
  else{
    newcategory.push(option)
  }
  setcategory(newcategory)
};
// useEffect(()=>{
//   const params={}
//   setsearchParams(params)
//   dispatch(addtowishlist(category))

// },[category,setsearchParams,dispatch])
  

     
  
    return (
      <Box  mt="100px" mb="100px">
      {/* <Link to="/furniture">abc</Link> */}
   
    <Grid className='maingrid' >
        
        {
            wish.length===0? <Image ml="600px" h="500px" src="https://www.rentomojo.com/public/images/wishlist/wishlist__thumb.svg"></Image>:wish && wish.length>0 && wish.map((el)=>{
                

                return(
                    <div>
                    <Box className='package'  >    
                    <GridItem mb="40px" w="450px" h="100px"  >
                        <Flex >
                          <Box><Image w="100px" h="90px" ml="-30px" position="absolute" src={imgpackage} alt="package"  /></Box>
                        <Image mb="60px"   src={el.image}/>

                        {/* <Box textAlign={"center"}  position="relative" ml="-30px" w="40px" h="30px"   mt="8px" bg="white" borderRadius={"50px"} border="1px solid red"> */}
                            {/* <input type="checkbox" style={{ width:"25px",height:"22px",borderRadius:"50px",marginTop:"2px" }} value={el.id} defaultChecked={category.includes(el.id)} onChange={()=>handleFilter(el)}/> */}
                        {/* </Box> */}
                        </Flex>
                    </GridItem>
                    <GridItem className='iconblock' w="450px" mt="120px" bg='papayawhip' position="relative"  >
                        <Grid  templateRows={"repeat(2,1fr)"} >
                        <Heading fontSize={"16px"} mt="10px" pb={"10px"} textAlign={"center"}>{el.type}</Heading>
                        <hr/>
                            <Grid templateColumns={"repeat(2,1fr)"} textAlign={"left"} justifyContent="center">
                              
                              <Heading ml="20px" fontSize={"20px"} fontWeight="bold" color="black">{el.price}</Heading>
                              
                                {/* <Flex >
                                    
                                <Image ml="30%" w="40px" src={el.icon} ></Image>
                                
                                <Text mt="9px" ml="7px">{el.No_of_package}</Text>
                                </Flex> */}

                            </Grid>
                        </Grid>
                    </GridItem>
                    </Box> 
                    </div>

                )
            })
        }
        
    </Grid>
    </Box>
  )
}
    


export default Wishlist