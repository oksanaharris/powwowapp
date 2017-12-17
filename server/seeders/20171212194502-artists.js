'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [{
  "name": "Jock",
  "bio": "bio of artist",
  "photourl": "http://dummyimage.com/166x137.png/ff4444/ffffff",
  "websiteurl": "http://examiner.com",
  "featured": "t",
  "createdAt": "9/15/2017",
  "updatedAt": "5/4/2017"
}, {
  "name": "Clair",
  "bio": "bio of artist",
  "photourl": "http://dummyimage.com/247x144.bmp/5fa2dd/ffffff",
  "websiteurl": "http://nifty.com",
  "featured": "t",
  "createdAt": "2/8/2017",
  "updatedAt": "2/28/2017"
}, {
  "name": "Dawn",
  "bio": "bio of artist",
  "photourl": "http://dummyimage.com/149x250.png/ff4444/ffffff",
  "websiteurl": "https://trellian.com",
  "featured": "t",
  "createdAt": "9/20/2017",
  "updatedAt": "9/28/2017"
}, {
  "name": "Dimitry",
  "bio": "bio of artist",
  "photourl": "http://dummyimage.com/117x106.png/ff4444/ffffff",
  "websiteurl": "http://aol.com",
  "featured": "f",
  "createdAt": "7/11/2017",
  "updatedAt": "12/22/2016"
}, {
  "name": "Gerladina",
  "bio": "bio of artist",
  "photourl": "http://dummyimage.com/221x127.bmp/cc0000/ffffff",
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