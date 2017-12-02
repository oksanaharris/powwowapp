module.exports = function(sequelize, DataTypes) {
  var Areas = sequelize.define("Areas", {
    name: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    state: {type: DataTypes.STRING, allowNull: false}
  }, {tableName: 'areas'});

  Areas.associate = function(models) {
    Areas.hasMany(models.Sites, {foreignKey: 'area_id'});
    Areas.hasMany(models.Authorizations, {foreignKey: 'area_id'});
  };

  return Areas;
};

// set defaults and constraints