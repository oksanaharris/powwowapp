'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('photouploads', [{
  "url": "https://static1.squarespace.com/static/573e669120c6472e6bcb463c/57e0a07937c581f7ee551231/57e0a7b51b631b53dfce0bbe/1474340791166/lana-lane-1.jpg?format=2500w",
  "createdAt": "2017-03-06 14:00:00-10",
  "updatedAt": "2017-03-06 14:00:00-10"
}, {
  "url": "https://static1.squarespace.com/static/573e669120c6472e6bcb463c/57e0a07937c581f7ee551231/57e0a7b5ff7c505061673c1b/1474340791469/secret-walls-1.jpg?format=2500w",
  "createdAt": "2017-12-24 14:00:00-10",
  "updatedAt": "2017-12-24 14:00:00-10"
}, {
  "url": "https://static1.squarespace.com/static/573e669120c6472e6bcb463c/57e0a07937c581f7ee551231/57e0a7c2ff7c505061673ca1/1474340803392/7K9A1291-1277x848.jpg?format=2500w",
  "createdAt": "2017-08-06 14:00:00-10",
  "updatedAt": "2017-08-06 14:00:00-10"
}, {
  "url": "/assets/sample1.jpg",
  "createdAt": "2017-12-24 18:00:00-10",
  "updatedAt": "2017-12-24 18:00:00-10"
}, {
  "url": "/assets/sample2.jpg",
  "createdAt": "2017-12-24 18:00:00-10",
  "updatedAt": "2017-12-24 18:00:00-10"
}, {
  "url": "/assets/sample3.jpg",
  "createdAt": "2017-12-24 18:00:00-10",
  "updatedAt": "2017-12-24 18:00:00-10"
}, {
  "url": "/assets/sample4.jpg",
  "createdAt": "2017-12-24 18:00:00-10",
  "updatedAt": "2017-12-24 18:00:00-10"
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('photouploads', null, {});
  }
};