const router = require('express').Router();
const { TechComment, TechPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    TechPost.findAll({
            attributes: ['id', 'tech_text', 'tech_title'],
            include: [{
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        .then((postData) => res.json(postData))
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
            ],
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


router.post('/', withAuth, (req, res) => {
    console.log('creating');
    TechPost.create({
            tech_title: req.body.tech_title,
            tech_text: req.body.tech_text,
            user_id: req.session.user_id
        })
        .then((postData) => res.json(postData))
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



router.delete('/:id', withAuth, (req, res) => {
    TechPost.destroy({
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