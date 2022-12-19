import { Box, Grid, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faStarHalf} from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faInstagram} from "@fortawesome/fontawesome-free-brands"
import { Link } from "react-router-dom"
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import p7 from "../assets/p7.png"


 const Footer=()=>{
    return(
        <Box paddingTop='60px' mt="30px" bgColor='#fafafa'  h="660px">
        <Box    h="200px"><Text  ml="120px">
            <strong>
            Opt For RentoMojo In Gurgaon And Improve Your Quality Of Life
            </strong>
           
        </Text>
        <Text ml="120px" fontSize=" x-small"> RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from <br/>the store will cost you thousands of rupees. Instead, you can rent the same item from us at a very reasonable monthly fee.</Text>
        <br/>
        <Text ml="120px" fontSize=" x-small">We offer flexible monthly rental subscriptions. You can choose the rental term, depending on your budget and requirements. Our long-term subscriptions offer the most savings. When you rent any item from us, you<br/> stand to receive additional benefits like free relocation, damage waiver, and free maintenance.</Text>
        <br/>
        <Text ml="120px" fontSize=" x-small">It’s very convenient to rent from us. Simply visit our website, select the items you want, set the rental term, add to your cart, and check out. After we process your order, our team will deliver the item to your <br/>neighborhood or sector in Gurgaon. We provide free delivery to all sectors or locations in Gurgaon, including Sector 50, Sector 70, Manesar, Behrampur, Pataudi, and Daulatabad.</Text>
        <Text ml="120px" fontSize=" x-small">Read More {">"} </Text>
        </Box>
            <Box  h="350px" width={{base:"60%",md:'50%',lg:'80%'}} margin='auto' display={{base:"block",md:"block",lg:'flex'}}  justifyContent='space-between' pt="30px">
            <Grid templateColumns="repeat(4,1fr)" justifyContent="sb">
            
                
                <Box  h="350px" >
                    <FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>RENTOMOJO</Heading><br></br><br/>
                    <Link><Text  fontSize={11}>About Us</Text></Link><br/>
                    <Link><Text fontSize={11}>Culture</Text></Link><br/>
                    <Link><Text fontSize={11}>Investors</Text></Link><br/>
                    <Link><Text fontSize={11}>Careers</Text></Link><br/>
                    <Link><Text fontSize={11}>Contact</Text></Link><br/>
                    <Link><Text fontSize={11}>Our Benefits</Text></Link><br/>
                    <Link><Text fontSize={11}>Sitemap</Text></Link>

                </Box>
               <Box  h="350px" ml="90px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>INFORMATION</Heading><br></br><br/>
                    <Link><Text fontSize={11}>Blog</Text></Link><br/>
                    <Link><Text fontSize={11}>FAQs</Text></Link><br/>
                    <Link><Text fontSize={11}>Documents Required</Text></Link><br/>
                    </Box>
                
                <Box  h="350px" ml="100px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>POLICIES</Heading><br></br><br/>
                    <Link><Text fontSize={11}>Shipping Policy</Text></Link><br/>
                    <Link><Text fontSize={11}>Cancellation & Return</Text></Link><br/>
                    <Link><Text fontSize={11}>Privacy Policy</Text></Link><br/>
                    <Link><Text fontSize={11}>Rental Terms & Conditions</Text></Link><br/>
                    <Link><Text fontSize={11}>Referral Terms & Conditions</Text></Link><br/>
                    </Box>
                
                <Box    h="350px" w='200px' ml="120px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>NEED HELP ?</Heading><br></br><br/>
                    <Link><Text border="1px solid black" borderRadius='6px' m='center' h="35px" pt='8px' pl='16px'  fontSize={11}>Chat with us (9AM - 6PM)</Text></Link><br/>
                    <Link><Text pb='10px'  pl='16px' fontSize={11}>jo@rentomojo.com</Text></Link><br/>
                    
                    <Link><Text ml='20px' fontSize={13}><strong>DOWNLOAD APP</strong></Text></Link>
                    <Link><Image  mr='80px' src={p7}/></Link>
                    <hr/>                   
                    </Box>
            
           

            </Grid>
            
           

           </Box> 
           <Box  ml="500px" mt='20px'  h='60px' w='100%'> <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='facebook-f' /></MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='twitter' /></MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='google' /></MDBBtn>
         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='instagram' /></MDBBtn>
         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='linkedin-in' /></MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'><MDBIcon fab icon='github' /></MDBBtn>
         
    </section>
    </MDBContainer>
        </MDBFooter>

</Box>




        </Box>
        
        

            

    )
}
export default Footer