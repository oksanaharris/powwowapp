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

  return Areas.findAll({include: [Authorizations]})
  .then(areas => {
    // console.log('these are the areas coming back', areas);
    res.json(areas);
  })
  .catch(error => {
    console.log('an error occurred on get api/areas/');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Areas.findOne({where: {id: id}, include: [Authorizations]})
  .then(area => {
    // console.log('this is the area coming back', area);
    res.json(area);
  })
  .catch(error => {
    console.log('an error occurred on get api/areas/:id');
  });
});


router.post('/', (req, res) => {
  let {name, city, state} = req.body;

  return Areas.create({
    name: name,
    city: city,
    state: state
  })
  .then(area => {
    // console.log('comment coming back from post to api/areas', area);
    res.json(area);
  })
  .catch(error => {
    console.log('an error occurred on post to api/areas');
  });
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {name, city, state} = req.body;

  return Areas.findOne({where : {id: id}})
  .then(area => {
    return area.update({name: name, city: city, state: state});
  })
  .then(result => {
    // console.log('an update made to area with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/areas/:id', error);
  });
});

router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Areas.findOne({where: {id: id}})
  .then(area => {
    if(!area){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return area.destroy();
  })
  .then(result => {
    // console.log('this is what we get back from delete to api/areas/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/areas/:id for id ', id);
  });
});


module.exports = router;