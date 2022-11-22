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
router.use('/GeoPost', GeoPostRoutes);
router.use('/GeoComment', GeoCommentRoutes);

//Tech model for routes
router.use('/TechPost', TechPostRoutes);
router.use('/TechComment', TechCommentRoutes);

//Art model for routes
router.use('/ArtPost', ArtPostRoutes);
router.use('/ArtComment', ArtCommentRoutes);




module.exports = router;

// TODO: add any api routes we create (comments, posts, etc)