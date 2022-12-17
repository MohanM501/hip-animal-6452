const {Router} = require("express");
const {MobileModel} = require("../models/Mobile.model")
const mobileRoute = Router();

mobileRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await MobileModel.find(query);
    res.send(data);
})

module.exports = {mobileRoute};