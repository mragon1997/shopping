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
      'Brands',
      [
        {
          brandName: '苹果',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '索尼',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: 'Beats',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '华为',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '小米',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: 'Audio-technica',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '联想',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '华硕',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '宏碁',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '佳能',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '富士',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: 'Gopro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '大疆',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brandName: '极米',
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

    return queryInterface.bulkDelete('Brands', null, {})
  }
}
