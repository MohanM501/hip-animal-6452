import { Box, Grid, GridItem ,Heading,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Getpackage } from '../../Redux/Package/action'
import { Getpackagetype } from '../../Redux/PackageType/action'
import "./package.css"
const Package = () => {
    const dispatch=useDispatch()
    const location =useLocation()
    const packagedata=useSelector((state)=>state.Package.package)
    const error=useSelector((state)=>state.Package.isError)
    const Loading=useSelector((state)=>state.Package.isLoading)
    
    const packageType=useSelector((state)=>state.Packagetype.packagetype)
    const Error=useSelector((state)=>state.Packagetype.isError)
    const loading=useSelector((state)=>state.Packagetype.isLoading)
    console.log("to",packageType)
    

    

    useEffect(()=>{
        
        if(location.search|| packagedata.length===0)
        {
            dispatch(Getpackage)
        }
        
        if(location.search|| packageType.length===0)
        {
            dispatch(Getpackagetype)
        }

    },[location.search])

  return (
    <Box>
        <Box  mt="200px" mb="100px">
        <Heading ml={"50px"} mb="10px">Choose by Room Type</Heading>
        {
           
            Loading && "loading............."
        }
        {
            error && "Something wrong"
        }
         {/* templateColumns={"repeat(3,1fr)"} w="90%" ml="5%" gap="7" rowGap={"10"} */}
        <Grid className='maingrid' >
            
            {
                packagedata && packagedata.length>0 && packagedata.map((el)=>{
                    return(
                        <div>
                        <Box className='package'>    
                        <GridItem mb="40px" w="100%" h="100%"  >
                            <Image mb="60px" src={el.image}/>
                        </GridItem>
                        <GridItem className='iconblock'  bg='papayawhip' >
                            <Grid ml="120px" mr="30px" templateColumns={"repeat(2,1fr)"} bg='papayawhip'  h="40px" position="relative" top="5" >
                                <Image ml="30%" w="40px" src={el.icon}></Image>
                                <Box textAlign={"left"} justifyContent="center">
                                    <Heading fontSize={"15px"} ml="-5px" textAlign={"left"}>
                                        {el.title}
                                        
                                    </Heading>
                                    <Heading fontSize={"12px"} textAlign={"left"} color="cyan">
                                    {el.No_of_package}
                                    </Heading>
                                    
                                </Box>
                            </Grid>
                        </GridItem>
                        </Box> 
                        </div>

                    )
                })
            }
            
        </Grid>
        </Box>




        <Box  mt="200px" mb="100px">
        <Heading ml={"50px"} mb="10px">Choose by Apartment Type</Heading>
        {
           
            Loading && "loading............."
        }
        {
            error && "Something wrong"
        }
         {/* templateColumns={"repeat(3,1fr)"} w="90%" ml="5%" gap="7" rowGap={"10"} */}
        <Grid className='maingrid' >
            
            {
                packageType && packageType.length>0 && packageType.map((el)=>{
                    return(
                        <div>
                        <Box className='package'>    
                        <GridItem mb="40px" w="100%" h="100%"  >
                            <Image mb="60px" src={el.image}/>
                        </GridItem>
                        <GridItem className='iconblock'  bg='papayawhip' >
                            <Grid ml="120px" mr="30px" templateColumns={"repeat(2,1fr)"} bg='papayawhip'  h="40px" position="relative" top="5" >
                                <Image ml="30%" w="40px" src={el.icon}></Image>
                                <Box textAlign={"left"} justifyContent="center">
                                    <Heading fontSize={"15px"} ml="-5px" textAlign={"left"}>
                                        {el.title}
                                        
                                    </Heading>
                                    <Heading fontSize={"12px"} textAlign={"left"} color="cyan">
                                    {el.No_of_package}
                                    </Heading>
                                    
                                </Box>
                            </Grid>
                        </GridItem>
                        </Box> 
                        </div>

                    )
                })
            }
            
        </Grid>
        </Box>

    </Box>
  )
}

export default Package