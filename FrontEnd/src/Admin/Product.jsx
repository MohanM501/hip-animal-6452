import React from 'react'
import "./common.css"
import {Box,
  Button, 
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
  useDisclosure
} from '@chakra-ui/react';


function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <div id="products_page" className="page active">
        <Flex mb="30px" justifyContent="space-between" alignItems="center" >
          <h4>Products</h4>
          <Box>
          <Button bg="white" border="1px solid grey"  onClick={onOpen}>+ Add Product</Button>
          <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add Product Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    <Flex direction="column" gap="10px" mt="50px">
                    <label>Product Name</label>
                    <Input type="text" placeholder="Add Product Name" name="productName"  />
                    <label>URL</label>
                    <Input type="url" placeholder="Add Image URL" name="image" />
                    <label>Product Price</label>
                    <Input type="text" placeholder="Add Product Price" name="price" />
                    <label>Brand Name</label>
                    <Input type="text"  placeholder="Add Brand Name" name="brand" />
                    <label>Quantity</label>
                    <Input type="number" placeholder="Add Quantity"  name='quantity' />
                    <label>Description</label>
                    <Input mb="20px" type="text" placeholder="Add Description" name="category" />
                    <Button  mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                    </Flex> 
                </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
        </Flex>

        <div className="action_div">
          <div>
            <Button  bg="white" border="1px solid grey" mr="10px" >All</Button>
            <Button  bg="white" border="1px solid grey" mr="10px"  >Electronics</Button>
            <Button  bg="white" border="1px solid grey"   >Furniture</Button>
          </div>

          <Flex gap="10px">
            <Select placeholder='Filter By'>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </Select>

            <Select placeholder='Sort by'>
                <option value='desc'>Low To High</option>
                <option value='asc'>High To Low</option>
            </Select>
          </Flex>
        </div>


        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Inventory</th>
              <th>Price</th>
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

export default Product
