const express = require('express');
const router = express.Router();

const db = require('../models');

const Areas = db.Areas;
const Artists = db.Artists;
const Artworks = db.Artworks;
const Authorizations = db.Authorizations;
const Checkins = db.Checkins;
const Comments = db.Comments;
const Sites = db.Sites;
const Users = db.Users;

const AWS = require('aws-sdk');
const AWS_CONFIG = require('../config/aws.config.json');
const AWS_ACCESS_KEY = AWS_CONFIG.AwsAccessKeyId;
const AWS_SECRET = AWS_CONFIG.AwsSecretAccessKey;
const AWS_REGION = AWS_CONFIG.region;

const credentials={
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET,
  region: AWS_REGION
};

AWS.config.update(credentials);
const s3 = new AWS.S3({apiVersion: '2006-03-01'});


router.get('/', (req, res) => {
  //this includes artworks and users
  return Comments.findAll({ include: [{ all: true }], order: [['createdAt', 'DESC']]})
  .then(comments => {
    console.log('these are the comments coming back', comments);
    res.json(comments);
  })
  .catch(error => {
    console.log('an error occurred on get api/comments/');
  });
});


router.get('/artwork/:artworkid', (req, res) => {
  let {artworkid} = req.params;

  console.log('hitting /api/comments/artwork/:artworkid route');

  return Comments.findAll({where: {artwork_id: artworkid}, include: [{ all: true }], order: [['createdAt', 'DESC']]})
  .then(comments => {
    console.log('these are the comments coming back from /comments/artwork/:artworkid', comments);
    res.json(comments);
  })
  .catch(error => {
    console.log('an error occurred on get api/comments/artwork/:artworkid');
  });
});


router.get('/:id', (req, res) => {
  let {id} = req.params;

  return Comments.findOne({where: {id: id}}, {include: [{ all: true }]})
  .then(comment => {
    console.log('this is the comment coming back', comment);
    res.json(comment);
  })
  .catch(error => {
    console.log('an error occurred on get api/comments/:id');
  });
});


router.post('/', (req, res) => {
  let {artwork_id, user_id, body, imageData} = req.body;
  console.log('this is req.body.artwork_id', artwork_id);
  console.log('this is req.body.user_id', user_id);
  console.log('this is req.body.body', body);

  let photourl = '';

  if(imageData) {
    return new Promise((resolve, reject) => {
      return resolve(saveImageToS3(imageData));
    })
    .then(photourl => {
      console.log('this is coming back from return resolve saveToS3 function', photourl);
      return createComment(artwork_id, user_id, body, photourl);
    });
  } else {
    return createComment(artwork_id, user_id, body, photourl);
  }

  function createComment (artwork_id, user_id, body, photourl) {
    return Comments.create({
      artwork_id: artwork_id,
      user_id: user_id,
      body: body,
      photourl: photourl
    })
    .then(comment => {
      console.log('comment coming back from post to api/comments', comment);
      res.json(comment);
    })
    .catch(error => {
      console.log('an error occurred on post to api/comments');
    });
  }

  function saveImageToS3 (imageData) {
    return new Promise((resolve, reject) => {
      console.log('running saveImageToS3 function');

      let imageBase64String = imageData.split(',')[1];
      let imageBuffer = new Buffer(imageBase64String, 'base64')
      const params = {
        Key: 'imageupload/'+ Date.now() + '.png',
        ContentType: 'image/png',
        ContentLength: imageBuffer.length,
        ACL: 'public-read',
        // note ACL pulic-read!!!
        Bucket: 'powwowapp',
        Body: imageBuffer
      };

      s3.upload(params, function(err, data){
        if (err) {
          console.log('AN ERROR OCCURRED', err);
          res.end();
        }

        // let url = params.Key.split('/')[1];

        // console.log('this is data coming back from AWS S3', data);

        let imageUrl = data.Location;

        return resolve(imageUrl);

        // handling reading from this bucket - making it not public

      });
    })

  }
});


router.put('/:id', (req, res) => {
  let {id} = req.params;
  let {artwork_id, user_id, body, photourl} = req.body;

  return Comments.findOne({where : {id: id}})
  .then(comment => {
    return comment.update({
      artwork_id: artwork_id,
      user_id: user_id,
      body: body,
      photourl: photourl
    });
  })
  .then(result => {
    // console.log('an update made to comment with id ', id,  result);
    res.json(result);
  })
  .catch(error => {
    console.log('an error occured on put to api/comments/:id', error);
  });
});


router.delete('/:id', (req, res) => {
  let {id} = req.params;

  return Comments.findOne({where: {id: id}})
  .then(comment => {
    if(!comment){
      console.log('could not locate the record to delete');
      res.json({error: 'could not locate the record to delete'});
    }
      return comment.destroy();
  })
  .then(result => {
    // console.log('this is what we get back from delete to api/comments/:id for id ', id, result);
    res.json(result);
    // returns an empty array if successful and undefined if record not found - it works
  })
  .catch(error => {
    console.log('an error occurred on delete to api/comments/:id for id ', id);
  });
});


module.exports = router;