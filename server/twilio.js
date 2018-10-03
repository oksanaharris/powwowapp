const express = require('express');
const app  = express();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require('body-parser');
const haversine = require('haversine');
const fs = require('fs-extra');

const ClarifaiApp = new Clarifai.App({
 apiKey: process.env.CLARIFAI_KEY
});


app.post('/seal', (req,res) => {
  let obj = req.body;
  let beach = findClosest({latitude: obj.lat, longitude: obj.lon});
  client.messages
      .create({
         body: `Seal spotted near ${beach}, view in map here: https://www.google.com/maps/place/${obj.lat},${obj.lon} `,
         from: process.env.TWILIO_CELL,
         to: process.env.TMO_CELL
       })
      .then(message => console.log(message.sid))
      .done();

  res.json(200);
})

app.listen(9000);