const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;

// TODO: add any api routes we create (comments, posts, etc)