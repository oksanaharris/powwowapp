module.exports = function(sequelize, DataTypes) {
  var Authorizations = sequelize.define("Authorizations", {
    authorized: {type: DataTypes.BOOLEAN}
  }, {tableName: 'authorizations'});

  Authorizations.associate = function(models) {
    Authorizations.belongsTo(models.Users, {foreignKey: 'user_id'});
    Authorizations.belongsTo(models.Areas, {foreignKey: 'area_id'});
  };

  return Authorizations;
};

// set defaults and constraints