const router = require('express').Router();
const { GeoComment } = require('../../models');
// const withAuth = require('../../utils/auth');


//post new comment
//realtive path = api/GeoComment/
router.post('/', async (req, res) => {
try {
    const newGeoComment = await GeoComment.create({
    ...req.body,
    user_id: req.session.user_id,
    });
    res.json(newGeoComment);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;