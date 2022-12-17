import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

const  FLutterSlider=({slideval})=> {
    // const dispatch=useDispatch();
    // const [searchParams,setsearchParams]=useSearchParams();
    const [sliderValue, setSliderValue] = React.useState(0)
    const [showTooltip, setShowTooltip] = React.useState(false)
    // console.log("val",sliderValue)
    const val=sliderValue
    // console.log(val)
    slideval(val)
   
//    useEffect(()=>{
//     setsearchParams(sliderValue)
//     },[setsearchParams])
    
    return (
    <div>
    <Slider
        id='slider'
        defaultValue={100}
        min={0}
        max={100}
        colorScheme='teal'
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(false)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
          3+
        </SliderMark>
        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
          6+
        </SliderMark>
        <SliderMark value={90} mt='1' ml='-2.5' fontSize='sm'>
          12+
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