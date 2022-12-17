import "./Home.css";
import { Box, Flex, Grid, GridItem ,Image, Text} from '@chakra-ui/react'
import React from 'react'
import Slider from "./Slider"
import { CenterMode } from "./CenterMode";

const Home = () => {
  return (
    
    <Box>
            <Slider/>


           <Grid templateColumns='repeat(6,1fr)' h="150px" w="90%"   mt="50px" ml="90px" gap="15px">
            <GridItem border="00.5px solid black" borderRadius="15px"  className='product' >
                <Image    mt="18%" ml="35%" h="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAZlBMVEX///8AAAD8/Pzp6elbW1sTExPx8fGIiIj4+PjMzMwtLS3l5eW2trbd3d1YWFjX19dGRkZwcHCcnJw7OzvBwcFLS0skJCSBgYGsrKxnZ2eVlZUNDQ0ZGRlhYWFTU1MfHx94eHg0NDQxOw9tAAAFKElEQVRoge2a6ZKrKhCA3YWIcY24ZDHv/5JHpCEqOjGJMfdW0X+mJqAf0AtIt2Fo0aJFixYtWrS8JFZg/ZCeU9M0af4TtpcnppAk9/aF23l16Mnuye3/Hqrc3guO8qTooU1WhlZYZk3/X5Hk6Ptwi4hlP5UB/BaUJ6EI8lVzDIgjVH4eWx0qK2hwyJcUEZDruSfcuOrvaThq98iFt5+vJFh4x9vilQ7AjySwScxVfiRjuw/I8caHcCk39AhPXdww5cNpWjzua5ML9K22GUJQXvn7bu3YuDAFUB2Nn7BICy3X8kNFdM4lg4wfTltRDuuSTTkobwvRpDy2UqwgvfLgcgfDO5WKaQcpd73bZRoCu/h45yHqmr6xSQQ1uJrLgmtYcptvEjXYR5SP7kCnM+2G4ILd1C8pIkzFstNcDB37Qg+R0j8HhWfpdIGsXFhJlq5URFSD6u50YttixylUs0IlmP2JKFaP6R2em1rqjCDOaGKKZ6K5Dc7QhRhlpoEfc0qFp0NAmELESJ5tETY47+JihT6fTdFGU6tCuOXhJ/bDaVsIrvIsONvC3a6KLqVgUPe9VrogchWuP5ipnV7Fa1fwMzDoLsIv6ovAdGLVJb2U68G8cNuNUlD/mWar+BcDRW0mh7Dgu17NPd91lMOPFfr88RvFAp61ETIuq/gOI3q4hSdPfjhvNCiiPCpkVFG3h6u7KeXe9iZpOev5Rm+1DQyhXjBHL3eEtUwXIRDnlEZ60ot8JtiHYHCu8fwDXgnqdgbbE67PYu6Dx97gG8zhAND4cyHBYLEarKXF1nDZ4rpzx0G/9/jdG+UQMqrEFt4DJ2AKNYWxxH5ncIdN+OzRqD7IIcx6hE2kj3d7Uc3dZjM+kygtpCJmmnEN8OIRNjblG8NA1o4O+0jsgJ0Md+it+f2p5AjTTOCTxxbfI+YxbUcG/wU+e013KoOvru5skoPluexjyPB34DMJhdeDxHDM24tvsMAjTtqDw/6O/H4IHX10zN+Xbxiu6Y7+35lvdfxR7zHfLn7I98reUX/Dl9HY+QHfy6tCnDuGrfvwUzgVudX0YLYPH0Kx+h2yH/9Szh5UduCXbBNaunfYgW9EylF4X/6fvTVf8zVf8zVf8zVf8zVf8zX/v8kPnueKvsmPGpY9ffbuWb4VLJRjvMIn05uttfz+Wqz6mI/ElzT98zZ0woc7FzP+mG+wNFd/i/FX2nLEH9yAb8JnWZzk0K6bv51f4M4lwZvx2RD+7A18S1z4nB12J/0h//iki8K34CLW4Xcu1hLfOK7Mf87mF5b5Acu6VqVctnk+T6A/43ugxXop7zjDtwvz9nivFal8K6rvPGnwtCbEFsmsa/28bEHyD9DVCvq06Ijf/QaOkakJ4zmJaihbULOKi/z+wssWuRH66OKJlI27IvsvBfs3GIKaYJ7ls9oASEmcHyBbFs+sNin56kiULcTL5UwPvigByx7lGQGBAd3pKmNSROagi6WiLsk3xX2vUJhNnGL62ztDyCueTG1mq+uG/OZRhYjyBJ5S7oBfFyRqDcxWKb7hfBSzyjs5PJkLrMhGBYGPor/JKsj4K/SLZFXmxqWA3bYOZUZDfY73385e+NX7tuVvQoISimgyKioiBnwUQua7iT+tOlsWUYfVRbJwxA9F1Dy8XW+2UkTFmemyNHeff4tSiJen9GszHwjEeObbHdgVFS6nFfvFVoIi/1EYCGFvh+LboViYwqqb7kJJxNelP1K8vLNsKb+tf9eiRYsWLVq0/C/lHyBqR/HFgveKAAAAAElFTkSuQmCC"/>
                <Text ml="30%">Packages</Text>
            </GridItem>

            <GridItem border="00.5px solid black" borderRadius="15px"   className='product'>
                <Image    mt="18%" ml="35%" h="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADq6up8fHy4uLisrKzx8fGenp7l5eVsbGwRERHt7e1bW1shISF6enqtra0WFhb5+fljY2NJSUk3NzdAQEAcHBxdXV1QUFDZ2dlycnLJycm7u7skJCTDw8OcnJwtLS2QkJCIiIja2tozMzNERESjnBVTAAADgklEQVR4nO3cfV+qMBjGcSUFxcjmQz6XVuf9v8XjPcyGeQJyu6Hz+X3/wxj3rgTFOdfpAAAAAAAAAAAAAAAAAAAAAAAAAAB+k1Vv3A9t3Fs1FW8z7GpZbBvIt1qq5ROzZ+2AL6r5xINuwAf1gN3uUjPg66nmeBXFoY3etou83EQv4LMt+L5RK/iWX/QvWvXMo/pJc7osBkrVDvoBO5215nlq/52RUrEPZi9VY5VaGyl1UCnlGkvZvkqpg+YV4dC7NuR1ba9SqUjeMzKVSnvdt6YzuY1KVS7E7FjpTqPQhb7aCxwJQyGhPyQMhYT+kDAUEvpDwlCaTLhZZ9+Okj1Oro3o1m3VXMJ48W1Hc7PLD5TxfYVWc7dVYwnNrEJXv/TN7Kq1ciI2lnBdravdWeEgk4qt3ptPOLAdmQ6/k5+Q7lW1so8sa7VqKmEidZOSJnYIeeg8YL/2KBtWumjVVEJ7kpa2kbEddxRJvphLS1vNj3v9OW81lVD6+lTaRoasp8725MuFeY3sNT9vtTvhmoRXkTAUEl5DwutIGAoJr/ldCeVzz+t5K/Q9zeddm/2KdFSrqz9gtkki8xSWyQe5d0z7SYnpca+9sy2tsrJGdq/dectOMjskvZAhN1U+zYc37QXKZ6p+ag1vGuRL9mjfdC5XgBmZ8dPp2NkuSwsq9in10Epqn/7g/1nMxxSWz5ExZlQwqGbkodWxdrTJL5ad74B2Eo3SdJYyW9uXspGTuqbtCXj6d5e/CddiR9S0p7L92510x+/UyK3/Q94iku74nXh2kEN6PeJt5M7R76wlOS3KR//0yOjkwusR5c750esRbyPvXfdej0hCbSSsj4TaSFgfCbWRsD4SaiNhfSTURsL6SKgtTMK01xrbufeEVScgavKbsB1fqxX5TVhlQq82nsMfJIzaI1BCr0e8TUrC2tqW8Om/T5h5TzhpWcJdmIR37eH/OmzPVJpPvOPXo7/wVbm114T53IBWmRi/CTv5slR2bttMpgzF9s4pMcFXwjL2d0dRLBOGZjZZ/rjnfGcyBTKfGGqk8DhUHYedV5o/YZJwWLL7rUgYAAk9I2EATSS0r9eRakK7PqPRSuhQS/hJOaHGjNO+bsKLhUtD/S7A1SuWDL1S66pYTmP5tLhYMvi6yQN3mWadhRpjd8HpBpYzBAAAAAAAAAAAAAAAAAAAAAAAAADU8xcW4UeKXbx+dAAAAABJRU5ErkJggg=="/>
                <Text ml="30%">furniture</Text>
            </GridItem>

           <GridItem border="00.5px solid black" borderRadius="15px"  className='product'>
                <Image    mt="18%" ml="35%" h="50px" src="data:image/png;base64,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"/>
                <Text ml="30%">Appliances</Text>
            </GridItem>

           <GridItem border="00.5px solid black" borderRadius="15px" className='product'>
                <Image    mt="18%" ml="35%" h="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8BAAIAAADV1dUHBQfl5ebq6us9PT06OjrGxsbPz89wcHBKSkpTUlO0tLTKysr09PRZWVmTk5OenZ4eHR4aGRrf399/f3+NjY11dXWqqqpCQkIrKyv5+fmzsrMkIyS/v780MzRlZWYZx9f5AAAFK0lEQVR4nO2aa3eiPBhFaxCnIwoIineL/v8f+XJJUGmnJfKcQNd79oeZRRbksA25EPr21p84SoP39VRN5FDT9XuQRrHA3fUmDleqRlCwUKxZhUNLxslG2q3luUkGdTyIt90XjuowmJ9/RPtpx6M/jGDuQM9I5kMIHp4ElTxPtV+GFQTotSQH6IzhPb64k0USzbOZJNk8ShbqMSR0K+g32cVdJKiBwE/UQ47b4eZ0D94i56t4e1c8AXM+sTO5SkXgqOgetQNHPZA1qdcMH3ZtFPFhhn2TOXOQNmt+z72DtAozzCjldTs/WH5N0G3w8Jo8V4PNzgSm3c5f/nO+W3arIDWKrnriROedzt3OT/5pmHSr4KyHbjV5/aZt8EwTdl5J+fOv6fzQXUwjdusWfUl12qZjE0qw0Zkd+0VPljotcJJWE+jMjh23Jx86LXeSVpPrzA8XYbHpEy7Xib4ZalxsaZgFjXKQdceMbi6WNdpQGcPsLxJjZEJdGOoVhprWhxfpt94W+s13qmxWUaKGf8B7be+jMIQ14FgM1S3AcFNjMUS9Q81GYwjbp6EhBhoKQkMQNBSEhiBoKAgNQdBQEBqCoKEgNARBQ0FoCIKGgtAQBA0FoSEIGgpCQxA0FISGIGgoCA1B0FAQGoKgoSA0BEFDQWgIgoaC0BAEDQWhIQgaCkJDEDQUhIYgaCgIDUHQUBAagqChIDQEQUNBaAiChoLQEAQNBaEhCBoKQkMQNBSEhiBoKAgNQdBQEBqCoKEgNARBQ0FoCIKGgtAQBA0FoSEIGgpCQxA0FISGIGgoCA1B0FAQGoKgoSA0BEFDQWgIgoaC0BAEDQWhIQgaCkJDEDQUhIYgaCgIDUHQUBAagqChIDQEQUNBaAiChoLQEAQNBaEhCBoKQkMQ/0vDGShqNhrD4wLDcSyGRTCIyRgMj9URDPVncMMc1oA14eCGb/EciRnEhjR0Aw0l6WN49qI88s4vXPk7DKObHj1ukfW1v8EwW9RTXPXvIrO8+hcYhvUErsx/od3l4zc81K03We1X07olD1bXj94wqqRW9f15q+rIqjOO3rBSujSHYXVsU8HYDZNSKH8o+FsqJhY1jN2w9Nk9lewsG3HkhlE5grbKyiKLnjhyw7LBtq2y7adm/ZaRG94Km/b8FxZlt+5VjNxwWdjMW2XzomzZvYpfYNjuc9F4DTNtaDESlk/ppVV2sXtKTajtevYVtOHEwrCcDoNWWWA3IepM2NbsI7Ex7B7mlVND3K7F5pHzdeY0/vnc/nzotLz7JZuiwfZPJfuiZNO9glxnfnS/pAdLndZ+7r7h0H6ZqF41LN4uAp1pMTb1INVpFk1Qtrt66HZJKWjTHhudmVpc8zqe6fXt4fEbsuplYh3G57dzHK6rI4th8WL6vovJomCi404WW0q5frW/Lq76LT/vfvH5pBMn1vf6GjvTiDbPjNfaxbBpjdQ0ocVCthe+CbS6zXj/sFe/txn1PeVyNqzY668xyu7LoZ8cyz2a6TGxutOZMnH7n08WImsyr5a/6izLMsvvqf61+T1dLNk0u0bRbj/pBaJ7lKteWHEyXw2V2iIXUvFWNUknYM5n/HtwMZPD/lIhUQ85zoaZmrCJLh0XSTTPZpJk8yhZqMcQy03y/hzu6cjv+E2C3Ra5uCJE8ql2ixWiHPnTTSCxWuJJ4h+VA8ki44j6k6SfOSi0YxkwQBe8EycbpGNR9yZxsnHxnWO4+jwyiLiVrMKh/SriKA3e11NJRTVdvwdpJKH3H20zayuOscQkAAAAAElFTkSuQmCC"/>
                <Text ml="30%">Electronics</Text>
            </GridItem>

           <GridItem border="00.5px solid black" borderRadius="15px" className='product' >
                <Image    mt="18%" ml="35%" h="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEzPKdzKo_GHJy8HzFlY4PDgiob46rrwtvA&usqp=CAU"/>
                <Text ml="30%">Fitness</Text>
            </GridItem>

           <GridItem border="00.5px solid black" borderRadius="15px"  className='product'>
                <Image    mt="18%" ml="35%" h="50px" src="data:image/png;base64,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"/>
                <Text ml="30%">WHF Essentials</Text>
            </GridItem>
           </Grid>

            <Grid mt="50px" bg="#fafafa" border="1px solid black" h="750px">
                <GridItem border="1px solid green" h="200px">
                    <Text border="1px solid red" paddingTop="40px" fontSize='xl'  textAlign='center' h="90px" w="200px" mt="90px" ml="90px" ><strong>You'll love to<br/>
take these home</strong></Text>

                </GridItem>

                
                <GridItem border="1px solid black" h="550px">

                {/* <CenterMode/> */}
                </GridItem>
            </Grid>




    


<Box border="1px solid black" h="800px" w="100%" mt="80px">
<Box border="1px solid black" h="120px" w="270px" mt="80px"><Text p="50px" fontSize="xl"><strong>There's more<br/>
to renting</strong></Text></Box>

<Grid templateColumns='repeat(3,1fr)' border="1px solid red" h="500px" w="100%"    mt="30px" gap="15px">
 
    <GridItem border="1px solid red" h="250px" pr='80px' >
        <Image mt="18%" ml="35%" border="1px solid black" h="50px"   src="https://cdn.iconscout.com/icon/premium/png-128-thumb/bed-1810992-1537291.png"/>
    </GridItem>

    <GridItem border="1px solid red" h="250px" >

    </GridItem>

    <GridItem border="1px solid red" h="250px" >

    </GridItem>

    <GridItem border="1px solid red" h="250px"  >

    </GridItem>

    <GridItem border="1px solid red" h="250px"  >

    </GridItem>

    <GridItem border="1px solid red" h="250px"  >

    </GridItem>
</Grid>
</Box>



            <Box>rohit</Box>
    </Box>
    
  )
}
  
export default Home