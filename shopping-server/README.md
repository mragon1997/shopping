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

sequelize model:create --name Product --attributes id:integer,name:string,brandId:integer,colorId:integer,price:integer,actPrice:integer,isAct:boolean,mainPic:string

#### 创建详情图模型

sequelize model:generate --name DetailPic --attributes id:integer,productId:integer,picAddress:string

#### 创建用户模型

sequelize model:create --name User --attributes id:integer,tel:string,password:string,roleId:integer

#### 创建身份模型

sequelize model:create --name Role --attributes id:integer,roleName:string

#### 创建活动模型

sequelize model:create --name Act --attributes id:integer,actName:string,beginTime:date,endTime:date

#### 创建活动商品模型

sequelize model:create --name ActProduct --attributes id:integer,actId:integer,productId:integer

#### 创建颜色模型

sequelize model:create --name Color --attributes id:integer,colorName:string

#### 创建品牌模型

sequelize model:create --name Brand --attributes id:integer,brandName:string

#### 创建订单模型

sequelize model:create --name Order --attributes id:integer,userId:integer,productId:integer,colorId:integer,productNum:integer,address:string

#### 创建购物车模型

sequelize model:create --name Cart --attributes id:integer,userId:integer,productId:integer,colorId:integer,productNum:integer

#### 创建表

sequelize db:migrate

#### 创建种子，生成测试数据

sequelize seed:generate --name demo-role

#### 将演示数据插入数据库中

sequelize db:seed:all
