module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // username: {type: DataTypes.STRING, allowNull: false, unique: true},
    firsname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true}
  }, {tableName: 'users'});

  //fields depend on facebook auth
  //option to register without facebook

  Users.associate = function(models) {
    Users.hasMany(models.Authorizations, {foreignKey: 'user_id'});
    Users.hasMany(models.Checkins, {foreignKey: 'user_id'});
  };

  return Users;
};

// set defaults and constraints