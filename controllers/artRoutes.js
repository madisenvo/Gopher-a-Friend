const router = require('express').Router();
const sequelize = require('../config/connection');
const { ArtPost, ArtComment, User} = require('../models');

// see all posts
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

// update a post
router.get('/update/:id', (req, res) => {
    ArtPost.findOne({
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
            if (!postData) {
                res.status(404).json({
                    message: 'Uh Oh! No post found.'
                });
                return;
            }

            const artPost = postData.get({
                plain: true
            });

            res.render('edit', {
                artPost,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;