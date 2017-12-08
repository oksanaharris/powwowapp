const express = require('express');
const router = express.Router();

const db = require('../models');

const Users = db.Users;
const Events = db.Events;
const Photos = db.Photos;
const Likes = db.Likes;
const Comments = db.Comments;

router.post('/', (req, res) => {
  let {userid, photoid} = req.body;

  Likes.create({
    user_id: userid,
    photo_id: photoid
  })
  .then(like => {
    console.log('like coming back from post to api/likes', like);
    res.json(like);
  })
  .catch(error => {
    console.log('an error occurred on post to api/likes');
  });
});


router.get('/photo/:photoid', (req, res) => {
  let {photoid} = req.params;

  Likes.findAll({where: {photo_id: photoid}})
  .then(likes => {
    res.json(likes);
  })
  .catch(error => {
    console.log('an error occurred on get api/likes/');
  });
});


module.exports = router;