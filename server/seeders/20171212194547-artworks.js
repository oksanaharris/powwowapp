'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artworks', [{
  "title": "General Artwork",
  "description": "For non-artwork-specific comment posts to tie to",
  "url":"http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg",
  "date_painted": "3/7/2017",
  "date_removed": "10/17/2017",
  "featured": "t",
  "artist_id": 1,
  "site_id": 1,
  "createdAt": "10/27/2017",
  "updatedAt": "5/30/2017",
  "artist_id": 1,
  "site_id": 1
}, {
  "title": "Amityville II: The Possession",
  "description": "description of artwork",
  "url":"http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg",
  "date_painted": "3/7/2017",
  "date_removed": "10/17/2017",
  "featured": "t",
  "artist_id": 1,
  "site_id": 1,
  "createdAt": "10/27/2017",
  "updatedAt": "5/30/2017",
  "artist_id": 1,
  "site_id": 1
}, {
  "title": "Hiding Place, The",
  "description": "description of artwork",
  "url":"http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_WoodenWaveandGavinMurai_BrandonShigeta.jpg",
  "date_painted": "9/20/2017",
  "date_removed": "7/2/2017",
  "featured": "t",
  "artist_id": 2,
  "site_id": 2,
  "createdAt": "6/11/2017",
  "updatedAt": "7/25/2017",
  "artist_id": 1,
  "site_id": 2
}, {
  "title": "Pinocchio",
  "description": "description of artwork",
  "url":"http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Wooden-Wave.jpg",
  "date_painted": "8/29/2017",
  "date_removed": "7/2/2017",
  "featured": "t",
  "artist_id": 3,
  "site_id": 3,
  "createdAt": "2/16/2017",
  "updatedAt": "12/31/2016",
  "artist_id": 1,
  "site_id": 3
}, {
  "title": "Steal This Film",
  "description": "description of artwork",
  "url":"http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Luke-McCabe.jpg",
  "date_painted": "12/30/2016",
  "date_removed": "5/9/2017",
  "featured": "f",
  "artist_id": 4,
  "site_id": 4,
  "createdAt": "11/12/2017",
  "updatedAt": "7/11/2017",
  "artist_id": 1,
  "site_id": 4
}, {
  "title": "Last Chance Harvey",
  "description": "description of artwork",
  "url":"http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Prime.jpg",
  "date_painted": "4/15/2017",
  "date_removed": "11/26/2017",
  "featured": "f",
  "artist_id": 5,
  "site_id": 5,
  "createdAt": "1/22/2017",
  "updatedAt": "8/30/2017",
  "artist_id": 1,
  "site_id": 5
}], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('artworks', null, {});
  }
};