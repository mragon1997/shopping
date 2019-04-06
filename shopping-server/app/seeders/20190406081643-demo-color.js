'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Colors',
      [
        {
          colorName: '黑色',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          colorName: '蓝色',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          colorName: '白色',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          colorName: '黄色',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          colorName: '红色',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Colors', null, {})
  }
}
