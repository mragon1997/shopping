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
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '索尼',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: 'Beats',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '华为',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '小米',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: 'Audio-technica',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '联想',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '华硕',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '宏碁',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '佳能',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '富士',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: 'Gopro',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '大疆',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          brandName: '极米',
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

    return queryInterface.bulkDelete('Brands', null, {})
  }
}
