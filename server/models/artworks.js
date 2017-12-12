module.exports = function(sequelize, DataTypes) {
  var Artworks = sequelize.define("Artworks", {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    date_painted: {type: DataTypes.DATE},
    date_removed: {type: DataTypes.DATE},
    featured: {type: DataTypes.BOOLEAN}
  }, {tableName: 'artworks'});

  Artworks.associate = function(models) {
    Artworks.belongsTo(models.Artists, {foreignKey: 'artist_id'});
    Artworks.belongsTo(models.Sites, {foreignKey: 'site_id'});
    Artworks.hasMany(models.Checkins, {foreignKey: 'artwork_id'});
  };

  return Artworks;
};

// set defaults and constraints

// [{
//   "title": "Amityville II: The Possession",
//   "description": "description of artwork",
//   "date_painted": "3/7/2017",
//   "date_removed": "10/17/2017",
//   "createdAt": "10/27/2017",
//   "updatedAt": "5/30/2017"
// }, {
//   "title": "Hiding Place, The",
//   "description": "description of artwork",
//   "date_painted": "9/20/2017",
//   "date_removed": "7/2/2017",
//   "createdAt": "6/11/2017",
//   "updatedAt": "7/25/2017"
// }, {
//   "title": "Pinocchio",
//   "description": "description of artwork",
//   "date_painted": "8/29/2017",
//   "date_removed": "7/2/2017",
//   "createdAt": "2/16/2017",
//   "updatedAt": "12/31/2016"
// }, {
//   "title": "Steal This Film",
//   "description": "description of artwork",
//   "date_painted": "12/30/2016",
//   "date_removed": "5/9/2017",
//   "createdAt": "11/12/2017",
//   "updatedAt": "7/11/2017"
// }, {
//   "title": "Last Chance Harvey",
//   "description": "description of artwork",
//   "date_painted": "4/15/2017",
//   "date_removed": "11/26/2017",
//   "createdAt": "1/22/2017",
//   "updatedAt": "8/30/2017"
// }]