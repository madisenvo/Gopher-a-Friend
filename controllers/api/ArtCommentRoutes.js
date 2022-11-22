const router = require('express').Router();
const { ArtComment } = require('../../models');


const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
    ArtComment.findAll()
        .then((artCommentData) => res.json(artCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        ArtComment.create({
                art_comment_text: req.body.art_comment_text,
                art_post_id: req.body.art_post_id,
                user_id: req.session.user_id
            })
            .then(artCommentData => res.json(artCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;