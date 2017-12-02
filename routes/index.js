const express = require('express');
const router = express.Router();

const userRouter = require('./users.js');
const eventRouter = require('./events.js');
const photoRouter = require('./photos.js');
const likesRouter = require('./likes.js');
const commentsRouter = require('./comments.js');

router.use('/users', userRouter);
router.use('/events', eventRouter);
router.use('/photos', photoRouter);
router.use('/likes', likesRouter);
router.use('/comments', commentsRouter);

module.exports = router;
