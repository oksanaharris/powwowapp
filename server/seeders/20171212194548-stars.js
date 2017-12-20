'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stars', [{
  "starred": true,
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10",
  "artwork_id": 3,
  "user_id": 1
}, {
  "starred": true,
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10",
  "artwork_id": 1,
  "user_id": 1
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('stars', null, {});
  }
};