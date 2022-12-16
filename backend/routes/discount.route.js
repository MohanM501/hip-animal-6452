const {Router} = require("express");
const {DiscuntModel} = require("../models/Discunt.model.js")
const discuntRoute = Router();

discuntRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await DiscuntModel.find(query);
    res.send(data);
})

discuntRoute.get("/search/:code",(req,res)=>{
    const regex = new RegExp(req.params.code, "i");
    DiscuntModel.find({code:regex}).then((result)=>{
        res.status(200).json(result);
    })
})

discuntRoute.post("/create", async(req,res)=>{
    let payload = req.body;
    try{
        const data = await DiscuntModel.insertMany([payload]);
        res.send(data);
    }
    catch(err){
     console.log("err",err);
     res.send({"err": "Something went wrong"})
    }
})

discuntRoute.patch("/patch/:id", async(req,res)=>{
    try{
      const ids = req.params.id
      const payload = req.body
      const latest_data = await DiscuntModel.findByIdAndUpdate({_id:ids},payload)
      res.send("discount data has updatet")
    }
    catch(err){
        console.log("err",err)
    }
})

discuntRoute.delete("/delete/:id", async(req,res)=>{
    try{
        const ids = req.params.id
      const latest_data = await DiscuntModel.findByIdAndDelete({_id:ids})
      res.send("discount data has deleted");
    }
    catch(err){
      console.log("err",err);
    }
})

module.exports = {discuntRoute}