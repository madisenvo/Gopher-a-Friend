const router = require('express').Router();

const apiRoutes = require('./api');
const homeroutes = require('./homeroutes');
const geodashboard = require('./geodashboard');
const artdashboard = require('./artdashboard');
const techdashboard = require('./techdashboard');

router.use('/', homeroutes);
router.use('/api', apiRoutes);
router.use('/geography', geodashboard);
router.use('/art', artdashboard);
router.use('/technology', techdashboard);

module.exports = router;
