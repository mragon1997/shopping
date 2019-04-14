'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ActProduct = app.model.define('actproduct', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actId: INTEGER,
    productId: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return ActProduct;
};