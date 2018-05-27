const express = require('express');
const router = express.Router();

var sequelize = require('sequelize');

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

  return Artworks.findAll({ include: [{ all: true }], order: [['id', 'ASC']]})
  .then(artworks => {
    // console.log('these are the artworks coming back', artworks);
    res.json(artworks);
  })
  .catch(error => {
    console.log('an error occurred on get api/artworks/');
  });
});

// includ artists and sites and likes and checkins
// test that include all: true


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Artworks.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(artwork => {
    // console.log('this is the artwork coming back', artwork);
    res.json(artwork);
  })
  .catch(error => {
    console.log('an error occurred on get api/artworks/:id');
  });
});
//make sure that notation inside the fineOne parameters works

router.post('/', (req, res) => {
  let {title, description, date_painted, date_removed, featured, artist_id, site_id} = req.body;

  return Artworks.create({
    title: title,
    description: description,
    date_painted: date_painted,
    date_removed: date_removed,
    featured: featured,
    artist_id: artist_id,
    site_id: site_id
  })
  .then(artwork => {
    // console.log('comment coming back from post to api/artworks', artwork);
    res.json(artwork);
  })
  .catch(error => {
    console.log('an error occurred on post to api/artworks');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {title, description, date_painted, date_removed, featured, artist_id, site_id} = req.body;

  return Artworks.findOne({where : {id: id}})
  .then(artwork => {
    return artwork.update({
      name: name,
      bio: bio,
      photourl: photourl,
      websiteurl: websiteurl,
      featured: featured
    });
  })
  .then(result => {
    // console.log('an update made to artwork with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/artworks/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Artworks.findOne({where: {id: id}})
  .then(artwork => {
    if(!artwork){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return artwork.destroy();
  })
  .then(result => {
    // console.log('this is what we get back from delete to api/artworks/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/artworks/:id for id ', id);
  });
});


module.exports = router;