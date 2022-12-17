const {Router} = require("express");
const {DiscuntModel} = require("../models/Discunt.model.js")
const discuntRoute = Router();

discuntRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await DiscuntModel.find(query);
    res.send(data);
})

discuntRoute.post("discount/create", async(req,res)=>{
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

module.exports = {discuntRoute}