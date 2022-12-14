
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//render homepage (works)
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route (works)
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//works
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// sign up page creates login otherwise redirect to home
router.get('/signup', (req, res) => {
	if (req.session.logged_in) {
    console.log(req.session.logged_in);
	res.redirect('/');
	return;
	}

	res.render('signup');
});

module.exports = router;
