'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Action = app.model.define('action', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actionName: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Action;
};