const router = require('express').Router();
const { TechComment } = require('../../models');
const withAuth = require('../../utils/auth');


//get all comments
//realtive path = api/TechComment/
router.get("/", (req, res) => {
    TechComment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get all comments
//realtive path = api/TechComment/
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        TechComment.create({
                tech_comment_text: req.body.tech_comment_text,
                tech_post_id: req.body.tech_post_id,
                user_id: req.session.user_id
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

module.exports = router;