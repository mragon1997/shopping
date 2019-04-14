'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Color = app.model.define('color', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    colorName: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Color;
};