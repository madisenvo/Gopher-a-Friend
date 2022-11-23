const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const geoRoutes = require('./geoRoutes');
const artRoutes = require('./artRoutes');
const techRoutes = require('./techRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/geography', geoRoutes);
router.use('/art', artRoutes);
router.use('/technology', techRoutes);

module.exports = router;
