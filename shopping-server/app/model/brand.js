'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Brand = app.model.define('brand', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    brandName: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Brand;
};