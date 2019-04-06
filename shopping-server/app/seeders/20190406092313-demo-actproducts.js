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
      'ActProducts',
      [
        {
          actId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 2,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 2,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 3,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 3,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 3,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          actId: 3,
          productId: 4,
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
    return queryInterface.bulkDelete('ActProducts', null, {})
  }
}
