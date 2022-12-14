import React from 'react'
import "./common.css"
import { Flex,Select,Input} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";

function Customer() {
  return (
    <>
      <div id="products_page" className="page active">
        <Flex mb="30px" justifyContent="space-between" alignItems="center" >
          <h4>Customers</h4>
        </Flex>

        <div className="action_div">
          <Flex border="1px solid grey" h="30px" p="3px" alignItems="center">
            <Input variant='unstyled' size='sm' placeholder="Search....." />
            <button><AiOutlineSearch/></button>
          </Flex>

          <Flex gap="10px">
            <Select placeholder='Sort by'>
                <option value='desc'>A to Z</option>
                <option value='asc'>Z to A</option>
            </Select>
          </Flex>
        </div>


        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
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

export default Customer
