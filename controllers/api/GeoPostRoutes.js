const router = require('express').Router();
const { GeoComment, GeoPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

//find all geo posts
//realtive path = /api/geopost (works)
router.get('/', (req, res) => {
    GeoPost.findAll({
            attributes: ['id', 'geo_text', 'geo_title'],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: GeoComment,
                    attributes: ["id", "geo_comment_text", "geo_post_id", "user_id"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


//get geo post by id
//relative path = /api/geopost/:id (works)
router.get("/:id", (req, res) => {
    GeoPost.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "geo_text", "geo_title"],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: GeoComment,
                    attributes: ["id", "geo_comment_text", "geo_post_id", "user_id"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "Post NOT found with this id"
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


//create geo post
//relative path = /api/geopost (works)
router.post("/", withAuth, (req, res) => {
    console.log("creating");
    GeoPost.create({
            geo_title: req.body.geo_title,
            geo_text: req.body.geo_text,
            user_id: req.session.user_id
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update geopost by id
//relative path = /api/geopost/:id (works)
router.put("/:id", withAuth, (req, res) => {
    GeoPost.update({
            geo_title: req.body.geo_title,
            geo_text: req.body.geo_text,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "Post NOT found with this id"
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

//delete art post by id
//relative path = /api/geopost/:id (works)
router.delete("/:id", withAuth, (req, res) => {
    GeoPost.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "Post NOT found with this id"
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