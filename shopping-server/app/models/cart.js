'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    productNum: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};