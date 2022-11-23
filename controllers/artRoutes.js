const router = require('express').Router();
const sequelize = require('../config/connection');
const { ArtPost, ArtComment, User} = require('../models');


router.get('/', (req, res) => {
    ArtPost.findAll({
            attributes: [
                'id',
                'art_title',
                'art_text',
            ],
            include: [{
                    model: ArtComment,
                    attributes: ['id', 'art_comment_text', 'art_post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
            ]
        })
        .then(postData => {
            const artPosts = postData.map(artPost => artPost.get({
                plain: true
            }));

            res.render('art', {
                artPosts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;