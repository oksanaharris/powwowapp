const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const db = require('./models');
const Users = db.Users;
const apiRouter = require('./routes');

app.use(express.static('public'));
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

// app.get('/login', (req, res) => {
//   res.sendFile('./public/login.html', {root: __dirname});
// });

// app.get('/register', (req, res) => {
//   res.sendFile('./public/register.html', {root: __dirname});
// });

app.use('/api', apiRouter);

// app.post('/register', (req, res) => {
//   console.log('running a post on register');
//   console.log('req body', req.body);

//   let {username, password, email} = req.body;

//   return Users.create({
//     username: username,
//     password: password,
//     email: email
//   })
//   .then(createdUser => {
//     console.log('this this what we got back from the database', createdUser);
//     res.redirect('/');
//   })
//   .catch(error => {
//     console.log('an error occurred', error);
//   });
// });

// app.post('/login', (req, res) => {
//   console.log('running a post on login');
//   console.log('req body', req.body);
//   res.redirect('/');
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.json({loggedout: true});
// });

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname });
});

app.listen(PORT, () => {
  console.log(`server now listening on port ${PORT}`);
  // db.sequelize.drop();
  // db.sequelize.sync({force: true});
});


// salt, bcrypt, passport - facebook auth
// defaults for tables
