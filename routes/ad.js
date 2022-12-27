const express = require('express');
const router = express.Router();
const requireLogin = require('../utility/requireLogin.js')
const mongoose = require('mongoose')
const db = require('../utility/db.js');
const Ad = require("../models/ad");
const ObjectId = require('mongoose').Types.ObjectId



router.post('/newAd', (req, res) => {
  const { title, price, description, photo } = req.body;

  if( !title ||!price || !description || !photo  ){
    return res.status(422).json({error:"Null fields are not allowed"})
  }
  const ad = new Ad({
    title, price, description, photo,
    owner: req.user || "", 
  })
  ad.save()
    .then(() => {
      res.json({message:"Saved successfully"})
    })
    .catch((error) => {
      console.log(error);
      res.status(422).send("Error");
    });

});


router.get("/ownerAds", async (req, res) => {
  
    try{
    const usersAds = await Ad.find({
      'owner': (ObjectId)(req.user._id), 
      'sold': false 
    }).populate("owner");
    res.json(usersAds);
    console.log("owner ads called, "+req.user._id)
}
catch (error){
    res.status(422).send(error);
}
 })

router.get("/allAds", async (req, res) => {
    try{
        const adsArray = await Ad.find({}).populate("owner");
        res.json(adsArray);
        console.log("all ads obtained")
    }
    catch (error){
        res.status(422).send(error);
    }
});



router.post("/oneAd", requireLogin,  async (req, res)=>{
  const { id } = req.body; 
  try
  {
       const theAd = await Ad.findOne({_id: id}).populate("owner");
      if (theAd)
      {
        res.json(theAd)
      }
      else
      {
        res.status(422).json({error:"No such ad exists"})
      }
  }
  catch (e) 
  {
    console.log(e)
    res.status(422).json({error:"Error"})
  }
  
})

module.exports = router;