import React from 'react'
import "./common.css"
import { Flex,Select,Input} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";

function Order() {
  return (
    <>
      <div id="products_page" className="page active">
        <Flex mb="30px" justifyContent="space-between" alignItems="center" >
          <h4>Order</h4>
        </Flex>

        <div className="action_div">
          <Flex border="1px solid grey" h="30px" p="3px" alignItems="center">
            <Input variant='unstyled' size='sm' placeholder="Search Order" />
            <button><AiOutlineSearch/></button>
          </Flex>

          <Flex gap="10px">
            <Select placeholder='Filter By'>
                <option value='499'>Less Than 499</option>
                <option value='999'>Less Than 999</option>
                <option value='1499'>Less Than 1499</option>
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
              <th>Order</th>
              <th>Customer</th>
              <th>Date Added</th>
              <th>Fulfillment</th>
              <th>Payment Status</th>
              <th>Total</th>
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

export default Order
