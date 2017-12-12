const express = require('express');
const router = express.Router();

const db = require('../models');

const Areas = db.Areas;
const Artists = db.Artists;
const Artworks = db.Artworks;
const Authorizations = db.Authorizations;
const Checkins = db.Checkins;
const Likes = db.Likes;
const Sites = db.Sites;
const Users = db.Users;


router.get('/', (req, res) => {
  //this includes authorizations likes and checkins
  return Users.findAll({ include: [{ all: true }]})
  .then(users => {
    console.log('these are the users coming back', users);
    res.json(users);
  })
  .catch(error => {
    console.log('an error occurred on get api/users/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Users.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(user => {
    console.log('this is the user coming back', user);
    res.json(user);
  })
  .catch(error => {
    console.log('an error occurred on get api/users/:id');
  });
});


router.post('/register', (req, res) => {
  let {firstname, lastname, password, email} = req.body;
  //fields are TBD - pending password facebook OAuth strategy

  return Users.create({
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email
  })
  .then(user => {
    console.log('comment coming back from post to api/users', user);
    res.json(user);
  })
  .catch(error => {
    console.log('an error occurred on post to api/users');
  });
});

//move all of the password stuff to api/users/


router.post('/login', (req, res) => {
  let {firstname, lastname, password, email} = req.body;
  //fields are TBD - pending password facebook OAuth strategy

  return Users.create({
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email
  })
  .then(user => {
    console.log('comment coming back from post to api/users', user);
    res.json(user);
  })
  .catch(error => {
    console.log('an error occurred on post to api/users');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {firstname, lastname, password, email} = req.body;

  return Users.findOne({where : {id: id}})
  .then(user => {
    return user.update({
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email
    });
  })
  .then(result => {
    console.log('an update made to user with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/users/:id', error);
  });
});

//user deletion - paranoid delete? no delete option?
router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Users.findOne({where: {id: id}})
  .then(user => {
    if(!user){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return user.destroy();
  })
  .then(result => {
    console.log('this is what we get back from delete to api/users/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/users/:id for id ', id);
  });
});


module.exports = router;