module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define("Likes", {
    liked: {type: DataTypes.BOOLEAN}
  }, {tableName: 'likes'});

  Likes.associate = function(models) {
    Likes.belongsTo(models.Artworks, {foreignKey: 'artwork_id'});
    Likes.belongsTo(models.Users, {foreignKey: 'user_id'});
  };

  return Likes;
};

// set defaults and constraints