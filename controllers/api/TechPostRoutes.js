const router = require('express').Router();
const { TechComment, TechPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

//find all tech posts
// realtive path = /api/techpost
router.get('/', (req, res) => {
    TechPost.findAll({
            attributes: ['id', 'tech_text', 'tech_title'],
            // order: [
            //     ['DESC']
            // ],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Comment,
                //     attributes: ['id', 'art_comment_text', 'geo_post_id', 'user_id'],
                //     include: {
                //         model: User,
                //         attributes: ['username'],
                //     },
                // },
            ],
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//finds tech post by id 
//relative path = /api/techpost/:id (works)
router.get('/:id', (req, res) => {
    TechPost.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'tech_text', 'tech_title'],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Comment,
				// 	attributes: ['id', 'geo_comment_text', 'geo_post_id', 'user_id'],
                //     include: {
                //         model: User,
                //         attributes: ['username'],
                //     },
                // },
            ],
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create tech post
//relative path = /api/techpost (works)
router.post('/', withAuth, (req, res) => {
    console.log('creating');
    TechPost.create({
            tech_title: req.body.tech_title,
            tech_text: req.body.tech_text,
            user_id: req.session.user_id
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


//update techpost by id
//relative path = /api/techpost/:id (works)
router.put('/:id', withAuth, (req, res) => {
    TechPost.update({
            tech_title: req.body.tech_title,
            tech_text: req.body.tech_text,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


//delete tech post by id
//relative path = /api/techpost/:id (works)
router.delete('/:id', withAuth, (req, res) => {
    TechPost.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;