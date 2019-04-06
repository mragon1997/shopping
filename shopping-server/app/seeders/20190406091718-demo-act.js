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
      'Acts',
      [
        {
          actName: '电子产品二月促销',
          beginTime: new Date('2019-2-3'),
          endTime: new Date('2019-2-4'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actName: '苹果夏季降价活动',
          beginTime: new Date('2019-4-1'),
          endTime: new Date('2019-8-31'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actName: '秋季清仓挥泪大甩卖',
          beginTime: new Date('2019-10-15'),
          endTime: new Date('2019-11-15'),
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

    return queryInterface.bulkDelete('Acts', null, {})
  }
}
