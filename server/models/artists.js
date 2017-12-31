module.exports = function(sequelize, DataTypes) {
  var Artists = sequelize.define("Artists", {
    name: {type: DataTypes.STRING, allowNull: false},
    homebase: {type: DataTypes.STRING, allowNull: false},
    bio: {type: DataTypes.STRING, allowNull: false},
    photourl: {type: DataTypes.STRING},
    websiteurl: {type: DataTypes.STRING},
    featured: {type: DataTypes.BOOLEAN}
  }, {tableName: 'artists'});

  Artists.associate = function(models) {
    Artists.hasMany(models.Artworks, {foreignKey: 'artist_id'});
  };

  return Artists;
};

// set defaults and constraints
