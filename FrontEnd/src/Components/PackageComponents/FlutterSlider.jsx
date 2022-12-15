import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import AllFurniture from "./AllFurniture"
const  FLutterSlider=()=> {
    // const dispatch=useDispatch();
    const [sliderValue, setSliderValue] = React.useState(0)
    const [showTooltip, setShowTooltip] = React.useState(false)
    console.log("val",sliderValue)
    const val=sliderValue
    
    return (
    <div>
            
            {/* <AllFurniture val={val} /> */}
        
      <Slider
        id='slider'
        defaultValue={5}
        min={0}
        max={100}
        colorScheme='teal'
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(false)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
          1
        </SliderMark>
        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
          3
        </SliderMark>
        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
          6
        </SliderMark>
        <SliderTrack >
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
        
      </Slider>
      </div>
    )
  }

  export default FLutterSlider