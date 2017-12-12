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


// [{
//   "lat": 21.30049,
//   "long": -157.860531,
//   "description": "description string property",
//   "cross_street_one": "cross street one goes here",
//   "cross_street_two": "cross street two goes here",
//   "createdAt": "2/28/2017",
//   "updatedAt": "6/13/2017"
// }, {
//   "lat": 21.2960919,
//   "long": -157.859673,
//   "description": "description string property",
//   "cross_street_one": "cross street one goes here",
//   "cross_street_two": "cross street two goes here",
//   "createdAt": "4/13/2017",
//   "updatedAt": "3/2/2017"
// }, {
//   "lat": 21.298790,
//   "long": -157.858922,
//   "description": "description string property",
//   "cross_street_one": "cross street one goes here",
//   "cross_street_two": "cross street two goes here",
//   "createdAt": "7/8/2017",
//   "updatedAt": "9/6/2017"
// }, {
//   "lat": 21.297451,
//   "long": -157.8614433,
//   "description": "description string property",
//   "cross_street_one": "cross street one goes here",
//   "cross_street_two": "cross street two goes here",
//   "createdAt": "7/23/2017",
//   "updatedAt": "12/12/2016"
// }, {
//   "lat": 21.296594,
//   "long": -157.855613,
//   "description": "description string property",
//   "cross_street_one": "cross street one goes here",
//   "cross_street_two": "cross street two goes here",
//   "createdAt": "2/16/2017",
//   "updatedAt": "3/13/2017"
// }]