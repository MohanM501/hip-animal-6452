import React from 'react'
// import { BiRupee} from "react-icons/";
import { Box, Button, Center, Grid, GridItem, Image, Input,Text, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Stack, Menu, MenuButton, MenuList, MenuItem, Flex  } from '@chakra-ui/react';
const Cart = () => {
  return (
    <Box border='1px solid black' h='350px' w='18%' ml='90px'> 
<Grid  >
    <GridItem  border='1px solid blue' h='220px' ml='10px' w='90%'>
        <Image src='https://p.rmjo.in/productSquare/7i306dfx-500x500.jpg'/>
        <Text border='1px solid green' h='40px' mt='20px'><strong>Hutch Metal Queen Hydr..</strong></Text>
        <Grid templateColumns='repeat(2,1fr)'  border='1px solid red' h='60px' w='99%'>
            <GridItem  border='1px solid blue'>
                <Text>Rent</Text>
                <Text>521/mo</Text>
            </GridItem>
            <GridItem mt='15px' border='1px solid orange.300'>
        <Button border='1px solid red' color='orange.300'>See More</Button>
</GridItem>
    </Grid>
    </GridItem>
    
</Grid>





       {/* <Box>Cart</Box> */}
    </Box>
    


  )
}

export default Cart