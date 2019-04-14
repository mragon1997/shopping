'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Cart = app.model.define('cart', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    productId: INTEGER,
    productNum: INTEGER,
    colorId: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Cart;
};