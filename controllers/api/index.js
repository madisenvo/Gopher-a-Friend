const router = require('express').Router();
const userRoutes = require('./userRoutes');

//Geography Routes
const geoPostRoutes = require('./geoPostRoutes');


//Tech Routes
const techPostRoutes = require('./techPostRoutes');


//Art Routes
const artPostRoutes = require('./artPostRoutes');


//User model for routes
router.use('/user', userRoutes);

//Use Geo models for routes
router.use('/geopost', geoPostRoutes);


//Tech model for routes
router.use('/techpost', techPostRoutes);


//Art model for routes
router.use('/artpost', artPostRoutes);


module.exports = router;


