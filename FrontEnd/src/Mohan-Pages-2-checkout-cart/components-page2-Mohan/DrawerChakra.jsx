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
        marginTop: "140px", width: "85%", border: "1px solid green", backgroundColor: "red", padding: "35px 15px 35px 15px", display: "flex", justifyContent: "space-between", cursor: "pointer",color:"white",fontSize:"13px"
    }
    const handlePhonePay = () => {
        window.open("https://mercury-t2.phonepe.com/transact/v2?token=ZTA3NmMxYmZmZDAwNmUwZDUxMWRiMjQ2ZmQ5NmYyNzQ4NjU1YWE3MmZiZmE2NWNlNzA5YzFiNzBiMGMxNzdlYjlhZDg3YTFmMDIyNjlmNTQ5ZTYyMTYxNzJiNGRmNTNiZGFjZjUyNDVkZDo1MTg0ODg5MWY5ODY3YTMwOTQyZTliMzgyMzZjYTM1YQ")
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
                        <div style={{marginBottom:"10px"}}>
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
                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",cursor:"pointer"}}>
                            <img width="150px" src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png" alt="net-banking" />
                            <div>Credit card/Debit card/ Netbanking</div>
                            <div style={{width:"40px",fontSize:"40px"}}>{">"}</div>
                        </div>
                        <br/>
                        <Text>Wallets</Text>
                        <div onClick={handlePhonePay} style={{display:"flex",justifyContent:"space-around",alignItems:"center",cursor:"pointer"}}>
                            <img width="150px" src="https://www.rentomojo.com/public/images/cart/payment/phonepe.png" alt="net-banking" />
                            <div>Pay via Phone Pay</div>
                            <div style={{width:"40px",fontSize:"40px"}}>{">"}</div>
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button color='black' backgroundColor="aqua" variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { DrawerExample }