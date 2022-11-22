const router = require('express').Router();
const { TechComment } = require('../../models');
// const withAuth = require('../../utils/auth');


//post new comment
//realtive path = api/TechComment/
router.post('/', async (req, res) => {
try {
    const newTechComment = await TechComment.create({
    ...req.body,
    user_id: req.session.user_id,
    });
    res.json(newTechComment);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;