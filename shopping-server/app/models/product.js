'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    actPrice: DataTypes.INTEGER,
    isAct: DataTypes.BOOLEAN,
    mainPic: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};