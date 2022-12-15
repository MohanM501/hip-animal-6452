import React from 'react'
import style from "styled-components"
import FilterSort from '../../../Components/PackageComponents/FilterSort'
import AllFurniture from '../../../Components/PackageComponents/AllFurniture'
const Furniture = () => {
  return (
    <Wrapper>
        <WrapperFilterSort>
            <FilterSort/>
        </WrapperFilterSort>
        <WrapperMusicAlbums>
            <AllFurniture/>
        </WrapperMusicAlbums>
    </Wrapper>
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