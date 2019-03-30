'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: DataTypes.INTEGER,
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