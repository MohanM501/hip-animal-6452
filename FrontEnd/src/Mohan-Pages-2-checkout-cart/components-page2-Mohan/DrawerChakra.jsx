import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Heading,
    Box,
    Checkbox, CheckboxGroup ,
    Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';


import React from "react";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    const grandTotal = 889;
    const style = {
        marginTop: "80px", width: "80%", border: "1px solid green", backgroundColor: "red", padding: "15px", display: "flex", justifyContent: "space-between", cursor: "pointer"
    }
    const handleOpen = () => {

    }

    return (
        <>
            <Button style={style} ref={btnRef} colorScheme='teal' onClick={onOpen} >
                <div style={isOpen ? { display: "none" } : { display: "block" }}>
                    <div>₹{grandTotal}</div>
                    <div>Payable Now</div>
                </div>
                <div style={isOpen ? { display: "none" } : { display: "block" }}>
                    Proceed
                </div>
                <div style={isOpen ? { display: "block" } : { display: "none" }}>
                    Processing
                </div>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                backgroundColor='white'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"sm"}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor='white' colorScheme="black" color='black'>
                    <DrawerCloseButton />
                    <DrawerHeader>Choose Payment Mode</DrawerHeader>

                    <DrawerBody color='black'>
                        <Input placeholder='Type here...' />
                        <div>
                            Total Amount Payable
                        </div>
                        <Heading>
                            ₹ {grandTotal}
                        </Heading>
                        <br/>
                        <Box >
                            {/* <div style={{ color: "aqua" }}>
                                <input type="checkbox" defaultChecked />
                            </div> */}
                            
                            <Checkbox style={{display:"flex"}} borderColor="aqua" defaultChecked>I hereby agree to RentoMojo <span style={{color:"aqua"}}>terms and conditions.</span>
                             </Checkbox>
                        </Box>
                        <br/>
                        <Text>
                            Net Banking , Debit Card, {"&"} Credit Card
                        </Text>
                        <div style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
                            <img width="150px" src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png" alt="net-banking" />
                            <div>Credit card/Debit card/ Netbanking</div>
                            <div style={{width:"40px",fontSize:"40px"}}>{">"}</div>
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button color='black' variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { DrawerExample }