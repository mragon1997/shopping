'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('products', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(255),
      brandId: INTEGER,
      colorId: INTEGER,
      price: INTEGER,
      actPrice: INTEGER,
      isAct: BOOLEAN,
      mainPic: STRING(255),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('products');
  },
};
