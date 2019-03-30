'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    productNum: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};