'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tel:STRING(255),
    password:STRING(255),
    roleId:INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};