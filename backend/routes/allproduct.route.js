const {Router} = require("express");
const {AllproductModel} = require("../models/Allproduct.model")
const allproductRoute = Router();

allproductRoute.get("/", async(req,res)=>{
    try{
        let query = req.query;
        let size = query.size || 9;
        let page = query.page || 1;

        const data = await AllproductModel.find(query).limit(size).skip((page-1)*size);
        res.send(data);
    }
    catch(err){
        console.log("err",err);
    }
    
})

allproductRoute.post("/post", async(req,res)=>{
    try{
        let payload = req.body;
        const data = await AllproductModel.insertMany([payload]);
        res.send(data);
    }
    catch(err){
        console.log("err",err);
    }
    
})

allproductRoute.patch("/patch/:id", async(req,res)=>{
    let ids = req.params.id
    let payload = req.body;
    const data = await AllproductModel.findByIdAndUpdate({_id:ids},payload)
    res.send(data)
})

allproductRoute.delete("/delete/:id", async(req,res)=>{
    let ids = req.params.id
    const data = await AllproductModel.findByIdAndDelete({_id:ids})
    res.send(data)
})

module.exports = {allproductRoute}