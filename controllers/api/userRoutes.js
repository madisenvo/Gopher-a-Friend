const router = require('express').Router();
const { User } = require('../../models');


//create user route
//realtive path = /api/user (works)
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      username: req.body.username,
      grade: req.body.grade,
      animal: req.body.animal,
      color: req.body.color,
      food: req.body.food,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
		  req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//logs in user
//relative path = /api/user/login (works)
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    console.log("🚀 ~ file: userroutes.js ~ line 22 ~ router.post ~ userData", userData)

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//logs out user
//relative path = /api/user/logout (works)
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
