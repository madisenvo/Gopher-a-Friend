const router = require('express').Router();
// const sequelize = require('../config/connection');
const { ArtPost, User } = require('../models');

// see all posts
router.get('/', (req, res) => {
  ArtPost.findAll({
    attributes: ['id', 'art_text'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((postData) => {
      const artPosts = postData.map((artPost) =>
        artPost.get({
          plain: true,
        })
      );

      res.render('art', {
        artPosts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a post
//where clause needed in orhr sections
router.get('/update/:id', (req, res) => {
  ArtPost.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((postData) => {
      if (!postData) {
        res.status(404).json({
          message: 'Uh Oh! No post found.',
        });
        return;
      }

      const artPost = postData.get({
        plain: true,
      });

      res.render('editArt', {
        artPost,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
