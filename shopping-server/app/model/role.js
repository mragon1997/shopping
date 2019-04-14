'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    roleName: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  });

  return Role;
};