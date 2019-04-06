'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetailPic = sequelize.define('DetailPic', {
    productId: DataTypes.INTEGER,
    picAddress: DataTypes.STRING
  }, {});
  DetailPic.associate = function(models) {
    // associations can be defined here
  };
  return DetailPic;
};