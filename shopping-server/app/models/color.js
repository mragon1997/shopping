'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    id: DataTypes.INTEGER,
    colorName: DataTypes.STRING
  }, {});
  Color.associate = function(models) {
    // associations can be defined here
  };
  return Color;
};