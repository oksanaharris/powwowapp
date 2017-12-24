const express = require('express');
const router = express.Router();

const db = require('../models');

const Areas = db.Areas;
const Artists = db.Artists;
const Artworks = db.Artworks;
const Authorizations = db.Authorizations;
const Checkins = db.Checkins;
const Stars = db.Stars;
const Sites = db.Sites;
const Users = db.Users;
const Likes = db.Likes;


router.get('/', (req, res) => {
  //this includes artworks and users
  return Stars.findAll({ include: [{ all: true }]})
  .then(stars => {
    console.log('these are the stars coming back', stars);
    res.json(stars);
  })
  .catch(error => {
    console.log('an error occurred on get api/stars/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Stars.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(star => {
    console.log('this is the star coming back', star);
    res.json(star);
  })
  .catch(error => {
    console.log('an error occurred on get api/stars/:id');
  });
});


router.post('/', (req, res) => {
  let {artwork_id, user_id, starred} = req.body;

  console.log('req body from post to api/stars', req.body);

  return Stars.create({
    artwork_id: artwork_id,
    user_id: user_id,
    starred: starred
  })
  .then(star => {
    console.log('comment coming back from post to api/stars', star);
    res.json(star);
  })
  .catch(error => {
    console.log('an error occurred on post to api/stars');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {artwork_id, user_id, starred} = req.body;

  return Stars.findOne({where : {id: id}})
  .then(star => {
    return star.update({
      artwork_id: artwork_id,
      user_id: user_id,
      starred: starred
    });
  })
  .then(result => {
    console.log('an update made to star with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/stars/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Stars.findOne({where: {id: id}})
  .then(star => {
    if(!star){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return star.destroy();
  })
  .then(result => {
    console.log('this is what we get back from delete to api/stars/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/stars/:id for id ', id);
  });
});


module.exports = router;