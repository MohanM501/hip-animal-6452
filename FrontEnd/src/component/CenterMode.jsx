import { StarIcon } from '@chakra-ui/icons';
import { Box,Grid,GridItem,Heading,Image,Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import {State } from "../Redux/City/action"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


export const  CenterMode = () => {
    const dispatch=useDispatch()

    const watchdata=useSelector((state)=>state.City.City)
    console.log(watchdata)
    
    useEffect(()=>{
        dispatch(State)
    },[])
    console.log("watch",watchdata)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }
  return (
    <div>
        <Box p="0 30px" color={"black"} background="whiteAlpha.700" borderRadius="10px">
        <Box borderBottom="2px solid"> <Text textAlign={"left"} fontSize='2xl'> <b>Watches</b> </Text></Box> 
        <br/>
      <Slider {...settings} >
      
      {watchdata.length>0 && watchdata.map((el)=>{
        return(
          <div key={el.id}  >
            <div><img src={el.image} alt="img"/></div>
            <Heading size="xs" color={"#455A64"}>{el.name}</Heading>
            <div style={{marginLeft:"70%",backgroundColor:"#3cc101",width:"20%",borderRadius:"50px",color:"white" }}>{el.rating}/5<StarIcon ml="5px" viewBox="0 2 24 24" /></div>

            <hr/>
            {/* <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem pl="4%" w='100px' h='10'  color='#008A00'fontSize={"18"} >{el.price}</GridItem>
                <GridItem w='150px' h='10'  color='#008A00' fontSize={"18"} >{el.off}</GridItem>
            </Grid> */}
            

          </div>

        )
      })}
      
      </Slider>
    </Box>
    </div>
  )
}