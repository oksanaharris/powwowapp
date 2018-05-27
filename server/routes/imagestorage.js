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

// router.get('/', (req, res) => {
//   //this includes artworks and users
//   return Comments.findAll({ include: [{ all: true }], order: [['createdAt', 'DESC']]})
//   .then(comments => {
//     console.log('these are the comments coming back', comments);
//     res.json(comments);
//   })
//   .catch(error => {
//     console.log('an error occurred on get api/comments/');
//   });
// });


router.post('/', (req, res) => {
// what if it's a file? what if it's a base64 image?
// handle status 413 Payload Too Large (when file size is too large)
// jpeg vs png
  console.log('running a post on api/imagestorage ');

  let image = req.body.image;
  let user_id = req.body.user_id;

  console.log('this is BODY', req.body);
  // let thisID = req.body.thisID;
  // let thisUser = req.body.thisUser;
  let imageBase64String = image.split(',')[1];
  let imageBuffer = new Buffer(imageBase64String, 'base64')
  const params = {
    Key: 'imageupload/'+ Date.now() + '.png',
    ContentType: 'image/png',
    ContentLength: imageBuffer.length,
    ACL: 'public-read',
    Bucket: 'powwowapp',
    Body: imageBuffer
  //   InternalID: thisID
  };

  s3.upload(params, function(err, data){
    if (err) {
      // res.send(err);
      console.log('AN ERROR OCCURRED', err);
      res.end();
    }

    // let url = params.Key.split('/')[1];
    // console.log('this is url', url);
    // console.log('GAUNTLET 4: SAVED TO AWS - URL: ', url)
    // let time = Date.now();
    console.log('this is data coming back from AWS S3', data);
    let imageUrl = data.Location;
    console.log('this is the new image url', imageUrl);
    // handling reading from this bucket - making it not public

    // return Comments.create({
    //   artwork_id: 1,
    //   user_id: user_id,
    //   body: "",
    //   photourl: imageUrl
    // })
    // .then(comment => {
    //   console.log('comment coming back from post to api/comments', comment);
    //   res.json(comment);
    // })
    // .catch(error => {
    //   console.log('an error occurred on post to api/comments within s3 upload of api/imagestorage');
    // });

    res.json(data);

    // artData().findOne({ "scenes.tiles.id": thisID })
    // .then( response => {
    //   let updateData = getUpdateData(response, thisID);
    //   if (updateData.sceneStatus === "intermediate"){
    //     //change previous scene status to archived
    //     response.scenes[updateData.sceneIndex - 1].status = "archived";
    //     //change this scene status to current
    //     response.scenes[updateData.sceneIndex].status = "current";
    //   }
    //   let sceneID = response._id;
    //   let myTile = response.scenes[updateData.sceneIndex].tiles[updateData.tileIndex];
    //   myTile.id = thisID;
    //   myTile.user = thisUser;
    //   myTile.createdAt = time;
    //   myTile.url = `https://s3-us-west-2.amazonaws.com/invisiart/drawings/${url}`;
    //   myTile.clean = "false";
    //   myTile.working = "false";
    //   myTile.saved = "true";
    //   response.scenes[updateData.sceneIndex].tiles[updateData.tileIndex] = myTile;
    //   artData().updateOne({"_id": sceneID}, response )
    //   .then(response => {
    //     console.log('GAUNTLET 5: RETURNED FROM DB: ', response)
    //     res.send(response);
    //   })
    // })

  });


});


module.exports = router;