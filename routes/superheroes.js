const express = require('express');
const router = express.Router();
const Hero = require('../models/superheroesData');
const mongoose = require('mongoose');

//ENDPOINTS

//GET ALL THE SUPERHEROES 
router.get("/" , async (req,res) => {
    try {
        const superhero = await Hero.find()
        res.json(superhero)
    } catch (err) {
        res.json({message : err.message})
    }
    
})

//ADD A SUPERHERO
router.post("/" , async(req,res) => {
    const hero = new Hero({
        Name : req.body.Name,
        Gender: req.body.Gender,
        Strength: req.body.Strength,
        Speed: req.body.Speed , 
        intelligence: req.body.intelligence
    });
   try {
       const savedHero = await hero.save();
       res.json(savedHero);
   } catch (err) {
       res.json({message : err})
   }
});

//GET A SUPERHERO BY ID

router.get('/:heroId' , async(req,res) =>{
    try {
        const hero = await Hero.findById(req.params.heroId);
    res.json(hero);
    if(hero == null){
        return res.status(404).json({message :'Hero dont exist'})
    }
    } catch (err) {
        res.json({message : err})
    }
    
})

//DELETE A SUPERHERO 
router.delete('/:heroId' , async(req,res) =>{
    try {
        await Hero.remove({_id :req.params.heroId});
    if(hero == null){
        return res.status(404).json({message :'Hero dont exist'})
    }
    } catch (err) {
        res.json({message : err})
    }
    
})

//UPDATE A SUPERHERO
router.patch('/:heroId' , async(req,res) =>{
    try {
        const hero = await Hero.updateOne(
        { _id: req.params.heroId },
        { $set: { Name : req.body.Name }});
        res.json(hero);
    if(hero == null){
        return res.status(404).json({message :'Hero dont exist'})
    }
    } catch (err) {
        res.json({
            message : err.message
        })
    }
    
})

module.exports = router ; 