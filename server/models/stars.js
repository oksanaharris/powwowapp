module.exports = function(sequelize, DataTypes) {
  var Stars = sequelize.define("Stars", {
    starred: {type: DataTypes.BOOLEAN}
  }, {tableName: 'stars'});

  Stars.associate = function(models) {
    Stars.belongsTo(models.Artworks, {foreignKey: 'artwork_id'});
    Stars.belongsTo(models.Users, {foreignKey: 'user_id'});
  };

  return Stars;
};

// set defaults and constraints