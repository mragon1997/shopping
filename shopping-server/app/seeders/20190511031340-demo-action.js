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
      'Actions',
      [
        {
          actionName: '登录',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionName: '浏览',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionName: '加车',
          created_at: new Date(),
          updated_at: new Date()
        },        {
          actionName: '下单',
          created_at: new Date(),
          updated_at: new Date()
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

    return queryInterface.bulkDelete('Actions', null, {})
  }
}
