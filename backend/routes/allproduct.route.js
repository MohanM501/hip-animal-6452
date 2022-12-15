const {Router} = require("express");
const {AllproductModel} = require("../models/Allproduct.model")
const allproductRoute = Router();

allproductRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await AllproductModel.find(query);
    res.send(data);
})

module.exports = {allproductRoute}