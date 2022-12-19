import React, { useState } from 'react'
import style from "styled-components"
import FilterSort from '../../../Components/PackageComponents/FilterSort'
import AllFurniture from '../../../Components/PackageComponents/AllFurniture'
import {Box} from "@chakra-ui/react"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const Furniture = () => {
  const[val,setval]=useState(0)

  const slideval=(getval)=>{
    console.log(getval,"alex")
    setval(getval)
    
  }




  return (
      <Box mt="90px">
        <Navbar/>
    <Wrapper>
        <WrapperFilterSort>
            <FilterSort slideval={slideval}/>
        </WrapperFilterSort>
        <WrapperMusicAlbums>
            <AllFurniture getval={val}/>
        </WrapperMusicAlbums>
    </Wrapper>
    <Footer/>
      </Box>
  )
}

const Wrapper=style.div`
 
 display:flex;
 min-height:100vh;
 ` 
 const WrapperFilterSort=style.div`
 width:200px;
 margin-top:150px;
 margin-left:60px;
 `
const WrapperMusicAlbums=style.div
`
 
 width:2000px;
 margin-right:-50px;
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
 justify-content:center;
 grid-gap:10px;   
`
export default Furniture