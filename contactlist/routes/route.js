//Importing modules
const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// For localhost/:1 Failed to load http://localhost:3000/api/contacts: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:4200' is therefore not allowed access

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//To retrive contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
});

//To Add contact
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone, 

    })

    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:'Filed while adding contact'});
        }else{
            res.json({msg:'Conatct Added Successfuly'});
        }
    })
});
//To Delete contact
router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id},(err,result)=>
{
    if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
});

//To Update contact
router.put('/contacts/:id',(req,res,next)=>{
    res.send('Retrive contacts list');
});

module.exports = router;