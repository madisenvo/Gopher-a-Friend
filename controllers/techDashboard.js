const router = require('express').Router();
const sequelize = require('../config/connection');
const { TechPost, TechComment, User} = require('../models');

// see all posts
//relative path = /technology
router.get('/', (req, res) => {
    TechPost.findAll({
            attributes: [
                'id',
                'tech_title',
                'tech_text',
            ],
            include: [{
                    model: TechComment,
                    attributes: ['id', 'tech_comment_text', 'tech_post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
            ]
        })
        .then(postData => {
            const techPosts = postData.map(techPost => techPost.get({
                plain: true
            }));

            res.render('technology', {
                techPosts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a post
router.get('/update/:id', (req, res) => {
    TechPost.findOne({
        attributes: [
            'id',
            'tech_title',
            'tech_text',
        ],
        include: [{
                model: TechComment,
                attributes: ['id', 'tech_comment_text', 'tech_post_id', 'user_id'],
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

            const techPost = postData.get({
                plain: true
            });

            res.render('editTech', {
                techPost,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router;