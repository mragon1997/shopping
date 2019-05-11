'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ActionDetail = app.model.define('actiondetail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actionId: INTEGER,
    logId: INTEGER,
    actionDate: STRING(255),
    actionHour: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return ActionDetail;
};