const router = require('express').Router();
const { ArtComment, ArtPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

//find all art posts
// realtive path = /api/artpost
router.get('/', (req, res) => {
    ArtPost.findAll({
            attributes: ['id', 'art_text', 'art_title'],
            // order: [
            //     ['DESC']
            // ],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Comment,
                //     attributes: ['id', 'art_comment_text', 'art_post_id', 'user_id'],
                //     include: {
                //         model: User,
                //         attributes: ['username'],
                //     },
                // },
            ],
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//finds art post by id 
//relative path = /api/artpost/:id (works)
router.get('/:id', (req, res) => {
    ArtPost.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'art_text', 'art_title'],
            // include: [{
            //         model: User,
            //         attributes: ['username'],
            //     },
            //     {
            //         model: Comment,
			// 		attributes: ['id', 'art_comment_text', 'art_post_id', 'user_id'],
            //         include: {
            //             model: User,
            //             attributes: ['username'],
            //         },
            //     },
            // ],
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create art post
//relative path = /api/artpost (works)
router.post('/', withAuth, (req, res) => {
    console.log('creating');
    ArtPost.create({
            art_title: req.body.art_title,
            art_text: req.body.art_text,
            user_id: req.session.user_id
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//updates art post by id
//relative path = /api/artpost/:id (works)
router.put('/:id', withAuth, (req, res) => {
    ArtPost.update({
            art_title: req.body.art_title,
            art_text: req.body.art_text,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


//relative path = /api/artpost/:id (works)
router.delete('/:id', withAuth, (req, res) => {
    ArtPost.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: 'Post NOT found with this id'
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;