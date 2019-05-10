'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('actiondetails', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      logId: INTEGER,
      actionDate: STRING(255),
      actionHour: STRING(255),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 actiondetails 表
  down: async queryInterface => {
    await queryInterface.dropTable('actiondetails');
  },
};