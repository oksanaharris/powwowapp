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
  //this includes area and artworks
  return Sites.findAll({ include: [{ all: true }]})
  .then(sites => {
    console.log('these are the sites coming back', sites);
    res.json(sites);
  })
  .catch(error => {
    console.log('an error occurred on get api/sites/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Sites.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(site => {
    console.log('this is the site coming back', site);
    res.json(site);
  })
  .catch(error => {
    console.log('an error occurred on get api/sites/:id');
  });
});


router.post('/', (req, res) => {
  let {lat, long, description, cross_street_one, cross_street_two, area_id} = req.body;

  return Sites.create({
    lat: lat,
    long: long,
    description: description,
    cross_street_one: cross_street_one,
    cross_street_two: cross_street_two,
    area_id: area_id
  })
  .then(site => {
    console.log('comment coming back from post to api/sites', site);
    res.json(site);
  })
  .catch(error => {
    console.log('an error occurred on post to api/sites');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {lat, long, description, cross_street_one, cross_street_two, area_id} = req.body;

  return Sites.findOne({where : {id: id}})
  .then(site => {
    return site.update({
      lat: lat,
      long: long,
      description: description,
      cross_street_one: cross_street_one,
      cross_street_two: cross_street_two,
      area_id: area_id
    });
  })
  .then(result => {
    console.log('an update made to site with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/sites/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Sites.findOne({where: {id: id}})
  .then(site => {
    if(!site){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return site.destroy();
  })
  .then(result => {
    console.log('this is what we get back from delete to api/sites/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/sites/:id for id ', id);
  });
});

module.exports = router;