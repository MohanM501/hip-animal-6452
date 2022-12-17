import { Box, Flex, Grid, GridItem, Heading,Image,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import {AiOutlineHeart} from "react-icons/ai"
import { Getfurniturn } from '../../Redux/Package/action'
const AllFurniture = ({val}) => {
    // console.log("all",val)
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParams] = useSearchParams(); 
    const {packagedata,title}=useSelector((state)=>{return {packagedata:state.Package.furniture,title:state.Package.title}})
    const icon=useSelector((state)=>state.Package.package)
    console.log(packagedata,title,icon)


 
    
    
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
                        <Box position="absolute" ml="370px" mt="10px" bg="white" borderRadius={"50%"} border="1px solid red"  ><AiOutlineHeart fontSize={"40px"}   /></Box>
                        </Flex>
                    </GridItem>
                    <GridItem className='iconblock' w="100%"  bg='papayawhip' position="relative"  >
                        <Grid  templateRows={"repeat(2,1fr)"}    >
                        <Heading fontSize={"16px"} mt="10px"  textAlign={"center"}>{el.type}</Heading>
                            <Grid templateColumns={"repeat(2,1fr)"} textAlign={"left"} justifyContent="center">
                            <Heading ml="20px" fontSize={"20px"} fontWeight="bold" color="black">{el.price}</Heading>
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