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
      'Users',
      [
        {
          tel: '18888888888',
          password: 'admin8888',
          roleId: '1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          tel: '16666666666',
          password: 'operate6666',
          roleId: '2',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          tel: '14444444444',
          password: 'loser4444',
          roleId: '3',
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
    return queryInterface.bulkDelete('Users', null, {})
  }
}
