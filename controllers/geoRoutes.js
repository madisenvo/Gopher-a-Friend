const router = require('express').Router();
const sequelize = require('../config/connection');
const { GeoPost, GeoComment, User} = require('../models');


router.get('/', (req, res) => {
    GeoPost.findAll({
            attributes: [
                'id',
                'geo_title',
                'geo_text',
            ],
            include: [{
                    model: GeoComment,
                    attributes: ['id', 'geo_comment_text', 'geo_post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
            ]
        })
        .then(postData => {
            const geoPosts = postData.map(geoPost => geoPost.get({
                plain: true
            }));

            res.render('geography', {
                geoPosts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;