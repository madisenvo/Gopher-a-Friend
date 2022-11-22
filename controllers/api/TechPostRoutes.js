const router = require('express').Router();
const { GeoComment, GeoPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    GeoPost.findAll({
            attributes: ['id', 'geo_text', 'geo_title'],
            order: [
                ['DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'art_comment_text', 'geo_post_id', 'user_id'],
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
    GeoPost.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'geo_text', 'geo_title'],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
					attributes: ['id', 'geo_comment_text', 'geo_post_id', 'user_id'],
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
    GeoPost.create({
            geo_title: req.body.geo_title,
            geo_text: req.body.geo_text,
            user_id: req.session.user_id
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



router.put('/:id', withAuth, (req, res) => {
    GeoPost.update({
            geo_title: req.body.geo_title,
            geo_text: req.body.geo_text,
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
    GeoPost.destroy({
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