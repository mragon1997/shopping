'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActProduct = sequelize.define('ActProduct', {
    id: DataTypes.INTEGER,
    actId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  ActProduct.associate = function(models) {
    // associations can be defined here
  };
  return ActProduct;
};