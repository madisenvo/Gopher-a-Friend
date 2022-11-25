const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const geoDashboard = require('./geoDashboard');
const artDashboard = require('./artDashboard');
const techDashboard = require('./techDashboard');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/geography', geoDashboard);
router.use('/art', artDashboard);
router.use('/technology', techDashboard);

module.exports = router;
