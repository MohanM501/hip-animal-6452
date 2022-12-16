const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const {authentication} = require('./middleware/authentication');
const {discuntRoute} = require("./routes/discount.route");
const {connection} = require('./config/db');
const {allproductRoute} = require("./routes/allproduct.route");
const {furnitureRoute} = require("./routes/furniture.route");
const {laptopRoute} = require("./routes/laptop.route");
const {mobileRoute} = require("./routes/mobile.route");
// const {womenRoute} = require('./routes/women.route')
// const {womenwishlistRoute} = require('./routes/womenwishlist.route');
// const { womencartRoute } = require('./routes/womencart.route');

const app = express();
app.use(express.json());
app.use(cors({
    origin : "*"
}))

app.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    const userPre = await UserModel.findOne({email})
  
    if(userPre?.email){
      res.send("Try login , already exist")
    }
    else{
      try{
  bcrypt.hash(password,4, async function(err,hash){
      const user = new UserModel({email,password:hash})
      await user.save()
      res.send({"message": "signup successfully"})
  })
      }
      catch(err){
        console.log("err",err)
        res.send("Something went wrong try again later")
      }
    }
  })
  
  app.post("/login", async (req, res)=>{
      const {email,password} = req.body;
  
      try{
       const user = await UserModel.find({email})
  
       if(user.length > 0){
          const hashed_pass = user[0].password;
          bcrypt.compare(password, hashed_pass, function(err,result){
              if(result){
                  const token = jwt.sign
                  ({"userID": user[0]._id}, 'hush')
                  res.send({"message": "login Successfully" , "token" : token})
              }
              else{
                  res.send("Login Failed")
              }
          })
       }
       else{
          res.send("Login Failed")
       }
      }
      catch(err){
          console.log("err",err)
          res.send("Something went worng, please try again later")
      }
  })

app.use("/discount", discuntRoute);
app.use("/products", allproductRoute);
app.use("/furnitures", furnitureRoute);
app.use("/laptop", laptopRoute);
app.use("/mobile", mobileRoute);
// app.use("/womendata", womenRoute)
// app.use("/womenwishlist", womenwishlistRoute)
// app.use("/womencart", womencartRoute);

app.get("/", (req, res) => {
    res.send("welcome to home page")
})

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log(`server is running on port ${process.env.port}`);


    }
    catch(err){

    }
})