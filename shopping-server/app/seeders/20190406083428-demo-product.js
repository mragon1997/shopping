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
      'Products',
      [
        {
          name: 'Apple iPhone XR (A2108) 128GB 移动联通电信4G手机 双卡双待',
          brandId: 1,
          price: 6049,
          actPrice: 5949,
          isAct: true,
          mainPic:
            'https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:
            'Apple MacBook Pro 13.3英寸笔记本电脑 2018新款（四核八代i5 8G 256G固态硬盘 MR9U2CH/A）',
          brandId: 1,
          price: 13599,
          actPrice: 12549,
          isAct: true,
          mainPic:
            'https://img13.360buyimg.com/n7/jfs/t21631/84/2298558907/306845/1e75dd0c/5b4ee806N5fdcb463.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:
            'Apple iPad 平板电脑 2018年新款9.7英寸（128G WLAN版/A10 芯片/Retina显示屏 MR7K2CH/A)',
          brandId: 1,
          price: 3359,
          actPrice: 3199,
          isAct: true,
          mainPic:
            'https://img12.360buyimg.com/n7/jfs/t18496/191/1094234567/72578/837eeaaa/5abb0fe7N5f2b7ed2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Apple AirPods 蓝牙无线耳机',
          brandId: 1,
          price: 1199,
          actPrice: 999,
          isAct: true,
          mainPic:
            'https://img10.360buyimg.com/n7/jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg',
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

    return queryInterface.bulkDelete('Products', null, {})
  }
}
