import React, { useEffect, useState } from 'react'
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
  useDisclosure,
  Spinner ,
  Text
} from '@chakra-ui/react';
import {useDispatch,useSelector} from "react-redux"
import {getAll,postData,deleteData} from "../Redux/AdminReducer/action"
import { DeleteIcon,EditIcon } from '@chakra-ui/icons'
import { useSearchParams } from "react-router-dom";
import axios from "axios"


const initData={
  price:"",
  currency:"INR",
  rating:Math.floor(Math.random() * 5) + 1,
  title:"",
  image:"",
  quantity:"",
  status:true,
  category:"",
}


function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.AdminReducer.products)
  const isLoading=useSelector((state)=>state.AdminReducer.isLoading)
  const [page,setPage]=useState(1)
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [formData,setFormData]=useState(initData)
  
  useEffect(()=>{
    const category = searchParams.getAll('category'||[]) 
      const queryParam = {
        params: { 
          category: category, 
          page:page
        }
      }
    dispatch(getAll(queryParam))
  },[searchParams,page])


  const handleChange=(e)=>{
    const {name,value}=e.target;
      setFormData({...formData,[name]:value})
  }

  const handleSubmit=()=>{
    dispatch(postData(formData))
    setFormData(initData)
  }


//.................... Quantity Edit request.....................//


  const handleReduce=(id,qty)=>{
    axios.patch(`https://victorious-shoe-frog.cyclic.app/products/patch/${id}`,{quantity :qty-1})
    .then((res)=>{
      dispatch(getAll())
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  const handleEditQ=(id)=>{
    let newQty=prompt("Enter New Quantity")
     if (newQty !== 0 || newQty !== null || newQty>1){
       axios.patch(`https://victorious-shoe-frog.cyclic.app/products/patch/${id}`,{quantity :+newQty})
       .then((res)=>{
        dispatch(getAll())
        alert("Inventory Updated");
       })
       .catch((err)=>{
        console.log(err)
       })
     }
  }

  const handleIncrease=(id,qty)=>{
    axios.patch(`https://victorious-shoe-frog.cyclic.app/products/patch/${id}`,{quantity :+qty+1})
    .then((res)=>{
      dispatch(getAll())
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  //.................... Price Edit request.....................//

  const handlePrice=(id)=>{
    let newPricec=prompt("Enter New Quantity")
    if (newPricec === 0) return;
    axios.patch(`https://victorious-shoe-frog.cyclic.app/products/patch/${id}`,{price :+newPricec})
    .then((res)=>{
     dispatch(getAll())
     alert("Inventory Updated");
    })
    .catch((err)=>{
     console.log(err)
    })
  }

//.................... Active & Deactive request.....................//


  const handleActive=(id,status)=>{
    axios.patch(`https://victorious-shoe-frog.cyclic.app/products/patch/${id}`,{status:!status})
    .then((res)=>{
      dispatch(getAll())
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  const handleDelete=(id)=>{
    dispatch(deleteData(id))
  }


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
                    <Input type="text" placeholder="Add Product Name" name="title" value={formData.title} onChange={handleChange} />
                    <label>URL</label>
                    <Input type="url" placeholder="Add Image URL" name="image" value={formData.image} onChange={handleChange}/>
                    <label>Product Price</label>
                    <Input type="text" placeholder="Add Product Price" name="price" value={formData.price} onChange={handleChange}/>
                    <label>Category</label>
                    <Select name="category" value={formData.category} onChange={handleChange} placeholder='Select option'>
                      <option  value='mobile'>Mobile</option>
                      <option  value='laptop'>Laptop</option>
                      <option  value='furniture'>Furniture</option>
                    </Select>
                    <label>Quantity</label>
                    <Input type="number" placeholder="Add Quantity"  name='quantity' value={formData.quantity} onChange={handleChange} />
                    <Button  mb="25px" color="white" bg="black" _hover={{bg:"grey"}} onClick={handleSubmit}>Add</Button>
                    </Flex> 
                </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
        </Flex>

        <div className="action_div">
          <div>
            <Button  bg="white" border="1px solid grey" mr="10px" onClick={()=>setSearchParams([])}   >All</Button>
            <Button  bg="white" border="1px solid grey" mr="10px" onClick={()=>setSearchParams({category:"mobile"})} >Mobile</Button>
            <Button  bg="white" border="1px solid grey" mr="10px" onClick={()=>setSearchParams({category:"laptop"})} >Laptop</Button>
            <Button  bg="white" border="1px solid grey" onClick={()=>setSearchParams({category:"furniture"})}  >Furniture</Button>
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

        <Flex gap="10px" mb="10px" justifyContent="flex-end">
          <Button size="sm" disabled={page===1} colorScheme='teal' variant='outline' onClick={()=>setPage(page-1)} >Prev</Button>
          <Text textAlign="center" border="1px solid grey" w="23px" fontSize="18px">{page}</Text>
          <Button size="sm" colorScheme='teal' variant='outline' onClick={()=>setPage(page+1)}>Next</Button>
        </Flex>

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
            {data&&data.map((ele)=>(
                    <tr key={ele._id}>
                        <td>
                            <img src={ele.image} alt="" />
                        </td>
                        <td>
                            <span>{ele.title}</span>
                        </td>
                        <td>
                            {<Flex fontSize="15px"  ml="30px" gap="7px"  alignItems="center">
                              <Box onClick={()=>handleReduce(ele._id,ele.quantity)} _hover={{cursor:"pointer"}}>-</Box> 
                              <Box onClick={()=>handleEditQ(ele._id)}>{ele.quantity}</Box>
                              <Box fontStyle="18px" _hover={{cursor:"pointer"}} onClick={()=>handleIncrease(ele._id,ele.quantity)}>+</Box></Flex>}
                        </td>
                        <td>
                            {<Flex onClick={()=>handlePrice(ele._id)} fontSize="15px" _hover={{cursor:"pointer"}} ml="30px" gap="7px" alignItems="center">{ele.price}<EditIcon /></Flex>}
                        </td>
                        <td>
                            {ele.status?
                            <Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Active</Box>
                            :<Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">InActive</Box>}
                        </td>
                        <td>
                            <DeleteIcon onClick={()=>handleDelete(ele._id)} w="25px" h="25px" _hover={{color:"red",cursor:"pointer"}} />
                        </td>
                    </tr>
                ))}
          </tbody>
        </table>
        <Box w="100%" mt="50px"  textAlign="center">
                {isLoading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  />}
        </Box>
        </div>
    </>
  )
}

export default Product
