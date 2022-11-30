const router = require('express').Router();
const userroutes = require('./userroutes');

//Geography Routes
const geopostroutes = require('./geopostroutes');


//Tech Routes
const techpostroutes = require('./techpostroutes');


//Art Routes
const artpostroutes = require('./artpostroutes');


//User model for routes
router.use('/user', userroutes);

//Use Geo models for routes
router.use('/geopost', geopostroutes);


//Tech model for routes
router.use('/techpost', techpostroutes);


//Art model for routes
router.use('/artpost', artpostroutes);


module.exports = router;


