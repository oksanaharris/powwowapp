module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    body: {type: DataTypes.STRING},
    photourl: {type: DataTypes.STRING}
  }, {tableName: 'comments'});

  Comments.associate = function(models) {
    Comments.belongsTo(models.Artworks, {foreignKey: 'artwork_id'});
    Comments.belongsTo(models.Users, {foreignKey: 'user_id'});
  };

  return Comments;
};

// set defaults and constraints