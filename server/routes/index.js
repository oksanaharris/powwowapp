const express = require('express');
const router = express.Router();

const areaRouter = require('./areas.js');
const artistRouter = require('./artists.js');
const artworkRouter = require('./artworks.js');
const authorizationRouter = require('./authorizations.js');
const checkinRouter = require('./checkins.js');
const commentRouter = require('./comments.js');
const imageStorageRouter = require('./imagestorage.js');
const likeRouter = require('./likes.js');
const photoUploadsRouter = require('./photoUploads.js');
const siteRouter = require('./sites.js');
const starRouter = require('./stars.js');
const userRouter = require('./users.js');

router.use('/areas', areaRouter);
router.use('/artists', artistRouter);
router.use('/artworks', artworkRouter);
router.use('/authorizations', authorizationRouter);
router.use('/checkins', checkinRouter);
router.use('/comments', commentRouter);
router.use('/imagestorage', imageStorageRouter);
router.use('/likes', likeRouter);
router.use('/photoUploads', photoUploadsRouter);
router.use('/sites', siteRouter);
router.use('/stars', starRouter);
router.use('/users', userRouter);

module.exports = router;
