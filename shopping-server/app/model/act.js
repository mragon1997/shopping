'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Act = app.model.define('act', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actName: STRING(255),
    beginTime: DATE,
    endTime: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return Act;
};