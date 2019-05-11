'use strict';

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
      'ActionDetails',
      [
        {
          actionId: 1,
          actionDate: '2019-5-2',
          actionHour: '12',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-3',
          actionHour: '12',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-7',
          actionHour: '14',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-6',
          actionHour: '16',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-8',
          actionHour: '7',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-11',
          actionHour: '12',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-8',
          actionHour: '13',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-9',
          actionHour: '6',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-7',
          actionHour: '15',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-10',
          actionHour: '14',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-9',
          actionHour: '23',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-7',
          actionHour: '12',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-8',
          actionHour: '12',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-2',
          actionHour: '11',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-9',
          actionHour: '14',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-9',
          actionHour: '11',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-11',
          actionHour: '11',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-9',
          actionHour: '11',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-8',
          actionHour: '12',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 1,
          actionDate: '2019-5-3',
          actionHour: '10',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-3',
          actionHour: '10',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-3',
          actionHour: '19',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-7',
          actionHour: '12',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-7',
          actionHour: '10',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-10',
          actionHour: '10',
          logId: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-4',
          actionHour: '12',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-4',
          actionHour: '10',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-11',
          actionHour: '23',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-6',
          actionHour: '10',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-7',
          actionHour: '12',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-4',
          actionHour: '10',
          logId: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 5,
          actionDate: '2019-5-6',
          actionHour: '10',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-11',
          actionHour: '14',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-11',
          actionHour: '20',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-9',
          actionHour: '15',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-8',
          actionHour: '9',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-1',
          actionHour: '10',
          logId: 4,
          created_at: new Date(),
          updated_at: new Date()
        },

        {
          actionId: 3,
          actionDate: '2019-5-10',
          actionHour: '10',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-5',
          actionHour: '10',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 3,
          actionDate: '2019-5-11',
          actionHour: '18',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-6',
          actionHour: '17',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-6',
          actionHour: '19',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-8',
          actionHour: '5',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-8',
          actionHour: '12',
          logId: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-8',
          actionHour: '14',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-9',
          actionHour: '22',
          logId: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 4,
          actionDate: '2019-5-8',
          actionHour: '11',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-6',
          actionHour: '10',
          logId: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-7',
          actionHour: '15',
          logId: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-6',
          actionHour: '13',
          logId: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          actionId: 2,
          actionDate: '2019-5-11',
          actionHour: '14',
          logId: 4,
          created_at: new Date(),
          updated_at: new Date()
        },

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
    return queryInterface.bulkDelete('ActionDetails', null, {})
  }
};
