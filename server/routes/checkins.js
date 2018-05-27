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
  return Checkins.findAll({ include: [{ all: true }]})
  .then(checkins => {
    // console.log('these are the checkins coming back', checkins);
    res.json(checkins);
  })
  .catch(error => {
    console.log('an error occurred on get api/checkins/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Checkins.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(checkin => {
    // console.log('this is the checkin coming back', checkin);
    res.json(checkin);
  })
  .catch(error => {
    console.log('an error occurred on get api/checkins/:id');
  });
});


router.post('/', (req, res) => {
  let {artwork_id, user_id, checked_in} = req.body;

  return Checkins.create({
    artwork_id: artwork_id,
    user_id: user_id,
    checked_in: checked_in
  })
  .then(checkin => {
    // console.log('comment coming back from post to api/checkins', checkin);
    res.json(checkin);
  })
  .catch(error => {
    console.log('an error occurred on post to api/checkins');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {artwork_id, user_id, checked_in} = req.body;

  return Checkins.findOne({where : {id: id}})
  .then(checkin => {
    return checkin.update({
      artwork_id: artwork_id,
      user_id: user_id,
      checked_in: checked_in
    });
  })
  .then(result => {
    // console.log('an update made to checkin with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/checkins/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Checkins.findOne({where: {id: id}})
  .then(checkin => {
    if(!checkin){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return checkin.destroy();
  })
  .then(result => {
    // console.log('this is what we get back from delete to api/checkins/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/checkins/:id for id ', id);
  });
});

module.exports = router;