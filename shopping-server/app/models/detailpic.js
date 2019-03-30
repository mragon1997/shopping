'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetailPic = sequelize.define('DetailPic', {
    id: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    picAddress: DataTypes.STRING
  }, {});
  DetailPic.associate = function(models) {
    // associations can be defined here
  };
  return DetailPic;
};