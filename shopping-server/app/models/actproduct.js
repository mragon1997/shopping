'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActProduct = sequelize.define('ActProduct', {
    actId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  ActProduct.associate = function(models) {
    // associations can be defined here
  };
  return ActProduct;
};