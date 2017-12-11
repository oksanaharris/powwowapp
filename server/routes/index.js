const express = require('express');
const router = express.Router();

const areaRouter = require('./areas.js');
const artistRouter = require('./artists.js');
const artworkRouter = require('./artworks.js');
const authorizationRouter = require('./authorizations.js');
const checkinRouter = require('./checkins.js');
const likeRouter = require('./likes.js');
const siteRouter = require('./sites.js');
const userRouter = require('./users.js');

router.use('/areas', areaRouter);
router.use('/artists', artistRouter);
router.use('/artworks', artworkRouter);
router.use('/authorizations', authorizationRouter);
router.use('/checkins', checkinRouter);
router.use('/likes', likeRouter);
router.use('/sites', siteRouter);
router.use('/users', userRouter);

module.exports = router;
