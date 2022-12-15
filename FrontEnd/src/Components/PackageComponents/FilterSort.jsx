import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {ChevronDownIcon} from "@chakra-ui/icons"
import {FiFilter} from "react-icons/fi"
import { Image,Box, Heading, Menu, MenuButton, MenuItem, MenuList,Button, Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import FLutterSlider from "./FlutterSlider"
const FilterSort = () => {
 
  
  const [searchParams,setsearchParams]=useSearchParams();
  const [category,setcategory]=useState(searchParams.getAll("genre")||[])
  const [sortBy,setSortBy]=useState(searchParams.getAll('sortBy')||[])
  const icon=useSelector((state)=>state.Package.package)
  const icontype=useSelector((state)=>state.Packagetype.packagetype)
  console.log(icon)
  // console.log(searchParams.getAll("genre") ||[]);
  
//   const handleFilter=(e)=>{
//     const option=e.target.value;
//     let newcategory=[...category];
//     if(newcategory.includes(option)){
//       newcategory.splice(newcategory.indexOf(option),1)
//     }
//     else{
//       newcategory.push(option)
//     }
//     setcategory(newcategory)
//   };
  
  const handleSortBy=(e)=>{
    setSortBy(e.target.value)
  }


  useEffect(()=>{
    const params={}
    category && (params.genre=category);
    sortBy && (params.sortBy=sortBy)
    setsearchParams(params)

  },[category,setsearchParams,sortBy])


  console.log("ass",category)
  
  


  return (
    <div >
        
    <div  style={{ display:"flex" }}>
    <Box>
        <div style={{display:"flex" }}> 
      <FiFilter size="25px" /> <Heading size="md">Filter</Heading>
      </div>
      
      </Box>
      <Box ml="20px">
      <Menu >
        <MenuButton  w="130px" as={Button} rightIcon={<ChevronDownIcon />}>
          SORT
        </MenuButton>
        <MenuList minWidth={"8.3rem"}>
          <MenuItem>
          <input type="radio" value="asc" name="sortBy" onChange={handleSortBy} defaultChecked={sortBy==='asc'} />
          <label>Ascending</label>
          </MenuItem>
          <MenuItem>
          <input type="radio" value="desc" name="sortBy" onChange={handleSortBy} defaultChecked={sortBy==='desc'} />
          <label>Descending</label>
          </MenuItem>
          </MenuList>
      </Menu>
      </Box>
      </div>
      <Box mt="30px" h="50px" textAlign={"center"} border={"2px solid lightblue"}>
      <FLutterSlider mt="20px"/>
      
      </Box>
      <Text pt="20px">Choose by Room Type</Text>
      <Grid mb="20px" mt="10px" ml="20px"templateColumns={"repeat(2,1fr)"} gap="4">
     
        {
            icon && icon.length>0  && icon.map((el)=>{
                return(
                    <GridItem h="auto" w="80px" borderRadius={"10%"} textAlign={"center"} justifyContent={"center"} border={"1px "} color="black" >
                        <Image w="50%" m="20px" src={el.icon}></Image>
                        <Text fontSize={"15px"}>{el.type}</Text>
                        <Text fontSize={"13px"}>{el.No_of_package}</Text>


                    </GridItem>
                )

            })
        }

      </Grid>
      <hr/>
      <Text pt="20px">Choose by Apartment Type</Text>
      <Grid mt="10px" ml="20px" templateColumns={"repeat(2,1fr)"} gap="4">
        {
            icontype && icontype.length>0  && icontype.map((el)=>{
                return(
                    <GridItem h="auto" w="80px" borderRadius={"10%"} textAlign={"center"} justifyContent={"center"} border={"1px "} color="black" >
                        <Image w="50%" m="20px" src={el.icon}></Image>
                        <Text fontSize={"15px"}>{el.type}</Text>
                        <Text fontSize={"13px"}>{el.No_of_package}</Text>


                    </GridItem>
                )

            })
        }

      </Grid>
      
      
      
    
    </div>
  )
}

export default FilterSort