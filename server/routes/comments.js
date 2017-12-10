const express = require('express');
const router = express.Router();

const db = require('../models');

const Users = db.Users;
const Events = db.Events;
const Photos = db.Photos;
const Likes = db.Likes;
const Comments = db.Comments;

router.get('/photo/:photoid', (req, res) => {
  let {photoid} = req.params;

  console.log('this is photoid', photoid);

  return Comments.findAll({where: {photo_id: photoid}})
  .then(comments => {
    console.log('these are the comments coming back', comments);
    res.json(comments);
  })
  .catch(error => {
    console.log('an error occurred on get api/comments/');
  });
});


router.post('/', (req, res) => {
  let {userid, photoid, body} = req.body;

  Comments.create({
    user_id: userid,
    photo_id: photoid,
    body: body
  })
  .then(comment => {
    console.log('comment coming back from post to api/likes', comment);
    res.json(comment);
  })
  .catch(error => {
    console.log('an error occurred on post to api/comments');
  });
});


module.exports = router;