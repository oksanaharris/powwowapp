'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
  "username": "bob",
  "facebookId": "facebookId1",
  "picture":"http://lorempixel.com/400/200/cats",
  "firstname": "Bob",
  "lastname": "Burgers",
  "password": "psst",
  "email": "bob@bobsburgers.com",
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10"
}, {
  "username": "stacy",
  "facebookId": "facebookId2",
  "picture":"http://lorempixel.com/400/200/cats",
  "firstname": "Stacy",
  "lastname": "Mom",
  "password": "psst",
  "email": "stacy@stacysmom.com",
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10"
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('users', null, {});
  }
};