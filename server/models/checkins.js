module.exports = function(sequelize, DataTypes) {
  var Checkins = sequelize.define("Checkins", {
    checked_in: {type: DataTypes.BOOLEAN}
  }, {tableName: 'checkins'});

  Checkins.associate = function(models) {
    Checkins.belongsTo(models.Artworks, {foreignKey: 'artwork_id'});
    Checkins.belongsTo(models.Users, {foreignKey: 'user_id'});
  };

  return Checkins;
};

// set defaults and constraints