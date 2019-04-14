'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Product = app.model.define('product', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(255),
    brandId: INTEGER,
    colorId: INTEGER,
    price: INTEGER,
    actPrice: INTEGER,
    isAct: BOOLEAN,
    mainPic: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Product;
};