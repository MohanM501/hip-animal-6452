import React, { Component } from "react"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import {Image, Grid ,Box, Button,Text, Heading, Flex, Spacer} from "@chakra-ui/react"; 
 
export default class slider extends Component { 
  render() { 
    const settings = { 
      dots: true, 
      infinite: true, 
      speed: 250, 
      autoplay: true,
      slidesToShow: 1, 
      slidesToScroll: 1 
    }; 
    return ( 
<Box mt="90px" >
<Box mt="30px" ml="90px" w="90%"  h="auto"  borderRadius="20px"  justifyContent="center">
       <Slider {...settings}  >
      
          <div   > 
                    
              <Image width="100%" borderRadius="20px" src="https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg"></Image>          
            
          </div>
          
          <div > 
                      
              <Image  width="100%" borderRadius="20px" src="https://s.rmjo.in/AC-Offer-Banner-Web-.jpg"></Image>          
            
          </div>
          <div > 
                      
              <Image  width="100%" borderRadius="20px" src="https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg"></Image>          
            
          </div>
          
          <div > 
                     
              <Image   width="100%" borderRadius="20px" src="https://s.rmjo.in/WP-Web.png"></Image>          
            
          </div> 


         
          
        </Slider>
        
        </Box> 
</Box>

     
      
    ); 
  } 
}