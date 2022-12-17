import React from 'react'
import "./common.css"
import {
  Button, 
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  Spinner,
  Stack,
  Skeleton,
  Box } from '@chakra-ui/react';
  import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getCoupon,postCoupon,deleteCoupon,patchCoupon} from "../Redux/CouponReducer/action"
import { useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons'


  const initState={
    code:"",
    discriptions:"",
    amount:"",
    status:true,
  }

function Discount() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formData,setFormData]=useState(initState)
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.CouponReducer.coupons)
  const isLoading=useSelector((state)=>state.CouponReducer.isLoading)

  useEffect(()=>{
    dispatch(getCoupon)
  },[])

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handleAdd=()=>{
    dispatch(postCoupon(formData))
    setFormData(initState)
  }

  const handleDelete=(id)=>{
    dispatch(deleteCoupon(id))
  }

  const handleActive=(id,status)=>{
    dispatch(patchCoupon(id,status))
  }

  return (
    <>
      <div id="products_page" className="page active">
        <Flex mb="30px" justifyContent="space-between" alignItems="center" >
          <h4>Discounts</h4>
        </Flex>

        <div className="action_div">
          <Flex border="1px solid grey" h="30px" p="3px" alignItems="center">
            <Input variant='unstyled' size='sm' placeholder="Search Coupon Code" />
            <button><AiOutlineSearch/></button>
          </Flex>
          <Button bg="white" border="1px solid grey"  onClick={onOpen}>+ Add Coupon</Button>
          <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add Product Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    <Flex direction="column" gap="10px" mt="50px">
                    <label>Code</label>
                    <Input type="text" placeholder="Enter the Coupon Code" name="code" value={formData.code} onChange={handleChange} />
                    <label>Description</label>
                    <Input type="text" placeholder="Enter the Coupon Description" name="discriptions" value={formData.discriptions} onChange={handleChange}/>
                    <label>Amount</label>
                    <Input type="number" placeholder="Enter the Discount Percentage" name="amount" value={formData.amount} onChange={handleChange}/>
                    <Button  mb="25px" color="white" bg="black" _hover={{bg:"grey"}} onClick={handleAdd} >Add</Button>
                    </Flex> 
                </ModalBody>
                </ModalContent>
            </Modal>
        </div>


        {isLoading?
        <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>:
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody id="product_tbody">
            {/* <!-- items row comes here --> */}
            {data&&data.map((ele)=>(
              <tr key={ele._id}>
                <td>
                  <span>{ele.code}</span>
                </td>
                <td>
                  <span>{ele.discriptions}</span>
                </td>
                <td>
                  <span>{ele.amount} %</span>
                </td>
                <td>
                {ele.status?
                            <Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Active</Box>
                            :<Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">InActive</Box>}
                </td>
                <td>
                  <DeleteIcon onClick={()=>handleDelete(ele._id)}  w="25px" h="25px" _hover={{cursor:"pointer", color:"red"}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
        {/* <Box w="100%" mt="50px"  textAlign="center">
                {isLoading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  />}
          </Box> */}
        </div>
    </>
  )
}

export default Discount
