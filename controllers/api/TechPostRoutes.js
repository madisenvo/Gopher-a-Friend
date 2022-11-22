const router = require('express').Router();
const { TechComment, TechPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    TechPost.findAll({
            attributes: ['id', 'tech_text', 'tech_title'],
            order: [
                ['DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'art_comment_text', 'tech_post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


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
                {
                    model: Comment,
					attributes: ['id', 'tech_comment_text', 'tech_post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
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