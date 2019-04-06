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
      'DetailPics',
      [
        {
          productId: 1,
          picAddress:
            'https://img10.360buyimg.com/cms/jfs/t1/32255/33/4631/335252/5c7f77e1Ed03f9568/f205d9c99a2b4b01.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 1,
          picAddress:
            'https://img14.360buyimg.com/cms/jfs/t1/10243/28/13159/434204/5c7f77e1E77b34286/7da561e321879d1e.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 1,
          picAddress:
            'https://img12.360buyimg.com/cms/jfs/t1/25003/38/9414/543832/5c7f77e1E1c0f605a/ad5158287c23c4c6.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 1,
          picAddress:
            'https://img14.360buyimg.com/cms/jfs/t1/18348/33/9569/388862/5c7f77e1E652dfb72/2da44463e27668dd.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          productId: 2,
          picAddress:
            'https://img12.360buyimg.com/cms/jfs/t21604/321/2235821603/176266/61a2954a/5b4ee9a3Nfa7ef2fb.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          picAddress:
            'https://img14.360buyimg.com/cms/jfs/t22210/210/2352528613/175652/ffe35f8f/5b4ee9a2N84a12dc2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          picAddress:
            'https://img10.360buyimg.com/cms/jfs/t21370/315/2334948498/190635/27a4da84/5b4ee9a2Na96828ca.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          picAddress:
            'https://img14.360buyimg.com/cms/jfs/t18544/263/1107316902/79725/66f576d0/5abb04cfN2dc4ef82.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          picAddress:
            'https://img13.360buyimg.com/cms/jfs/t17647/124/1056832277/133908/3f790faf/5abb04d0Ne619b0b8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          picAddress:
            'https://img11.360buyimg.com/cms/jfs/t17200/136/1081596667/238318/4d21572e/5abb04d1Nccc96c9f.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          picAddress:
            'https://img12.360buyimg.com/cms/jfs/t15868/250/2665671989/228930/f3794af2/5abb04d1N43c9547b.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          productId: 4,
          picAddress:
            'https://img30.360buyimg.com/sku/jfs/t19966/36/805854254/46069/9d23bb32/5b0be245Nbb79dae8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 4,
          picAddress:
            'https://img30.360buyimg.com/sku/jfs/t22018/7/383614945/69812/4a88e2d1/5b0be246N98d9792f.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 4,
          picAddress:
            'https://img30.360buyimg.com/sku/jfs/t20383/70/405183105/42332/481009fa/5b0be246Nf0a0dd27.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 4,
          picAddress:
            'https://img30.360buyimg.com/sku/jfs/t20440/182/392497373/56289/b9c30fd4/5b0be246Nb1be04e9.jpg',
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
    return queryInterface.bulkDelete('DetailPics', null, {})
  }
}
