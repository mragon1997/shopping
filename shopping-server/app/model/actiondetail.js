'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ActionDetail = app.model.define('actiondetail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    actionId: INTEGER,
    logId: INTEGER,
    actionDate: String,
    actionHour: String,
    created_at: DATE,
    updated_at: DATE,
  });

  return ActionDetail;
};