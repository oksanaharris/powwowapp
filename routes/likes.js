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
  //this includes artworks and users
  return Likes.findAll({ include: [{ all: true }]})
  .then(likes => {
    console.log('these are the likes coming back', likes);
    res.json(likes);
  })
  .catch(error => {
    console.log('an error occurred on get api/likes/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Likes.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(like => {
    console.log('this is the like coming back', like);
    res.json(like);
  })
  .catch(error => {
    console.log('an error occurred on get api/likes/:id');
  });
});


router.post('/', (req, res) => {
  let {artwork_id, user_id, liked} = req.body;

  return Likes.create({
    artwork_id: artwork_id,
    user_id: user_id,
    liked: liked
  })
  .then(like => {
    console.log('comment coming back from post to api/likes', like);
    res.json(like);
  })
  .catch(error => {
    console.log('an error occurred on post to api/likes');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {artwork_id, user_id, liked} = req.body;

  return Likes.findOne({where : {id: id}})
  .then(like => {
    return like.update({
      artwork_id: artwork_id,
      user_id: user_id,
      liked: liked
    });
  })
  .then(result => {
    console.log('an update made to like with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/likes/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Likes.findOne({where: {id: id}})
  .then(like => {
    if(!like){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return like.destroy();
  })
  .then(result => {
    console.log('this is what we get back from delete to api/likes/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/likes/:id for id ', id);
  });
});


module.exports = router;