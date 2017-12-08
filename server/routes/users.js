const express = require('express');
const router = express.Router();

const db = require('../models');

const Users = db.Users;


router.get('/:username', (req, res) => {
  console.log('running a get on /api/users/:id');

  let {username} = req.params;

  console.log('username is ', username);

  Users.findAll({where: {username: username}})
  .then(user => {
    if(!user || user.length === 0) {console.log('no users');}
    if(user.length > 1){console.log('more than one user');}

    return res.json(user[0]);

  })
  .catch(error => {
    console.log('an error occurred on get api/users/:username', error);
  });
});


router.get('/', (req, res) => {
  console.log('running a get on /api/users/');
  Users.findAll()
  .then(users => {
    console.log('this is what comes back from Users find all', users);
    return res.json(users);
  })
  .catch(error => {
    console.log('an error occurred on get api/users/', error);
  });
});


module.exports = router;