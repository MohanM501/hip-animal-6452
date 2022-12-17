import { Box, Flex, Grid, GridItem, Heading,Image,Input,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import {BsFillHeartFill} from "react-icons/bs"
import { addtowishlist, Getfurniturn } from '../../Redux/Package/action'
const AllFurniture = ({getval}) => {
   
const dispatch=useDispatch()
const location=useLocation()



console.log(getval,typeof(getval))

const [searchParams,setsearchParams]=useSearchParams(); 

const [category,setcategory]=useState(searchParams.getAll("genre")||[])

const {packagedata,title}=useSelector((state)=>{return {packagedata:state.Package.furniture,title:state.Package.title}})
// const icon=useSelector((state)=>state.Package.package)

// const val=localStorage.getItem("value")
// const val=0
// console.log(packagedata,title,icon)
// console.log(val,searchParams)
// useEffect(()=>{
//     const value=searchParams.getAll("genre")
//     console.log("c",value)

// },[])
// if(val>50){
//     console.log("print")
// }
const wish =useSelector((state)=>state.Package.wishlist)

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
  useEffect(()=>{
    const params={}
    setsearchParams(params)
    dispatch(addtowishlist(category))

  },[category,setsearchParams,dispatch])

console.log(wish,"wh")  
  
  
  // console.log("cat",category)
  
  
  // localStorage.setItem("arr",JSON.stringify(category))



   
    
    function filterItems(arr, query) {
        console.log("ele")
        return arr.filter((el) => el.title===query);
      }
      const fliterdata=filterItems(packagedata,title)
      
       

    

      
      console.log("fli",fliterdata)


    //      useEffect(()=>{
    //     console.log('hello')
    //     if(location || packagedata.length===0){
  
        
    //     const genre=searchParams.getAll("genre");
    //     console.log(genre,"gen")
    //     const queryParams={
    //       params:{
    //         genre:genre,
    //         _sort:searchParams.get("sortBy") && "price",
    //         _order:searchParams.get("sortBy"),
    //       },
    //     }
    //     console.log("inside",genre)
    //       dispatch(Getfurniturn(queryParams))
    //     }
  
    //   },[location.search])
    
    
    
    // useEffect(()=>{


    // }, [title])
    
  return (
    <Box  mt="100px" mb="100px">
      <Link to="/wishlist">abc</Link>
    <Heading ml={"5%"} mb="10px">{title}</Heading>
    
    {/* {
       
        Loading && "loading............."
    }
    {
        error && "Something wrong"
    } */}
     {/* templateColumns={"repeat(3,1fr)"} w="90%" ml="5%" gap="7" rowGap={"10"} */}
    <Grid className='maingrid' >
        
        {
            fliterdata && fliterdata.length>0 && fliterdata.map((el)=>{
                

                return(
                    <div>
                    <Box className='package'  >    
                    <GridItem mb="40px" w="100%" h="100%"  >
                        <Flex>
                        <Image mb="60px" src={el.image}/>
                        <Box textAlign={"center"}  position="relative" ml="-30px" w="40px" h="30px"   mt="8px" bg="white" borderRadius={"50px"} border="1px solid red">
                            <input type="checkbox" style={{ width:"25px",height:"22px",borderRadius:"50px",marginTop:"2px" }} value={el.id} defaultChecked={category.includes(el.id)} onChange={()=>handleFilter(el)}/>
                        </Box>
                        </Flex>
                    </GridItem>
                    <GridItem className='iconblock' w="100%"  bg='papayawhip' position="relative"  >
                        <Grid  templateRows={"repeat(2,1fr)"} >
                        <Heading fontSize={"16px"} mt="10px" pb={"10px"} textAlign={"center"}>{el.type}</Heading>
                        <hr/>
                            <Grid templateColumns={"repeat(2,1fr)"} textAlign={"left"} justifyContent="center">
                              {getval>55 ?
                              <Heading ml="20px" fontSize={"20px"} fontWeight="bold" color="black">{el.price}</Heading>:
                              getval>0 && getval<45?
                              <Heading ml="20px" fontSize={"20px"} fontWeight="bold" color="black">{+el.price+300}</Heading>:
                              <Heading ml="20px" fontSize={"20px"} fontWeight="bold" color="black">{+el.price+200}</Heading>}
                                <Flex >
                                    
                                <Image ml="30%" w="40px" src={el.icon} ></Image>
                                
                                <Text mt="9px" ml="7px">{el.No_of_package}</Text>
                                </Flex>

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

export default AllFurniture