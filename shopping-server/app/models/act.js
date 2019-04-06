'use strict';
module.exports = (sequelize, DataTypes) => {
  const Act = sequelize.define('Act', {
    actName: DataTypes.STRING,
    beginTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  Act.associate = function(models) {
    // associations can be defined here
  };
  return Act;
};