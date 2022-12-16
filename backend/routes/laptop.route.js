const {Router} = require("express");
const {LaptopModel} = require("../models/Laptop.model")
const laptopRoute = Router();

laptopRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await LaptopModel.find(query);
    res.send(data);
})

module.exports = {laptopRoute};