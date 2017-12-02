const express = require('express');
const router = express.Router();

const db = require('../models');

const Users = db.Users;
const Events = db.Events;
const Photos = db.Photos;

// events by user

router.get('/user/:userid', (req, res) => {
  let id = req.params.userid;

  return Events.findAll({where: {user_id: id}})
  .then(events => {
    if(!events || events.length === 0){console.log('no events found');}
    // need some sort of a res.end();
    res.json(events);
  })
  .catch(error => {
    console.log('an error occurred in get api/events/:username');
  });
});

router.get('/:eventid', (req, res) => {
  let {eventid} = req.params;

  return Events.findById(eventid)
  .then(event => {
    console.log('event cominb back from /:eventid', event);
    // do something with the event data here before moving on to photos

    return Photos.findAll({where: {event_id: eventid}});
    // res.json(event);
  })
  .then(photos => {
    res.json(photos);
  })
  .catch(error => {
    console.log('an error occurred on get to api/events/:eventid');
  });
});

router.post('/', (req, res) => {
  //replace with id & username derived from sessions
  //tie in even id


  let {title, description, date, userid} = req.body;

  Events.create({
    title: title,
    description: description,
    date: date,
    user_id: userid
  })
  .then(event => {
    console.log('this is created event that comes back from post to events', event);
    res.redirect(`/api/events/${userid}`);
  })
  .catch(error => {
    console.log('an error occurred on post to api/events');
  });
});



module.exports = router;