module.exports = function(sequelize, DataTypes) {
  var Artworks = sequelize.define("Artworks", {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
    date_painted: {type: DataTypes.DATE},
    date_removed: {type: DataTypes.DATE},
    featured: {type: DataTypes.BOOLEAN}
  }, {tableName: 'artworks'});

  Artworks.associate = function(models) {
    Artworks.belongsTo(models.Artists, {foreignKey: 'artist_id'});
    Artworks.belongsTo(models.Sites, {foreignKey: 'site_id'});
    Artworks.hasMany(models.Checkins, {foreignKey: 'artwork_id'});
    Artworks.hasMany(models.Comments, {foreignKey: 'artwork_id'});
    Artworks.hasMany(models.Likes, {foreignKey: 'artwork_id'});
    Artworks.hasMany(models.Stars, {foreignKey: 'artwork_id'});
  };

  return Artworks;
};

// set defaults and constraints
