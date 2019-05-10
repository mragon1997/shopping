'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('actions', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      actionName: STRING(255),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 actions 表
  down: async queryInterface => {
    await queryInterface.dropTable('actions');
  },
};
