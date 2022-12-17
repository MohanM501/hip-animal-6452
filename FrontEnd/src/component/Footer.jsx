import { Box, Grid, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faStarHalf} from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faInstagram} from "@fortawesome/fontawesome-free-brands"
import { Link } from "react-router-dom"
import p6 from "../assets/p6.png"

 const Footer=()=>{
    return(
        <Box  mt="150px" bgColor='#fafafa' border="1px solid black" h="600px">
        <Box border="1px solid black" h="200px"><Text  ml="120px">
            <strong>
            Opt For RentoMojo In Gurgaon And Improve Your Quality Of Life
            </strong>
           
        </Text>
        <Text ml="120px" fontSize=" x-small"> RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from <br/>the store will cost you thousands of rupees. Instead, you can rent the same item from us at a very reasonable monthly fee.</Text>
        <br/>
        <Text ml="120px" fontSize=" x-small">We offer flexible monthly rental subscriptions. You can choose the rental term, depending on your budget and requirements. Our long-term subscriptions offer the most savings. When you rent any item from us, you<br/> stand to receive additional benefits like free relocation, damage waiver, and free maintenance.</Text>
        <br/>
        <Text ml="120px" fontSize=" x-small">It’s very convenient to rent from us. Simply visit our website, select the items you want, set the rental term, add to your cart, and check out. After we process your order, our team will deliver the item to your <br/>neighborhood or sector in Gurgaon. We provide free delivery to all sectors or locations in Gurgaon, including Sector 50, Sector 70, Manesar, Behrampur, Pataudi, and Daulatabad.</Text>
        <Text ml="120px" fontSize=" x-small">Read More >  </Text>
        </Box>
            <Box border="1px solid black" h="350px" width={{base:"60%",md:'50%',lg:'80%'}} margin='auto' display={{base:"block",md:"block",lg:'flex'}}  justifyContent='space-between' pt="30px">
            <Grid templateColumns="repeat(4,1fr)" justifyContent="sb">
            {/* <Box mb={{base:"50px",md:"50px"}}> */}
                
                <Box border="1px solid black" h="350px" >
                    <FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>RENTOMOJO</Heading><br></br><br/>
                    <Link><Text  fontSize={11}>About Us</Text></Link><br/>
                    <Link><Text fontSize={11}>Culture</Text></Link><br/>
                    <Link><Text fontSize={11}>Investors</Text></Link><br/>
                    <Link><Text fontSize={11}>Careers</Text></Link><br/>
                    <Link><Text fontSize={11}>Contact</Text></Link><br/>
                    <Link><Text fontSize={11}>Our Benefits</Text></Link><br/>
                    <Link><Text fontSize={11}>Sitemap</Text></Link>

                </Box>
               <Box border="1px solid black" h="350px" ml="120px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>INFORMATION</Heading><br></br><br/>
                    <Link><Text fontSize={11}>Blog</Text></Link><br/>
                    <Link><Text fontSize={11}>FAQs</Text></Link><br/>
                    <Link><Text fontSize={11}>Documents Required</Text></Link><br/>
                    </Box>
                
                <Box  border="1px solid black" h="350px" ml="120px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>POLICIES</Heading><br></br><br/>
                    <Link><Text fontSize={11}>Shipping Policy</Text></Link><br/>
                    <Link><Text fontSize={11}>Cancellation & Return</Text></Link><br/>
                    <Link><Text fontSize={11}>Privacy Policy</Text></Link><br/>
                    <Link><Text fontSize={11}>Rental Terms & Conditions</Text></Link><br/>
                    <Link><Text fontSize={11}>Referral Terms & Conditions</Text></Link><br/>
                    </Box>
                
                <Box   border="1px solid black" h="350px" w='200px' ml="120px"><FontAwesomeIcon ></FontAwesomeIcon><Heading display='inline' fontSize={14}>NEED HELP ?</Heading><br></br><br/>
                    <Link><Text  border="1px solid black" borderRadius='6px' m='center' h="35px" pt='8px' pl='16px'  fontSize={11}>Chat with us (9AM - 6PM)</Text></Link><br/>
                    <Link><Text pb='10px'  pl='16px' fontSize={11}>jo@rentomojo.com</Text></Link><br/>
                    
                    <Link><Text fontSize={13}><strong>DOWNLOAD APP</strong></Text></Link></Box>
                
               
                
                   
                
                
              
                
            {/* </Box> */}
            </Grid>


            <div class="container my-5">

  <footer class="bg-light text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #3b5998;"
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #55acee;"
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #dd4b39;"
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #ac2bac;"
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #0082ca;"
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <!-- Github -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #333333;"
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
  
</div>
                
                
            </Box>
        </Box>
    )
}
export default Footer