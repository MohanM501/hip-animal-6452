import React from 'react'
import {Box} from "@chakra-ui/react"
import bar from "./Assets/bar.png"
import recent from "./Assets/recent.png"

function Report() {
  return (
    <>
    <Box>
        <Box>
            <img src={bar} alt="bar" />
        </Box>
        <Box>
            <img src={recent} alt="recent" />
        </Box>
    </Box>
      
    </>
  )
}

export default Report
