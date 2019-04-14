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
      'Orders',
      [
        {
          userId: 3,
          productId: 1,
          colorId: 1,
          productNum: 1,
          address: '四川省攀枝花市东沟县洗澡堂子大街048号',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          userId: 3,
          productId: 1,
          colorId: 2,
          productNum: 2,
          address: '四川省攀枝花市东沟县洗澡堂子大街048号',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          userId: 3,
          productId: 1,
          colorId: 3,
          productNum: 10,
          address: '四川省攀枝花市东沟县洗澡堂子大街048号',
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
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
