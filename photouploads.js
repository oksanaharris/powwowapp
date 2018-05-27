module.exports = function(sequelize, DataTypes) {
  var PhotoUploads = sequelize.define("PhotoUploads", {
    url: {type: DataTypes.STRING}
  }, {tableName: 'photouploads'});

  PhotoUploads.associate = function(models) {
    // PhotoUploads.belongsTo(models.Comment, {foreignKey: 'artwork_id'});
    PhotoUploads.belongsTo(models.Users, {foreignKey: 'user_id'});
  };

  return PhotoUploads;
};

// set defaults and constraints