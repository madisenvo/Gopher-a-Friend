const router = require('express').Router();
const { ArtComment } = require('../../models');
// const withAuth = require('../../utils/auth');


//post new comment
//realtive path = api/ArtComment/
router.post('/', async (req, res) => {
try {
    const newArtComment = await ArtComment.create({
    ...req.body,
    user_id: req.session.user_id,
    });
    res.json(newArtComment);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;