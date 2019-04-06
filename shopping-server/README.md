# shopping-server

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

#### 创建商品模型

sequelize model:create --name Product --attributes name:string,brandId:integer,price:integer,actPrice:integer,isAct:boolean,mainPic:string

#### 创建详情图模型

sequelize model:create --name DetailPic --attributes productId:integer,picAddress:string

#### 创建用户模型

sequelize model:create --name User --attributes tel:string,password:string,roleId:integer

#### 创建身份模型

sequelize model:create --name Role --attributes roleName:string

#### 创建活动模型

sequelize model:create --name Act --attributes actName:string,beginTime:date,endTime:date

#### 创建活动商品模型

sequelize model:create --name ActProduct --attributes actId:integer,productId:integer

#### 创建颜色模型

sequelize model:create --name Color --attributes colorName:string

#### 创建品牌模型

sequelize model:create --name Brand --attributes brandName:string

#### 创建订单模型

sequelize model:create --name Order --attributes userId:integer,productId:integer,colorId:integer,productNum:integer,address:string

#### 创建购物车模型

sequelize model:create --name Cart --attributes userId:integer,productId:integer,colorId:integer,productNum:integer

#### 创建表

sequelize db:migrate

#### 创建种子，生成测试数据

sequelize seed:generate --name demo-role

#### 将演示数据插入数据库中

sequelize db:seed:all

#### 商品数据：

https://item.jd.com/100000177760.html

#### 商品模拟数据

return queryInterface.bulkInsert(
'Products',
[
{
name: 'Apple iPhone XR (A2108) 128GB 移动联通电信 4G 手机 双卡双待',
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
'Apple MacBook Pro 13.3 英寸笔记本电脑 2018 新款（四核八代 i5 8G 256G 固态硬盘 MR9U2CH/A）',
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
'Apple iPad 平板电脑 2018 年新款 9.7 英寸（128G WLAN 版/A10 芯片/Retina 显示屏 MR7K2CH/A)',
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

#### 颜色模拟数据

return queryInterface.bulkInsert(
'Colors',
[
{
colorName: '黑色',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '蓝色',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '白色',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '黄色',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '红色',
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)

#### 品牌模拟数据

return queryInterface.bulkInsert(
'Brands',
[
{
colorName: '苹果',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '索尼',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: 'Beats',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '华为',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '小米',
createdAt: new Date(),
updatedAt: new Date()
},
,
{
colorName: 'Audio-technica',
createdAt: new Date(),
updatedAt: new Date()
},
,
{
colorName: '联想',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '华硕',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '宏碁',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '佳能',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '富士',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: 'Gopro',
createdAt: new Date(),
updatedAt: new Date()
},
{
colorName: '大疆',
createdAt: new Date(),
updatedAt: new Date()
},
,
{
colorName: '极米',
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)

#### 详情图模拟数据

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

#### 身份模拟数据

return queryInterface.bulkInsert(
'Roles',
[
{
roleName: '管理员',
createdAt: new Date(),
updatedAt: new Date()
},
{
roleName: '运营',
createdAt: new Date(),
updatedAt: new Date()
},
{
roleName: '普通用户',
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)

#### 用户模拟数据

return queryInterface.bulkInsert(
'Users',
[
{
tel: '18888888888',
password: 'admin8888',
roleId: '1',
createdAt: new Date(),
updatedAt: new Date()
},
{
tel: '16666666666',
password: 'operate6666',
roleId: '2',
createdAt: new Date(),
updatedAt: new Date()
},
,
{
tel: '14444444444',
password: 'loser4444',
roleId: '3',
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)

#### 活动模拟数据

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

#### 活动商品模拟数据

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

#### 订单模拟数据

return queryInterface.bulkInsert(
'Orders',
[
{
userId: 3,
productId: 1,
colorId: 1,
productNum: 1,
address: '四川省攀枝花市东沟县洗澡堂子大街 048 号',
createdAt: new Date(),
updatedAt: new Date()
},
{
userId: 3,
productId: 1,
colorId: 2,
productNum: 2,
address: '四川省攀枝花市东沟县洗澡堂子大街 048 号',
createdAt: new Date(),
updatedAt: new Date()
},
{
userId: 3,
productId: 1,
colorId: 3,
productNum: 10,
address: '四川省攀枝花市东沟县洗澡堂子大街 048 号',
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)

#### 购物车模拟数据

return queryInterface.bulkInsert(
'Carts',
[
{
userId: 3,
productId: 1,
colorId: 1,
productNum: 1,
createdAt: new Date(),
updatedAt: new Date()
},
{
userId: 3,
productId: 1,
colorId: 2,
productNum: 2,
createdAt: new Date(),
updatedAt: new Date()
},
{
userId: 3,
productId: 1,
colorId: 3,
productNum: 10,
createdAt: new Date(),
updatedAt: new Date()
}
],
{}
)
