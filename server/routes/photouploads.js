const express = require('express');
const router = express.Router();

const db = require('../models');

const Areas = db.Areas;
const Artists = db.Artists;
const Artworks = db.Artworks;
const Authorizations = db.Authorizations;
const Checkins = db.Checkins;
const Comments = db.Comments;
const PhotoUploads = db.PhotoUploads;
const Sites = db.Sites;
const Users = db.Users;


router.get('/', (req, res) => {
  //this includes artworks and users
  return PhotoUploads.findAll({ include: [{ all: true }], order: [['createdAt', 'DESC']]})
  .then(photoUploads => {
    console.log('these are the photoUploads coming back', photoUploads);
    res.json(photoUploads);
  })
  .catch(error => {
    console.log('an error occurred on get api/photoUploads/');
  });
});


router.get('/artwork/:artworkid', (req, res) => {
  let {artworkid} = req.params;

  console.log('hitting /api/photoUploads/artwork/:artworkid route');

  return PhotoUploads.findAll({where: {artwork_id: artworkid}, include: [{ all: true }]})
  .then(photoUploads => {
    console.log('these are the photoUploads coming back from /photoUploads/artwork/:artworkid', photoUploads);
    res.json(photoUploads);
  })
  .catch(error => {
    console.log('an error occurred on get api/photoUploads/artwork/:artworkid');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return PhotoUploads.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(photoUpload => {
    console.log('this is the photoUpload coming back', photoUpload);
    res.json(photoUpload);
  })
  .catch(error => {
    console.log('an error occurred on get api/photoUploads/:id');
  });
});


router.post('/', (req, res) => {
  let {artwork_id, user_id, body} = req.body;
  console.log('this is req.body.artwork_id', artwork_id);
  console.log('this is req.body.user_id', user_id);
  console.log('this is req.body.body', body);

  return PhotoUploads.create({
    artwork_id: artwork_id,
    user_id: user_id,
    body: body
  })
  .then(photoUpload => {
    console.log('photoUpload coming back from post to api/photoUploads', photoUpload);
    res.json(photoUpload);
  })
  .catch(error => {
    console.log('an error occurred on post to api/photoUploads');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {artwork_id, user_id, body} = req.body;

  return PhotoUploads.findOne({where : {id: id}})
  .then(photoUpload => {
    return photoUpload.update({
      artwork_id: artwork_id,
      user_id: user_id,
      body: body
    });
  })
  .then(result => {
    console.log('an update made to photoUpload with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/photoUploads/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return PhotoUploads.findOne({where: {id: id}})
  .then(photoUpload => {
    if(!photoUpload){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return photoUpload.destroy();
  })
  .then(result => {
    console.log('this is what we get back from delete to api/photoUploads/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/photoUploads/:id for id ', id);
  });
});


module.exports = router;