const router = require('express').Router();
const { ArtComment } = require('../../models');
const withAuth = require('../../utils/auth');


//get all comments
//realtive path = api/artcomment/
router.get("/", (req, res) => {
    ArtComment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get all comments
//realtive path = api/artcomment/
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        ArtComment.create({
                art_comment_text: req.body.art_comment_text,
                art_post_id: req.body.art_post_id,
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