const router = require('express').Router();
const userRoutes = require('./userRoutes');

//Geography Routes
const GeoPostRoutes = require('./GeoPostRoutes');
const GeoCommentRoutes = require('./GeoCommentRoutes');

//Tech Routes
const TechPostRoutes = require('./TechPostRoutes');
const TechCommentRoutes = require('./TechCommentRoutes');

//Art Routes
const ArtPostRoutes = require('./ArtPostRoutes');
const ArtCommentRoutes = require('./ArtCommentRoutes');

//User model for routes
router.use('/user', userRoutes);

//Use Geo models for routes
router.use('/geopost', GeoPostRoutes);
router.use('/geocomment', GeoCommentRoutes);

//Tech model for routes
router.use('/techpost', TechPostRoutes);
router.use('/techcomment', TechCommentRoutes);

//Art model for routes
router.use('/artpost', ArtPostRoutes);
router.use('/artcomment', ArtCommentRoutes);




module.exports = router;

// TODO: add any api routes we create (comments, posts, etc)