const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const haversine = require('haversine');
const multer  = require('multer')
const fs = require('fs-extra');
const Clarifai = require('clarifai');

const ClarifaiApp = new Clarifai.App({
 apiKey: process.env.CLARIFAI_KEY
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const findClosest = start => {
  let closest = 100;
  let location;
  beaches.map(e => {
    let end = {
      latitude: e.lat,
      longitude: e.lon
    };
    let distance = haversine(start,end, { unit: 'mile' });
    if(distance < closest){
      closest = distance;
      location = e.name;
    }
  });

  return location;
};


app.post('/data', (req,res) => {
  let name = req.body.name;
  fs.readFile(`./uploads/${name}`, (err,data) => {
    let img = data.toString('base64')
    ClarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {base64: img}).then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.log(err.data);
        }
      );
  })
  res.json(200)
})

app.post('/debris', upload.single('photo'), (req, res) => {
  res.json(200);
});



app.listen(9000);