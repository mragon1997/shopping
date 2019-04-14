'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Order = app.model.define('order', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    productId: INTEGER,
    productNum: INTEGER,
    colorId: INTEGER,
    address: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Order;
};