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

  return Artists.findAll({ include: [{ all: true }], order: [['id', 'ASC']]})
  .then(artists => {
    // console.log('these are the artists coming back', artists);
    res.json(artists);
  })
  .catch(error => {
    console.log('an error occurred on get api/artists/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  //eager loading to get artworks belongong to this artist

  return Artists.findOne({where: {id: id}, include: [Artworks]})
  .then(artist => {
    // console.log('this is the artist coming back', artist);
    res.json(artist);
  })
  .catch(error => {
    console.log('an error occurred on get api/artists/:id');
  });
});


router.post('/', (req, res) => {
  let {name, bio, photourl, websiteurl, featured} = req.body;

  return Artists.create({
    name: name,
    bio: bio,
    photourl: photourl,
    websiteurl: websiteurl,
    featured: featured
  })
  .then(artist => {
    // console.log('comment coming back from post to api/artists', artist);
    res.json(artist);
  })
  .catch(error => {
    console.log('an error occurred on post to api/artists');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {name, bio, photourl, websiteurl, featured} = req.body;

  return Artists.findOne({where : {id: id}})
  .then(artist => {
    return artist.update({
      name: name,
      bio: bio,
      photourl: photourl,
      websiteurl: websiteurl,
      featured: featured
    });
  })
  .then(result => {
    // console.log('an update made to artist with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/artists/:id', error);
  });
});

router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Artists.findOne({where: {id: id}})
  .then(artist => {
    if(!artist){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return artist.destroy();
  })
  .then(result => {
    // console.log('this is what we get back from delete to api/artists/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/artists/:id for id ', id);
  });
});


module.exports = router;