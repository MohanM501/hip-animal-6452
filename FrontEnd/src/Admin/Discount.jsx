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
  useDisclosure} from '@chakra-ui/react';
  import { AiOutlineSearch } from "react-icons/ai";

function Discount() {
  const { isOpen, onOpen, onClose } = useDisclosure()


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
                    <Input type="text" placeholder="Enter the Coupon Code" name="Code"  />
                    <label>Description</label>
                    <Input type="text" placeholder="Enter the Coupon Description" name="description" />
                    <label>Amount</label>
                    <Input type="text" placeholder="Enter the Discount Percentage" name="amount" />
                    <Button  mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                    </Flex> 
                </ModalBody>
                </ModalContent>
            </Modal>
        </div>


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
          </tbody>
        </table>
        </div>
    </>
  )
}

export default Discount
