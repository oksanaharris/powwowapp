'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [{
  "body": "Wow, this mural is so amazing!",
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10",
  "artwork_id": 3,
  "user_id": 1
}, {
  "body": "Love the way the colors are used here!",
  "createdAt": "2017-12-24 14:00:00-10",
  "updatedAt": "2017-12-24 14:00:00-10",
  "artwork_id": 3,
  "user_id": 2
}, {
  "body": "This is so cooool!",
  "createdAt": "2017-08-06 14:00:00-10",
  "updatedAt": "2017-08-06 14:00:00-10",
  "artwork_id": 1,
  "user_id": 1
}, {
  "body": "I've never seen anything like it!",
  "createdAt": "2017-12-24 18:00:00-10",
  "updatedAt": "2017-12-24 18:00:00-10",
  "artwork_id": 1,
  "user_id": 2
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('comments', null, {});
  }
};