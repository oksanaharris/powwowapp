const express = require('express');
const router = express.Router();

const db = require('../models');

const Users = db.Users;
const Events = db.Events;
const Photos = db.Photos;


router.post('/', (req, res) => {
  let {url, capture_time, event_id, user_id} = req.body;

  Photos.create({
    url,
    capture_time,
    event_id,
    user_id
  })
  .then(photo => {
    console.log('created photo coming back from post on api/photos/', photo);
    res.json(photo);
  })
  .catch(error => {
    console.log('an error occurred on post to api/photos/');
  });
});


router.get('/:photoid', (req, res) => {
  let {photoid} = req.params;

  Photos.findById(photoid)
  .then(photo => {
    res.json(photo);
  })
  .catch(error => {
    console.log('an error occurred on get to /api/photos/:photoid');
  });
});


module.exports = router;