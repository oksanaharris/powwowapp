'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [{
  "name": "Jock",
  "homebase": "Holland",
  "bio": "bio of artist",
  "photourl": "/assets/artist4.jpeg",
  "websiteurl": "http://examiner.com",
  "featured": "t",
  "createdAt": "9/15/2017",
  "updatedAt": "5/4/2017"
}, {
  "name": "Clair",
  "homebase": "Chattanooga, TN",
  "bio": "bio of artist",
  "photourl": "/assets/artist2.jpeg",
  "websiteurl": "http://nifty.com",
  "featured": "t",
  "createdAt": "2/8/2017",
  "updatedAt": "2/28/2017"
}, {
  "name": "Dawn",
  "homebase": "North Pole",
  "bio": "bio of artist",
  "photourl": "/assets/artist3.jpeg",
  "websiteurl": "https://trellian.com",
  "featured": "t",
  "createdAt": "9/20/2017",
  "updatedAt": "9/28/2017"
}, {
  "name": "Dimitry",
  "homebase": "Hawaii",
  "bio": "bio of artist",
  "photourl": "/assets/artist5.png",
  "websiteurl": "http://aol.com",
  "featured": "f",
  "createdAt": "7/11/2017",
  "updatedAt": "12/22/2016"
}, {
  "name": "Gerladina",
  "homebase": "Russia",
  "bio": "bio of artist",
  "photourl": "/assets/artist1.jpg",
  "websiteurl": "http://intel.com",
  "featured": "f",
  "createdAt": "6/30/2017",
  "updatedAt": "6/21/2017"
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('artists', null, {});
  }
};