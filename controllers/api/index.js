const router = require('express').Router();
const userRoutes = require('./userRoutes');

//Geography Routes
const GeoPostRoutes = require('./GeoPostRoutes');


//Tech Routes
const TechPostRoutes = require('./TechPostRoutes');


//Art Routes
const ArtPostRoutes = require('./ArtPostRoutes');


//User model for routes
router.use('/user', userRoutes);

//Use Geo models for routes
router.use('/geopost', GeoPostRoutes);


//Tech model for routes
router.use('/techpost', TechPostRoutes);


//Art model for routes
router.use('/artpost', ArtPostRoutes);


module.exports = router;


