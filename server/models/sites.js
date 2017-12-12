module.exports = function(sequelize, DataTypes) {
  var Sites = sequelize.define("Sites", {
    lat: {type: DataTypes.FLOAT, allowNull: false},
    long: {type: DataTypes.FLOAT, allowNull: false},
    description: {type: DataTypes.STRING},
    cross_street_one: {type: DataTypes.STRING},
    cross_street_two: {type: DataTypes.STRING}
  }, {tableName: 'sites'});

  Sites.associate = function(models) {
    Sites.belongsTo(models.Areas, {foreignKey: 'area_id'});
    Sites.hasMany(models.Artworks, {foreignKey: 'site_id'});
  };

  return Sites;
};

// set defaults and constraints

