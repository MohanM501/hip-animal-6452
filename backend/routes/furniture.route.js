const {Router} = require("express");
const {FurnitureModel} = require("../models/Furniture.model")
const furnitureRoute = Router();

furnitureRoute.get("/", async(req,res)=>{
    let query = req.query;
    const data = await FurnitureModel.find(query);
    res.send(data);
})

module.exports = {furnitureRoute};