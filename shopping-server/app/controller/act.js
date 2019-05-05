const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'fail'
}

class ActController extends Controller {
  // 查询全部商品
  async index() {
    const ctx = this.ctx
    const actList = await ctx.service.act.index()

    await Promise.all(actList.map(async act => {
      act.dataValues.productList = await ctx.service.actproduct.listById(act.dataValues.id)
      await Promise.all(act.dataValues.productList.map(async product => {
        product.dataValues.detail = await ctx.service.product.show(product.dataValues.productId)
      }))
    }))

    ctx.body = {
      ...so,
      data: actList
    }
    ctx.status = 200

  }

  // 查询单个活动
  async show() {
    const ctx= this.ctx
    const id = ctx.params.id

    const act = await ctx.service.act.show(id)
    act.dataValues.productList = await ctx.service.actproduct.listById(id)

    await Promise.all(act.dataValues.productList.map(async product => {
      product.dataValues.detail = await ctx.service.product.show(product.dataValues.productId)
    }))

    ctx.body = {
      ...so,
      data: act
    }
    ctx.status = 200
  }

  // 创建一个商品
  async create() {
    const ctx = this.ctx
    const result = await ctx.service.act.create(ctx.request.body)
    if(result) {
      ctx.body = {
        ...so,
        data: result
      }
    }else {
      ctx.body = {
        ...fo
      }
    }

    ctx.status = 200
  }

  // 更新商品状态
  async update() {
    const ctx = this.ctx
    const id = ctx.params.id
    const act = await ctx.service.act.show(id)
    if(!act) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.act.update(id, ctx.request.body)
      if(result){
        ctx.body = {
          ...so
        }
      }else {
        ctx.body = {
          ...fo
        }
      }
    }
    ctx.status = 200
  }

  // 删除一条商品
  async destroy() {
    const ctx = this.ctx
    const id = ctx.params.id
    const act = await ctx.service.act.show(id)
    if(!act) {
      ctx.body = {
        ...fo,
        message: '查无此商品'
      }
    }else {
      const result = await ctx.service.act.destroy(id)
      if(result) {
        ctx.body = {
          ...so
        }
      }else {
        ctx.body = {
          ...fo
        }
      }
    }
    ctx.status = 200
  }

}

module.exports = ActController
